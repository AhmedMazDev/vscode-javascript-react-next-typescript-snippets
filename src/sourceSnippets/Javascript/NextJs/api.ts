import { SnippetContent } from "../../../types/Snippet";

const nextApi: SnippetContent = {
  key: "Nextjs Api route",
  prefix: "napi",
  body: [
    "export default (${1:req}, ${2:res}) => {",
    "",
    "\t${3:res.status(200).json({ name: 'John Doe' })}",
    "",
    "",
    "}",
  ],
  description: "Next Api Route",
};

const NextApiSnippets = [nextApi];

export default NextApiSnippets;
