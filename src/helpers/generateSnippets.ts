import { writeFile } from "fs";
import path = require("path");
import ImportSnippets from "../sourceSnippets/imports";
import { Snippets } from "../types/Snippet";

const getAllSnippets = () => {
  return [...ImportSnippets];
};

const generateSnippets = async () => {
  const snippets = getAllSnippets().reduce((acc, snippet) => {
    acc[snippet.key] = Object.assign(snippet, {
      ...snippet,
      scope: "typescript,typescriptreact,javascript,javascriptreact",
    });
    return acc;
  }, {} as Snippets);

  new Promise((resolve) => {
    writeFile(
      path.join(__dirname + "/../src/snippets/generatedSnippets.json"),
      JSON.stringify(snippets),
      (error) => {
        if (error) {
          console.error(error);
        }
        return resolve(true);
      }
    );
  });
};

export default generateSnippets;
