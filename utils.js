var Mdjs = require('md-js').Mdjs;
var fs = require('fs');
var path = require('path');
var mdjs = new Mdjs();
const cheerio = require('cheerio');

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

/**
 * 获取所有组件的md文件
 * @param {string} rootPath md文件的根路径
 * @param {Array} noMdDirs 根目录下，不需要提取md的目录集合
 * @returns 返回所有md文件路径
 */
function getComponentsMdPaths(rootPath, noMdDirs) {
  const filePaths = [];
  fs.readdirSync(rootPath).forEach((file, index) => {
    // console.log('读取目录', file, typeof file)
    // 过滤不需要提取md文件的目录;
    if (noMdDirs.includes(file)) { return; }
    filePaths.push(path.join(rootPath, '.', toHump(file, true), '/demo.md'));
  });
  return filePaths;
}

/**
 * 通过文件路径读取md文件中的table部分内容
 * @param {string} filePath md文件路径
 * @param {RegExp} componentNameReg 组件名称正则
 * @returns 返回表格部分的md内容
 */
function getMdContentByFilePath(filePath, componentNameReg) {
  // 读取到md内容
  var content = fs.readFileSync(filePath, { encoding: 'utf-8' });
  // 截取到API部分
  var apiIndex = content.indexOf('## API');
  // 没有API这块的直接不处理
  if (apiIndex > -1) {
    console.log('filePath:', filePath);
    // 通过路径截取组件名称
    const componentName = filePath.match(componentNameReg)[1];
    if (!componentName) { return; }
    // 截取到table部分的markdown内容
    var tableMD = content.substr(apiIndex);
    return { tableMD, componentName: toHump(componentName, true) };
  }
}

/**
 * 将zarm源码中提取API部分的markdown内容，转换成json文件
 * @param {string} mdText markdown源文件内容
 * @returns 
 */
function getTable2json(mdText) {
  var propRows = [];
  var tableHtml = mdjs.md2html(mdText);
  const $ = cheerio.load(tableHtml);
  var rows = Array.from($('table tbody tr'));
  // 4列【prop属性、type类型、default默认值、desc说明】

  rows.forEach(row => {
    var cols = Array.from(row.children);

    var data = [];
    cols.forEach((col, index) => {
      // 获取到表格中的文案
      var text = Array.from(col.children)[0].data;
      data.push(text);
    });

    propRows.push({ prop: data[0], type: data[1], default: data[2], desc: data[3] });
  });
  // console.log('json对象', propRows);
  const mdString = transformJSON2String(propRows);
  return { propRows, mdString };
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
  const rowsString = params.map((item) => {
    const { prop, type, desc } = item;
    const upProp = toHump(prop, true);
    return `| ${upProp} | ${type || '-'} | ${item.default} | ${desc || '-'} |`;
  }).join('\n');
  const string = `| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n${rowsString}\n\n`;
  return string;
}
/**
 * 将对象写入到json文件
 * @param {string} filePath 文件路径及名称
 * @param {json} json 文件内容对象
 */
function writeJsonFile(filePath, json) {
  fs.writeFileSync(filePath /*`./ dist / ${ name }.json`*/, json, { mode: 0o666 });
}
module.exports = {
  getTable2json,
  writeJsonFile,
  getMdContentByFilePath,
  getComponentsMdPaths,
};
