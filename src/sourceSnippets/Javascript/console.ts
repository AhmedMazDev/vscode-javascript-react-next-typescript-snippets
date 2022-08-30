import { Placeholders } from "../../types/Placeholders";
import { SnippetContent } from "../../types/Snippet";

const consoleAssert: SnippetContent = {
  key: "consoleAssert",
  prefix: "cas",
  body: [`console.assert(${Placeholders.FirstTab}, ${Placeholders.SecondTab})`],
  description:
    "If the specified expression is false, the message is written to the console along with a stack trace",
};

const consoleClear: SnippetContent = {
  key: "consoleClear",
  prefix: "ccl",
  body: ["console.clear()"],
  description: "Clears the console",
};

const consoleCount: SnippetContent = {
  key: "consoleCount",
  prefix: "cco",
  body: [`console.count(${Placeholders.FirstTab})`],
  description:
    "Writes the the number of times that count() has been invoked at the same line and with the same label",
};

const consoleDir: SnippetContent = {
  key: "consoleDir",
  prefix: "cdi",
  body: [`console.dir(${Placeholders.FirstTab})`],
  description: "Prints a JavaScript representation of the specified object",
};

const consoleError: SnippetContent = {
  key: "consoleError",
  prefix: "cer",
  body: [`console.error(${Placeholders.FirstTab})`],
  description:
    "Displays a message in the console and also includes a stack trace from where the method was called",
};

const consoleGroup: SnippetContent = {
  key: "consoleGroup",
  prefix: "cgr",
  body: [`console.group('${Placeholders.FirstTab}')`],
  description:
    "Groups and indents all following output by an additional level, until console.groupEnd() is called.",
};

const consoleGroupEnd: SnippetContent = {
  key: "consoleGroupEnd",
  prefix: "cge",
  body: ["console.groupEnd()"],
  description: "Closes out the corresponding console.group().",
};

const consoleLog: SnippetContent = {
  key: "consoleLog",
  prefix: "clg",
  body: [`console.log(${Placeholders.FirstTab})`],
  description: "Displays a message in the console",
};

const consoleTrace: SnippetContent = {
  key: "consoleTrace",
  prefix: "ctr",
  body: [`console.trace(${Placeholders.FirstTab})`],
  description:
    "Prints a stack trace from the point where the method was called",
};

const consoleLogObject: SnippetContent = {
  key: "consoleLogObject",
  prefix: "clo",
  body: [`console.log('${Placeholders.FirstTab}', ${Placeholders.FirstTab})`],
  description: "Logs property with name.",
};

const consoleLogJson: SnippetContent = {
  key: "consoleLogJson",
  prefix: "clj",
  body: [
    `console.log('${Placeholders.FirstTab}', JSON.stringify(${Placeholders.FirstTab}, null, 2))`,
  ],
  description: "Logs stringified JSON property with name.",
};

const consoleTime: SnippetContent = {
  key: "consoleTime",
  prefix: "ctm",
  body: [`console.time('${Placeholders.FirstTab}')`],
  description: "Console time wrapper",
};

const consoleTimeEnd: SnippetContent = {
  key: "consoleTimeEnd",
  prefix: "cte",
  body: [`console.timeEnd('${Placeholders.FirstTab}')`],
  description: "Console time end wrapper",
};

const consoleWarn: SnippetContent = {
  key: "consoleWarn",
  prefix: "cwa",
  body: [`console.warn(${Placeholders.FirstTab})`],
  description:
    "Displays a message in the console but also displays a yellow warning icon along with the logged message",
};

const consoleInfo: SnippetContent = {
  key: "consoleInfo",
  prefix: "cin",
  body: [`console.info(${Placeholders.FirstTab})`],
  description:
    "Displays a message in the console but also displays a blue information icon along with the logged message",
};

const consoleTable: SnippetContent = {
  key: "consoleTable",
  prefix: "ctl",
  body: [`console.table([${Placeholders.FirstTab}])`],
  description: "Logs table to console",
};

const ConsoleSnippets = [
  consoleAssert,
  consoleClear,
  consoleCount,
  consoleDir,
  consoleError,
  consoleGroup,
  consoleGroupEnd,
  consoleLog,
  consoleTrace,
  consoleLogObject,
  consoleLogJson,
  consoleTime,
  consoleTimeEnd,
  consoleWarn,
  consoleInfo,
  consoleTable,
];

export default ConsoleSnippets;
