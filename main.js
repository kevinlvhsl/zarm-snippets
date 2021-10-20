const glob = require('glob');
const { writeJsonFile, dealMdFiles, createSnippets } = require('./utils');

function main() {
  glob('./node_modules/zarm/es/**/demo.md', function (er, files) {
    const dataSource = dealMdFiles(files);
    // console.log(JSON.stringify(mdMap));
    const snippets = createSnippets(dataSource);
    // console.log(jsonStringify(snippets));
    writeJsonFile('./aaa.json', dataSource);
    writeJsonFile('.vscode/code.code-snippets', snippets);
  });
}

main();
