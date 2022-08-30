import { Placeholders } from "../../../types/Placeholders";
import { SnippetContent } from "../../../types/Snippet";

const useContext: SnippetContent = {
  key: "useContextTypescript",
  prefix: "useContextSnippetTypescript",
  body: [
    `const ${Placeholders.FirstTab} = useContext<${Placeholders.ThirdTab}>(${Placeholders.SecondTab})`,
  ],
};

const useState: SnippetContent = {
  key: "useStateTypescript",
  prefix: "useStateSnippetTypescript",
  body: [
    `const [${Placeholders.FirstTab}, set${Placeholders.Capitalize}] = useState<${Placeholders.ThirdTab}>(${Placeholders.SecondTab})`,
  ],
};

const useRef: SnippetContent = {
  key: "useRefTypescript",
  prefix: "useRefSnippetTypescript",
  body: [
    `const ${Placeholders.FirstTab} = useRef<${Placeholders.ThirdTab}>(${Placeholders.SecondTab})`,
  ],
};

const HooksTypescriptSnippets = [useContext, useState, useRef];

export default HooksTypescriptSnippets;
