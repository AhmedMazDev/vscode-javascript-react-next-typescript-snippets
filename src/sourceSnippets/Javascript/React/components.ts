import { Placeholders } from "../../../types/Placeholders";
import { SnippetContent } from "../../../types/Snippet";
import {
  exportDefault,
  react,
  innerComponent,
  innerComponentReturn,
  reactComponent,
  reactWithMemo,
  reactPropTypes,
  reactPureComponent,
} from "../../sharedSnippets";

const reactClassComponent: SnippetContent = {
  key: "reactClassComponent",
  prefix: "rcc",
  body: [
    ...reactComponent,
    "",
    `export default class ${Placeholders.FileName} extends Component {`,
    ...innerComponentReturn,
    "}",
    "",
  ],
  description: "Creates a React component class with ES7 module system",
};

const reactClassExportComponent: SnippetContent = {
  key: "reactClassExportComponent",
  prefix: "rce",
  body: [
    ...reactComponent,
    "",
    `export class ${Placeholders.FileName} extends Component {`,
    ...innerComponentReturn,
    "}",
    ...exportDefault,
  ],
  description: "Creates a React component class with ES7 module system",
};

const reactFunctionalExportComponent: SnippetContent = {
  key: "reactFunctionalExportComponent",
  prefix: "rfce",
  body: [
    ...react,
    "",
    `function ${Placeholders.FileName}() {`,
    ...innerComponent,
    "}",
    ...exportDefault,
  ],
  description: "Creates a React Functional Component with ES7 module system",
};

const reactFunctionalComponent: SnippetContent = {
  key: "reactFunctionalComponent",
  prefix: "rfc",
  body: [
    ...react,
    "",
    `export default function ${Placeholders.FileName}() {`,
    ...innerComponent,
    "}",
    "",
  ],
  description: "Creates a React Functional Component with ES7 module system",
};

const reactArrowFunctionExportComponent: SnippetContent = {
  key: "reactArrowFunctionExportComponent",
  prefix: "rafce",
  body: [
    ...react,
    "",
    `const ${Placeholders.FileName} = () => {`,
    ...innerComponent,
    "}",
    ...exportDefault,
  ],
  description:
    "Creates a React Arrow Function Component with ES7 module system",
};

const reactArrowFunctionComponent: SnippetContent = {
  key: "reactArrowFunctionComponent",
  prefix: "rafc",
  body: [
    ...react,
    "",
    `export const ${Placeholders.FileName} = () => {`,
    ...innerComponent,
    "}",
    "",
  ],
  description:
    "Creates a React Arrow Function Component with ES7 module system",
};

const reactClassPureComponent: SnippetContent = {
  key: "reactClassPureComponent",
  prefix: "rpc",
  body: [
    ...reactPureComponent,
    "",
    `export default class ${Placeholders.FileName} extends PureComponent {`,
    ...innerComponentReturn,
    "}",
    "",
  ],
  description: "Creates a React pure component class with ES7 module system",
};

const reactClassExportPureComponent: SnippetContent = {
  key: "reactClassExportPureComponent",
  prefix: "rpce",
  body: [
    ...reactPureComponent,
    "",
    `export class ${Placeholders.FileName} extends PureComponent {`,
    ...innerComponentReturn,
    "}",
    ...exportDefault,
  ],
  description:
    "Creates a React pure component class with ES7 module system export",
};

const reactFunctionMemoComponent: SnippetContent = {
  key: "reactFunctionMemoComponent",
  prefix: "rmc",
  body: [
    ...reactWithMemo,
    "",
    `const ${Placeholders.FileName} = memo(() => {`,
    ...innerComponent,
    "})",
    ...exportDefault,
  ],
  description: "Creates a React Memo Function Component with ES7 module system",
};

const ComponentsSnippets = [
  reactArrowFunctionComponent,
  reactArrowFunctionExportComponent,
  reactClassComponent,
  reactClassExportComponent,
  reactClassExportPureComponent,
  reactClassPureComponent,
  reactFunctionMemoComponent,
  reactFunctionalComponent,
  reactFunctionalExportComponent,
];

export default ComponentsSnippets;
