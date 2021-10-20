const fs = require('fs');
const cheerio = require('cheerio');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

function isNotEmptyArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

// 中划线转驼峰
function toHump(name, big) {
  const hump = name.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
  if (big) {
    return hump[0].toUpperCase() + hump.slice(1);
  }
  return hump;
}

// 首字母转换为大写
function initialsToUpper(str) {
  if (typeof str === 'string' && str) {
    return str.replace(/^(\w)/, (w) => w.toUpperCase());
  }
  return str;
}

// 获取组件文件名-主组件名
function getBaseComponentName(filePath) {
  if (typeof filePath === 'string' && filePath) {
    const [a, name] = filePath.match(/\/([a-zA-Z\-]+)\/demo\.md/);
    return name.split('-').map(initialsToUpper).join('');
  }
  return '';
}

// 获取组件所有组件名(包括子组件)
function getAllComponentName(filePath, mdStr) {
  const name = getBaseComponentName(filePath);
  const reg = new RegExp(`(?<=<)(${name}(\\.[^\\s>]+)?)`, 'ig');
  const result = mdStr.match(reg);
  return [name, [...new Set(result)]];
}

// 获取组件Demo
function getComponentExample(name, mdStr) {
  const reg = new RegExp(`( *<${name}([\\s\\S]*?((?<=(<\\/${name}>))|(?<=\\/>))))[\s\S]*`, 'gi');
  const arr = mdStr.match(reg) || [];
  return arr.sort((a, b) => a.length < b.length)[0];
}

// JSON 格式化
function jsonStringify(data, isPretty = true) {
  return JSON.stringify(data, null, 2 * isPretty);
}

//
const TYPE_LIST = ['prop', 'type', 'default', 'desc'];

// 处理 html
function dealHtml(html, name) {
  const $ = cheerio.load(html);
  const tables = $('table');
  const props = [...tables].reduce((result, ele) => {
    const prevTitle = $(ele).prev().text();
    const key = prevTitle === 'API' ? name : prevTitle;
    const trList = Array.from($(ele).find('tbody tr'));
    const propList = [...trList].map((tr) => {
      const tdList = $(tr).find('td');

      return [...tdList].reduce((result, td, index) => {
        const text = $(td).text().trim();
        result[TYPE_LIST[index]] = text;
        return result;
      }, {});
    });
    result[key] = propList;
    return result;
  }, {});
  // console.log(apiMap);
  return {
    title: $('h1').text(),
    props,
  };
}

/**
 * 将json转成md
 * @param {object} params props描述对象
 * @returns 返回 hover时展示的md内容
 */
function transformJSON2String(params) {
  if (!(Array.isArray(params) && params.length)) {
    return '';
  }
  const rowsString = params
    .map((item) => {
      const { prop, type, desc } = item;
      const upProp = toHump(prop, true);
      return `| ${upProp} | ${type || '-'} | ${item.default} | ${desc || '-'} |`;
    })
    .join('\n');
  const string = `| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n${rowsString}\n\n`;
  return string;
}

/**
 * 将对象写入到json文件
 * @param {string} filePath 文件路径及名称
 * @param {json} json 文件内容对象
 */
function writeJsonFile(filePath, json) {
  fs.writeFileSync(filePath /*`./ dist / ${ name }.json`*/, jsonStringify(json), { mode: 0o666 });
}

// 格式化 snippets
function formatSnippets(snippets) {
  const [a, str = ''] = snippets.match(/^(\s+)</) || [];
  const reg = new RegExp(`\\n(\\s{${str.length}})`, 'g');
  return snippets.replace(reg, '\n').trim();
}

// 创建snippets
function createSnippets(arr) {
  if (!isNotEmptyArray(arr)) {
    return {};
  }
  return arr.reduce((result, item) => {
    const { snippets, title } = item;
    const keys = Object.keys(snippets);
    keys.map((key) => {
      result[key] = {
        prefix: `za-${key}`,
        scope: 'javascript,typescript',
        body: [formatSnippets(snippets[key])],
        description: title,
      };
    });
    return result;
  }, {});
}

// 处理 md 文件组
function dealMdFiles(files) {
  return files.map((filePath) => {
    const mdStr = fs.readFileSync(filePath, 'utf-8');
    // 组件名
    const [baseName, allName] = getAllComponentName(filePath, mdStr);
    const { title, props } = dealHtml(md.render(mdStr), baseName);
    return {
      name: baseName,
      title,
      props,
      snippets: allName.reduce((res, name) => {
        res[name] = getComponentExample(name, mdStr);
        return res;
      }, {}),
    };
  }, {});
}

module.exports = {
  writeJsonFile,
  dealMdFiles,
  createSnippets,
};
