import { Placeholders } from "../../../types/Placeholders";
import { SnippetContent } from "../../../types/Snippet";
import {
  reactComponent,
  propsStateInterface,
  innerComponentReturn,
  exportDefault,
  react,
  propsTypeInterface,
  innerComponent,
  reactPureComponent,
} from "../../sharedSnippets";

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

const typescriptReactClassComponent: SnippetContent = {
  key: "typescriptReactClassComponent",
  prefix: "tsrcc",
  description:
    "Creates a React component class with ES7 module system and TypeScript interfaces",
  body: [
    ...reactComponent,
    "",
    ...propsStateInterface,
    `export default class ${Placeholders.FileName} extends Component<Props, State> {`,
    "  state = {}",
    "",
    ...innerComponentReturn,
    "}",
  ],
};

const typescriptReactClassExportComponent: SnippetContent = {
  key: "typescriptReactClassExportComponent",
  prefix: "tsrce",
  body: [
    ...reactComponent,
    "",
    ...propsStateInterface,
    `class ${Placeholders.FileName} extends Component<Props, State> {`,
    "  state = {}",
    "",
    ...innerComponentReturn,
    "}",
    ...exportDefault,
  ],
  description:
    "Creates a React component class with ES7 module system and TypeScript interfaces",
};

const typescriptReactFunctionalExportComponent: SnippetContent = {
  key: "typescriptReactFunctionalExportComponent",
  prefix: "tsrfce",
  body: [
    ...react,
    "",
    ...propsTypeInterface,
    `function ${Placeholders.FileName}({}: Props) {`,
    ...innerComponent,
    "}",
    ...exportDefault,
  ],
  description:
    "Creates a React Functional Component with ES7 module system and TypeScript interface",
};

const typescriptReactFunctionalComponent: SnippetContent = {
  key: "typescriptReactFunctionalComponent",
  prefix: "tsrfc",
  body: [
    ...react,
    "",
    ...propsTypeInterface,
    `export default function ${Placeholders.FileName}({}: Props) {`,
    ...innerComponent,
    "}",
  ],
  description:
    "Creates a React Functional Component with ES7 module system and TypeScript interface",
};

const typescriptReactArrowFunctionExportComponent: SnippetContent = {
  key: "typescriptReactArrowFunctionExportComponent",
  prefix: "tsrafce",
  body: [
    ...react,
    "",
    ...propsTypeInterface,
    `const ${Placeholders.FileName} : React.FC<Props> = (props: Props) => {`,
    ...innerComponent,
    "}",
    ...exportDefault,
  ],
  description:
    "Creates a React Arrow Function Component with ES7 module system and TypeScript interface",
};

const typescriptReactArrowFunctionComponent: SnippetContent = {
  key: "typescriptReactArrowFunctionComponent",
  prefix: "tsrafc",
  body: [
    ...react,
    "",
    ...propsTypeInterface,
    `const ${Placeholders.FileName} : React.FC<Props> = (props) => {`,
    ...innerComponent,
    "}",
  ],
  description:
    "Creates a React Arrow Function Component with ES7 module system and TypeScript interface",
};

const typescriptReactClassPureComponent: SnippetContent = {
  key: "typescriptReactClassPureComponent",
  prefix: "tsrpc",
  body: [
    ...reactPureComponent,
    "",
    ...propsTypeInterface,
    `export default class ${Placeholders.FileName} extends PureComponent<Props> {`,
    ...innerComponentReturn,
    "}",
  ],
  description:
    "Creates a React pure component class with ES7 module system and TypeScript interface",
};

const typescriptReactClassExportPureComponent: SnippetContent = {
  key: "typescriptReactClassExportPureComponent",
  prefix: "tsrpce",
  body: [
    ...reactPureComponent,
    "",
    ...propsTypeInterface,
    `class ${Placeholders.FileName} extends PureComponent<Props> {`,
    ...innerComponentReturn,
    "}",
    ...exportDefault,
  ],
  description:
    "Creates a React pure component class with ES7 module system and TypeScript interface",
};

const TypescriptComponentsSnippets = [
  exportType,
  exportInterface,
  typescriptReactClassComponent,
  typescriptReactClassExportComponent,
  typescriptReactFunctionalExportComponent,
  typescriptReactFunctionalComponent,
  typescriptReactArrowFunctionExportComponent,
  typescriptReactArrowFunctionComponent,
  typescriptReactClassPureComponent,
  typescriptReactClassExportPureComponent,
];

export default TypescriptComponentsSnippets;
