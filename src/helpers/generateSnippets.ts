import { writeFile } from "fs";
import ImportSnippets from "../sourceSnippets/imports";

const generateSnippets = async () => {
  const snippets = [...ImportSnippets].map((s) => {
    return {
      ...s,
      scope: "typescript,typescriptreact,javascript,javascriptreact",
    };
  });

  console.log("snippets : ", snippets);
  //   console.log("snippets JSON : ", JSON.parse(snippets));

  new Promise((resolve) => {
    writeFile(
      __dirname + "/../snippets/generatedSnippets.json",
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
