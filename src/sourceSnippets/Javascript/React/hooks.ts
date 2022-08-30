import { Placeholders } from "../../../types/Placeholders";
import { SnippetContent } from "../../../types/Snippet";

const useEffect: SnippetContent = {
  key: "useEffect",
  prefix: "useEffectSnippet",
  body: [
    "useEffect(() => {",
    `  ${Placeholders.FirstTab}`,
    "",
    "  return () => {",
    `    ${Placeholders.SecondTab}`,
    "  }",
    `}, [${Placeholders.ThirdTab}])`,
    "",
  ],
};

const useContext: SnippetContent = {
  key: "useContext",
  prefix: "useContextSnippet",
  body: [
    `const ${Placeholders.FirstTab} = useContext(${Placeholders.SecondTab})`,
  ],
};

const useState: SnippetContent = {
  key: "useState",
  prefix: "useStateSnippet",
  body: [
    `const [${Placeholders.FirstTab}, set${Placeholders.Capitalize}] = useState(${Placeholders.SecondTab})`,
  ],
};

const useReducer: SnippetContent = {
  key: "useReducer",
  prefix: "useReducerSnippet",
  body: [
    `const [state, dispatch] = useReducer(${Placeholders.FirstTab}, ${Placeholders.SecondTab}, ${Placeholders.ThirdTab})`,
  ],
};

const useCallback: SnippetContent = {
  key: "useCallback",
  prefix: "useCallbackSnippet",
  body: [
    "useCallback(",
    "  () => {",
    `    ${Placeholders.FirstTab}`,
    "  },",
    `  [${Placeholders.SecondTab}],`,
    ")",
    "",
  ],
};

const useMemo: SnippetContent = {
  key: "useMemo",
  prefix: "useMemoSnippet",
  body: [
    `useMemo(() => ${Placeholders.FirstTab}, [${Placeholders.SecondTab}])`,
  ],
};

const useRef: SnippetContent = {
  key: "useRef",
  prefix: "useRefSnippet",
  body: [`const ${Placeholders.FirstTab} = useRef(${Placeholders.SecondTab})`],
};

const useImperativeHandle: SnippetContent = {
  key: "useImperativeHandle",
  prefix: "useImperativeHandleSnippet",
  body: [
    "useImperativeHandle(",
    `  ${Placeholders.FirstTab},`,
    "  () => {",
    `    ${Placeholders.SecondTab}`,
    "  },",
    `  [${Placeholders.ThirdTab}],`,
    ")",
  ],
};

const useLayoutEffect: SnippetContent = {
  key: "useLayoutEffect",
  prefix: "useLayoutEffectSnippet",
  body: [
    "useLayoutEffect(() => {",
    `  ${Placeholders.FirstTab}`,
    "",
    "  return () => {",
    `    ${Placeholders.SecondTab}`,
    "  };",
    `}, [${Placeholders.ThirdTab}])`,
  ],
};

const HooksSnippets = [
  useContext,
  useMemo,
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useReducer,
];

export default HooksSnippets;
