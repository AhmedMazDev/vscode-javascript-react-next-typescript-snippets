import { Placeholders } from "../../types/Placeholders";
import { SnippetContent } from "../../types/Snippet";

const method: SnippetContent = {
  key: "method",
  prefix: "met",
  body: [
    `${Placeholders.FirstTab} = (${Placeholders.SecondTab}) => {${Placeholders.ThirdTab}}`,
  ],
  description: "Creates a method inside a class",
};

const propertyGet: SnippetContent = {
  key: "propertyGet",
  prefix: "pge",
  body: [
    `get ${Placeholders.FirstTab}() {`,
    `  return this.${Placeholders.SecondTab}`,
    "}",
  ],
  description: "Creates a getter property inside a class",
};

const propertySet: SnippetContent = {
  key: "propertySet",
  prefix: "pse",
  body: [
    `set ${Placeholders.FirstTab}(${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: "Creates a setter property inside a class",
};

const forEach: SnippetContent = {
  key: "forEach",
  prefix: "fre",
  body: [
    `${Placeholders.FirstTab}.forEach(${Placeholders.SecondTab} => {${Placeholders.ThirdTab}})`,
  ],
  description: "Creates a forEach statement",
};

const forOf: SnippetContent = {
  key: "forOf",
  prefix: "fof",
  body: [
    `for(let ${Placeholders.FirstTab} of ${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: "Iterating over property names of iterable objects",
};

const forIn: SnippetContent = {
  key: "forIn",
  prefix: "fin",
  body: [
    `for(let ${Placeholders.FirstTab} in ${Placeholders.SecondTab}) {${Placeholders.ThirdTab}}`,
  ],
  description: "Iterating over property values of iterable objects",
};

const anonymousFunction: SnippetContent = {
  key: "anonymousFunction",
  prefix: "anfn",
  body: [`(${Placeholders.FirstTab}) => { ${Placeholders.SecondTab} }`],
  description: "Creates an anonymous function",
};

const namedFunction: SnippetContent = {
  key: "namedFunction",
  prefix: "nfn",
  body: [
    `const ${Placeholders.FirstTab} = (${Placeholders.SecondTab}) => { ${Placeholders.ThirdTab} }`,
  ],
  description: "Creates a named function",
};

const destructingObject: SnippetContent = {
  key: "destructingObject",
  prefix: "dob",
  body: [`const {${Placeholders.SecondTab}} = ${Placeholders.FirstTab}`],
  description: "Creates and assigns a local variable using object destructing",
};

const destructingArray: SnippetContent = {
  key: "destructingArray",
  prefix: "dar",
  body: [`const [${Placeholders.SecondTab}] = ${Placeholders.FirstTab}`],
  description: "Creates and assigns a local variable using array destructing",
};

const setInterval: SnippetContent = {
  key: "setInterval",
  prefix: "sti",
  body: [
    `setInterval(() => { ${Placeholders.FirstTab} }, ${Placeholders.SecondTab})`,
  ],
  description: "Executes the given function at specified intervals",
};

const setTimeOut: SnippetContent = {
  key: "setTimeOut",
  prefix: "sto",
  body: [
    `setTimeout(() => { ${Placeholders.FirstTab} }, ${Placeholders.SecondTab})`,
  ],
  description: "Executes the given function after the specified delay",
};

const promise: SnippetContent = {
  key: "promise",
  prefix: "prom",
  body: [
    `return new Promise((resolve, reject) => { ${Placeholders.FirstTab} })`,
  ],
  description: "Creates and returns a new Promise in the standard ES7 syntax",
};

const destructProps: SnippetContent = {
  key: "destructProps",
  prefix: "cp",
  body: [`const { ${Placeholders.FirstTab} } = this.props`],
  description: "Creates and assigns a local variable using props destructing",
};

const destructState: SnippetContent = {
  key: "destructState",
  prefix: "cs",
  body: [`const { ${Placeholders.FirstTab} } = this.state`],
  description: "Creates and assigns a local variable using state destructing",
};

const classConstructor: SnippetContent = {
  key: "classConstructor",
  prefix: "rconst",
  body: [
    "constructor(props) {",
    "  super(props)",
    "",
    "  this.state = {",
    `     ${Placeholders.FirstTab}`,
    "  }",
    "}",
  ],
  description:
    "Adds a default constructor for it('', () => {})the class that contains props as arguments",
};

const emptyState: SnippetContent = {
  key: "emptyState",
  prefix: "est",
  body: [`state = { ${Placeholders.FirstTab} }`],
  description: "Creates empty state object. To be used in a constructor.",
};

const componentDidMount: SnippetContent = {
  key: "componentDidMount",
  prefix: "cdm",
  body: [`componentDidMount() { ${Placeholders.FirstTab} }`],
  description:
    "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.",
};

const shouldComponentUpdate: SnippetContent = {
  key: "shouldComponentUpdate",
  prefix: "scu",
  body: [
    `shouldComponentUpdate(nextProps, nextState) { ${Placeholders.FirstTab} }`,
  ],
  description:
    "Invoked before rendering when new props or state are being received. ",
};

const componentDidUpdate: SnippetContent = {
  key: "componentDidUpdate",
  prefix: "cdup",
  body: [
    `componentDidUpdate(prevProps, prevState) { ${Placeholders.FirstTab}} `,
  ],
  description:
    "Invoked immediately after the component's updates are flushed to the DOM.",
};

const componentWillUnmount: SnippetContent = {
  key: "componentWillUnmount",
  prefix: "cwun",
  body: [`componentWillUnmount() {${Placeholders.FirstTab} }`],
  description:
    "Invoked immediately before a component is unmounted from the DOM.",
};

const getDerivedStateFromProps: SnippetContent = {
  key: "getDerivedStateFromProps",
  prefix: "gdsfp",
  body: [
    `static getDerivedStateFromProps(props, state) {${Placeholders.FirstTab}}`,
  ],
  description:
    "Invoked right before calling the render method, both on the initial mount and on subsequent updates.",
};

const getSnapshotBeforeUpdate: SnippetContent = {
  key: "getSnapshotBeforeUpdate",
  prefix: "gsbu",
  body: [
    `getSnapshotBeforeUpdate = (prevProps, prevState) => {${Placeholders.FirstTab}}`,
  ],
  description:
    "Called right before mutations are made (e.g. before the DOM is updated)",
};

const createContext: SnippetContent = {
  key: "createContext",
  prefix: "rcontext",
  body: [`const ${Placeholders.FirstTab} = React.createContext()`],
  description: "Create React context",
};

const createRef: SnippetContent = {
  key: "createRef",
  prefix: "cref",
  body: [`this.${Placeholders.FirstTab}Ref = React.createRef()`],
  description: "Create ref statement used inside constructor",
};

const componentSetStateObject: SnippetContent = {
  key: "componentSetStateObject",
  prefix: "sst",
  body: [`this.setState({${Placeholders.FirstTab}})`],
  description: "Performs a shallow merge of nextState into current state",
};

const componentSetStateFunc: SnippetContent = {
  key: "componentSetStateFunc",
  prefix: "ssf",
  body: [
    `this.setState((state, props) => { return { ${Placeholders.FirstTab} }})`,
  ],
  description: "Performs a shallow merge of nextState into current state",
};

const componentProps: SnippetContent = {
  key: "componentProps",
  prefix: "props",
  body: [`this.props.${Placeholders.FirstTab}`],
  description: "Access component's props",
};

const componentState: SnippetContent = {
  key: "componentState",
  prefix: "state",
  body: [`this.state.${Placeholders.FirstTab}`],
};

const bindThis: SnippetContent = {
  key: "bindThis",
  prefix: "bnd",
  body: [
    `this.${Placeholders.FirstTab} = this.${Placeholders.FirstTab}.bind(this)`,
  ],
  description: "Binds this to a method",
};

const commentBigBlock: SnippetContent = {
  key: "commentBigBlock",
  prefix: "cmmb",
  body: ["/**", ` * ${Placeholders.FirstTab}`, " */"],
};

const hocComponentWithRedux: SnippetContent = {
  key: "hocComponentWithRedux",
  prefix: "hocredux",
  body: [
    "import React from 'react'",
    "import { connect } from 'react-redux'",
    "import PropTypes from 'prop-types'",
    "",
    "export const mapStateToProps = state => ({})",
    "",
    "export const mapDispatchToProps = {}",
    "",
    `export const ${Placeholders.FirstTab} = (WrappedComponent) => {`,
    "  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
    "",
    "  hocComponent.propTypes = {}",
    "",
    "  return hocComponent",
    "}",
    "",
    `export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${Placeholders.FirstTab}(WrapperComponent))`,
    "",
  ],
};

const hocComponent: SnippetContent = {
  key: "hocComponent",
  prefix: "hoc",
  body: [
    "import React from 'react'",
    "import PropTypes from 'prop-types'",
    "",
    "export default (WrappedComponent) => {",
    "  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
    "",
    "  hocComponent.propTypes = {}",
    "",
    "  return hocComponent",
    "}",
    "",
  ],
};

const typeofSnippet: SnippetContent = {
  key: "typeofSnippet",
  prefix: "tpf",
  body: [`typeof ${Placeholders.FirstTab}`],
};

const OtherSnippets = [
  method,
  propertyGet,
  propertySet,
  forEach,
  forOf,
  forIn,
  anonymousFunction,
  namedFunction,
  destructingObject,
  destructingArray,
  setInterval,
  setTimeOut,
  promise,
  destructProps,
  destructState,
  classConstructor,
  emptyState,
  componentDidMount,
  shouldComponentUpdate,
  componentDidUpdate,
  componentWillUnmount,
  getDerivedStateFromProps,
  getSnapshotBeforeUpdate,
  createContext,
  createRef,
  componentSetStateObject,
  componentSetStateFunc,
  componentProps,
  componentState,
  bindThis,
  commentBigBlock,
  hocComponentWithRedux,
  hocComponent,
  typeofSnippet,
];

export default OtherSnippets;
