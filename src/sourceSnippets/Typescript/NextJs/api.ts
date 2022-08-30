import { SnippetContent } from "../../../types/Snippet";

const nextApi: SnippetContent = {
  key: "Nextjs TypeScript Api route",
  prefix: "ntsapi",
  body: [
    "import { NextApiRequest, NextApiResponse } from 'next';",
    "",
    "export default (${1:req}:NextApiRequest, ${2:res}:NextApiResponse) => {",
    "",
    "\t${3:res.status(200).json({ name: 'John Doe' })}",
    "",
    "",
    "}",
  ],
  description: "Next TypeScript Api Route",
};

const NextTypescriptApiSnippets = [nextApi];

export default NextTypescriptApiSnippets;
