import { Placeholders } from "../../types/Placeholders";
import { SnippetContent } from "../../types/Snippet";

const exportType: SnippetContent = {
  body: [`export type ${Placeholders.FirstTab} = {${Placeholders.SecondTab}}`],
  key: "exportType",
  prefix: "exptp",
};

const exportInterface: SnippetContent = {
  key: "exportInterface",
  prefix: "expint",
  body: [
    `export interface ${Placeholders.FirstTab} {${Placeholders.SecondTab}}`,
  ],
};

const ExportTypescriptSnippets = [exportType, exportInterface];

export default ExportTypescriptSnippets;
