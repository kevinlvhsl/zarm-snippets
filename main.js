
const {
  writeJsonFile,
  getMdContentByFilePath,
  getComponentsMdPaths,
  getTable2json
} = require('./utils');

const componentNameReg = /^node_modules\/zarm\/lib\/(.*)\/demo.md/;
const rootPath = './node_modules/zarm/lib';
const noMdDirs = ['alert', 'confirm', 'wheel', 'date-picker-view', 'date-select', 'trigger', 'picker-view', 'keyboard-picker', 'select', 'pinch-zoom', 'click-outside', 'config-receiver', '__tests__', 'style', 'index.js', 'index.native.js', 'utils'];

/**
 * 将md文件转换成json文件
 */
function main() {
  // 第一步 拿到zarm仓库下所有demo.md文件的路径
  const mdFilePaths = getComponentsMdPaths(rootPath, noMdDirs);
  const mkObject = {};
  // 第二步 遍历所有路径，拿到每个文件中的 API 部分md内容
  mdFilePaths.forEach(filePath => {
    try {
      console.log('filePath-', filePath);
      const { tableMD, componentName } = getMdContentByFilePath(filePath, componentNameReg);
      // 第三步，将md内容转成json
      var { propRows, mdString } = getTable2json(tableMD);
      mkObject[componentName] = mdString;
      // 第四步 将json写入文件中
      const jsonPath = `./src/api/${componentName}.json`;
      writeJsonFile(jsonPath, JSON.stringify(propRows, '', 2));
    } catch (error) {
      console.error(error);
    }
  });
  // 将组件的md对应文件写成对象供后面插件hover使用
  writeJsonFile('./src/props.ts', `export default ${JSON.stringify(mkObject, '', 2)}`);

}

main();
