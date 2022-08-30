import { writeFile } from "fs";
import path from "path";
import ConsoleSnippets from "../sourceSnippets/Javascript/console";
import ExportSnippets from "../sourceSnippets/Javascript/export";
import ImportsSnippets from "../sourceSnippets/Javascript/import";
import NextApiSnippets from "../sourceSnippets/Javascript/NextJs/api";
import NextFunctionsSnippets from "../sourceSnippets/Javascript/NextJs/functions";
import NextImportsSnippets from "../sourceSnippets/Javascript/NextJs/imports";
import OtherSnippets from "../sourceSnippets/Javascript/others";
import ComponentsSnippets from "../sourceSnippets/Javascript/React/components";
import HooksSnippets from "../sourceSnippets/Javascript/React/hooks";
import ImportsReactSnippets from "../sourceSnippets/Javascript/React/imports";
import NextTypescriptApiSnippets from "../sourceSnippets/Typescript/NextJs/api";
import NextTypescriptFunctionsSnippets from "../sourceSnippets/Typescript/NextJs/functions";
import TypescriptComponentsSnippets from "../sourceSnippets/Typescript/React/components";
import HooksTypescriptSnippets from "../sourceSnippets/Typescript/React/hooks";
import prettier from 'prettier';

export const generateReadme = async () => {
  const readme = `
# VS Code React/NextJs/JS/Typescript snippets
    
JavaScript, React and NextJs snippets with Typescript support for [VS Code](https://code.visualstudio.com/)

## Installation

### Install From Visual Studio Marketplace 👉 [HERE](https://www.google.com/)


## Options

This Extenstion provides the following options to customize the behaviour of the snippets

|           Option        | Description                                                                  |
| ---------------:        | ---------------------------------------------------------------------------- |
|   languageScopes        | list of supported languages / files recognition default : \`typescript,typescriptreact,javascript,javascriptreact\`                             |
|       typescript        | adds additional typescript snippets                                          |
| typescript props prefix | Controls which prefix for typescript snippets should use for props/state.                                          |


## Special Thanks

Special Thanks to the following Repo :

- [ES7+ React/Redux/React-Native/JS snippets](https://github.com/chillios-ts/vscode-react-javascript-snippets#visual-studio-marketplace)


## List of available Snippets

1. [Javascript](#javascript)
    1. [Console](#console)
    2. [Import and Export](#Import-Export)
    3. [Other Snippets](#other-snippets)


2. [React](#react)
    1. [Components](#components)
    2. [Hooks](#react-hooks)
    3. [Imports](#react-imports)


3. [NextJs](#next-js)
    1. [Imports](#next-imports)
    2. [Functions](#next-functions)
    3. [API](#next-api)


# Javascript

# Console

${ConsoleSnippets.map((snippet) => {
  return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
}).join("\n")}


# Import/Export

${[...ImportsSnippets, ...ExportSnippets]
  .map((snippet) => {
    return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
  })
  .join("\n")}

# Others Snippets

${OtherSnippets.map((snippet) => {
  return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
}).join("\n")}

# React

# Components 

${[...ComponentsSnippets, ...TypescriptComponentsSnippets]
  .map((snippet) => {
    return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
  })
  .join("\n")}

# Hooks

${[...HooksSnippets, ...HooksTypescriptSnippets]
  .map((snippet) => {
    return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
  })
  .join("\n")}

# Imports

${ImportsReactSnippets.map((snippet) => {
  return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
}).join("\n")}

# NextJS

# Imports

${NextImportsSnippets.map((snippet) => {
  return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
}).join("\n")}

# Functions

${[...NextFunctionsSnippets, ...NextTypescriptFunctionsSnippets]
  .map((snippet) => {
    return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
  })
  .join("\n")}

# API 

${[...NextApiSnippets, ...NextTypescriptApiSnippets]
  .map((snippet) => {
    return `
  ### \`${snippet.prefix}\`

  ${snippet.description}
  \`\`\`js
  ${snippet.body.join('\n')}
  \`\`\`
  `;
  })
  .join("\n")}

`;

  new Promise((resolve) => {
    writeFile(path.join(__dirname, "/../src/test.md"), readme, (error) => {
      if (error) {
        console.error(error);
      }
      return resolve(true);
    });
  });
};
