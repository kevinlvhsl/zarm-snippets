// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import componentNameMap from './props';
import componentNameMap from './hover.json';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "zarm-snippets" is now active!');
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('zarm-snippets.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from zarm-snippets!');
  });

  vscode.languages.registerHoverProvider('javascript', {
    provideHover(document, position) {
      // 获取当前hover字符
      const str = document.getText(document.getWordRangeAtPosition(position));
      const names = Object.keys(componentNameMap);
      // console.log(names, names.includes(str), str);
      if (names.includes(str)) {
        const md: string = componentNameMap[str];
        console.log('md---', md);
        return new vscode.Hover(new vscode.MarkdownString(md));
      }
    },
  });
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
