import { SnippetContent } from "../../../types/Snippet";

const nextGetServerSideProps: SnippetContent = {
  key: "Nextjs Typescript getServerSideProps",
  prefix: "ntsgsspr",
  body: [
    "import {GetServerSideProps } from 'next';",
    "",
    "export const getServerSideProps : GetServerSideProps = async (${1:ctx}) => {",
    "",
    "",
    "\treturn {",
    "\t\tprops:{",
    "\t\t\t${2:data:null}",
    "\t\t}",
    "\t}",
    "}",
  ],
  description: "Next Ttpescript GetServerSideProps",
};
const nextGetStaticProps: SnippetContent = {
  key: "Nextjs TypeScript getStaticProps",
  prefix: "ntsgspr",
  body: [
    "import {GetStaticProps } from 'next';",
    "",
    "export const getStaticProps : GetStaticProps = async (${1:ctx}) => {",
    "",
    "",
    "\treturn {",
    "\t\tprops:{",
    "\t\t\t${2:data:null}",
    "\t\t}",
    "\t}",
    "}",
  ],
  description: "Next TypeScript GetStaticProps",
};
const nextGetStaticPaths: SnippetContent = {
  key: "Nextjs TypeScript getStaticPaths",
  prefix: "ntsgspa",
  body: [
    "import {GetStaticPaths } from 'next';",
    "",
    "export const getStaticPaths : GetStaticPaths = async () => {",
    "",
    "",
    "\treturn {",
    "\t\tpaths:${1:[]},",
    "\t\tfallback:${2:false}",
    "\t}",
    "}",
  ],
  description: "Next TypeScript GetStaticPaths",
};
const nextAppFunction: SnippetContent = {
  key: "Nextjs Typescript custom app (_app.js)",
  prefix: "ntscapp",
  body: [
    "import {AppProps} from 'next/app'",
    "",
    "const MyApp = ({ Component, pageProps }:AppProps) => {",
    "\treturn <Component {...pageProps} />",
    "}",
    "",
    "export default MyApp;",
  ],
  description: "Next Typescript Custom App (_app.js)",
};
const nextDocument: SnippetContent = {
  key: "Nextjs Typescript Custom Document (_document.js)",
  prefix: "ntscdocument",
  body: [
    "import Document, { Html, Head, Main, NextScript , DocumentInitialProps , DocumentContext } from 'next/document'",
    "",
    "class MyDocument extends Document {",
    "\tstatic async getInitialProps(ctx : DocumentContext ) : Promise<DocumentInitialProps> {",
    "\t\tconst initialProps = await Document.getInitialProps(ctx  )",
    "\t\treturn { ...initialProps }",
    "}",
    "",
    "\trender() {",
    "\t\treturn (",
    "\t\t\t<Html>",
    "\t\t\t\t<Head/>",
    "\t\t\t\t<body>",
    "\t\t\t\t\t<Main />",
    "\t\t\t\t\t<NextScript />",
    "\t\t\t\t</body>",
    "\t\t\t</Html>",
    "\t\t)",
    "\t}",
    "}",
    "",
    "export default MyDocument;",
  ],
  description: "Next Typescript Custom Document (_document.js)",
};

const NextTypescriptFunctionsSnippets = [
  nextGetServerSideProps,
  nextGetStaticProps,
  nextGetStaticPaths,
  nextAppFunction,
  nextDocument,
];

export default NextTypescriptFunctionsSnippets;
