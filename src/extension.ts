import * as vscode from "vscode";
import generateSnippets from "./helpers/generateSnippets";
import generatedSnippets from "./snippets/generatedSnippets.json";

const showRestartMessage = async ({
  affectsConfiguration,
}: vscode.ConfigurationChangeEvent) => {
  if (affectsConfiguration("reactSnippets")) {
    await generateSnippets();
    setTimeout(() => {
      vscode.window
        .showWarningMessage(
          "React/NextJs Snippets: Please restart VS Code to apply snippet formatting changes",
          "Restart VS Code",
          "Ignore"
        )
        .then((action?: string) => {
          if (action === "Restart VS Code") {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    }, 1000);
  }
};

export async function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidChangeConfiguration(showRestartMessage);
  if (JSON.stringify(generatedSnippets).length < 10) {
    await generateSnippets();
  }
}
