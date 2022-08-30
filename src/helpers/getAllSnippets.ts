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

export const getAllSnippets = () => {
  const allSnippets = [
    ...ImportsSnippets,
    ...ExportSnippets,
    ...ConsoleSnippets,
    ...OtherSnippets,
    ...ImportReactSnippets,
    ...HooksSnippets,
    ...ComponentsSnippets,
  ];

  const config = getExtensionConfig();
  const snippets = allSnippets.reduce((acc, snippet) => {
    acc[snippet.key] = Object.assign(snippet, {
      ...snippet,
      body: replaceSnippetsPlaceholders(snippet.body),
      scope: config.languageScopes,
    });
    return acc;
  }, {} as Snippets);

  console.log("snippets:", snippets);

  return snippets;
};
