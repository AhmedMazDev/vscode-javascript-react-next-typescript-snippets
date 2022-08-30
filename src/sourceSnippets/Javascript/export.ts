import { Placeholders } from "../../types/Placeholders";
import { SnippetContent } from "../../types/Snippet";

const exportDefault: SnippetContent = {
  key: "exportDefault",
  prefix: "exp",
  body: [`export default ${Placeholders.FirstTab}`],
};

const exportDestructing: SnippetContent = {
  key: "exportDestructing",
  prefix: "exd",
  body: [
    `export { ${Placeholders.SecondTab} } from '${Placeholders.FirstTab}'`,
  ],
};

const exportAs: SnippetContent = {
  key: "exportAs",
  prefix: "exa",
  body: [
    `export { ${Placeholders.SecondTab} as ${Placeholders.ThirdTab} } from '${Placeholders.FirstTab}'`,
  ],
};

const exportNamedFunction: SnippetContent = {
  key: "exportNamedFunction",
  prefix: "enf",
  body: [
    `export const ${Placeholders.FirstTab} = (${Placeholders.SecondTab}) => {${Placeholders.ThirdTab}}`,
  ],
  description: "Export named function",
};

const exportDefaultFunction: SnippetContent = {
  key: "exportDefaultFunction",
  prefix: "edf",
  body: [
    `export default (${Placeholders.FirstTab}) => {${Placeholders.SecondTab}}`,
  ],
  description: "Export default function",
};

const exportDefaultNamedFunction: SnippetContent = {
  key: "exportDefaultNamedFunction",
  prefix: "ednf",
  body: [
    `export default function ${Placeholders.FirstTab}(${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: "Export default named function",
};

const ExportSnippets = [
  exportDefault,
  exportDestructing,
  exportAs,
  exportNamedFunction,
  exportDefaultFunction,
  exportDefaultNamedFunction,
];

export default ExportSnippets;
