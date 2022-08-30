import ImportReactSnippets from "../sourceSnippets/Javascript/React/imports";
import ConsoleSnippets from "../sourceSnippets/Javascript/console";
import ComponentsSnippets from "../sourceSnippets/Javascript/React/components";
import HooksSnippets from "../sourceSnippets/Javascript/React/hooks";
import { Snippets } from "../types/Snippet";
import getExtensionConfig from "./getExtenstionConfig";
import { replaceSnippetsPlaceholders } from "./replaceSnippetsPlaceholders";
import ImportsSnippets from "../sourceSnippets/Javascript/import";
import ExportSnippets from "../sourceSnippets/Javascript/export";
import OtherSnippets from "../sourceSnippets/Javascript/others";
import TypescriptComponentsSnippets from "../sourceSnippets/Typescript/React/components";
import HooksTypescriptSnippets from "../sourceSnippets/Typescript/React/hooks";
import ExportTypescriptSnippets from "../sourceSnippets/Typescript/export";
import NextImportsSnippets from "../sourceSnippets/Javascript/NextJs/imports";
import NextFunctionsSnippets from "../sourceSnippets/Javascript/NextJs/functions";
import NextApiSnippets from "../sourceSnippets/Javascript/NextJs/api";
import NextTypescriptApiSnippets from "../sourceSnippets/Typescript/NextJs/api";
import NextTypescriptFunctionsSnippets from "../sourceSnippets/Typescript/NextJs/functions";

export const getAllSnippets = () => {
  const config = getExtensionConfig();

  const allSnippets = [
    ...ImportsSnippets,
    ...ExportSnippets,
    ...ConsoleSnippets,
    ...OtherSnippets,
    ...ImportReactSnippets,
    ...HooksSnippets,
    ...ComponentsSnippets,
    ...NextImportsSnippets,
    ...NextFunctionsSnippets,
    ...NextApiSnippets,
    ...(config.typescript ? TypescriptComponentsSnippets : []),
    ...(config.typescript ? HooksTypescriptSnippets : []),
    ...(config.typescript ? ExportTypescriptSnippets : []),
    ...(config.typescript ? NextTypescriptApiSnippets : []),
    ...(config.typescript ? NextTypescriptFunctionsSnippets : []),
  ];

  const snippets = allSnippets.reduce((acc, snippet) => {
    acc[snippet.key] = Object.assign(snippet, {
      ...snippet,
      body: replaceSnippetsPlaceholders(snippet.body),
      scope: config.languageScopes,
    });
    return acc;
  }, {} as Snippets);

  return snippets;
};
