import { Placeholders } from "../../types/Placeholders";
import { SnippetContent } from "../../types/Snippet";

const importSnippet: SnippetContent = {
  key: "import",
  prefix: "imp",
  body: [`import ${Placeholders.SecondTab} from '${Placeholders.FirstTab}'`],
};

const importNoModuleName: SnippetContent = {
  key: "importNoModuleName",
  prefix: "imn",
  body: [`import '${Placeholders.FirstTab}'`],
};

const importDestructing: SnippetContent = {
  key: "importDestructing",
  prefix: "imd",
  body: [
    `import { ${Placeholders.SecondTab} } from '${Placeholders.FirstTab}'`,
  ],
};

const importEverything: SnippetContent = {
  key: "importEverything",
  prefix: "ime",
  body: [
    `import * as ${Placeholders.SecondTab} from '${Placeholders.FirstTab}'`,
  ],
};

const importAs: SnippetContent = {
  key: "importAs",
  prefix: "ima",
  body: [
    `import { ${Placeholders.SecondTab} as ${Placeholders.ThirdTab} } from '${Placeholders.FirstTab}'`,
  ],
};

const ImportsSnippets = [
  importDestructing,
  importEverything,
  importNoModuleName,
  importAs,
  importSnippet,
];

export default ImportsSnippets;
