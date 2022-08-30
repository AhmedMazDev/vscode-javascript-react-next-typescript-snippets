import { writeFile } from "fs";
import path = require("path");
import { getAllSnippets } from "./getAllSnippets";

const generateSnippets = async () => {
  const snippets = getAllSnippets();

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
