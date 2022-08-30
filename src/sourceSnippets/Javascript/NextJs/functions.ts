import { SnippetContent } from "../../../types/Snippet";

const nextGetServerSideProps: SnippetContent = {
  key: "Nextjs getServerSideProps",
  prefix: "ngsspr",
  body: [
    "export const getServerSideProps = async (${1:ctx}) => {",
    "",
    "",
    "\treturn {",
    "\t\tprops:{",
    "\t\t\t${2:data:null}",
    "\t\t}",
    "\t}",
    "}",
  ],
  description: "Next GetServerSideProps",
};
const nextGetStaticProps: SnippetContent = {
  key: "Nextjs getStaticProps",
  prefix: "ngspr",
  body: [
    "export const getStaticProps = async (${1:ctx}) => {",
    "",
    "",
    "\treturn {",
    "\t\tprops:{",
    "\t\t\t${2:data:null}",
    "\t\t}",
    "\t}",
    "}",
  ],
  description: "Next GetStaticProps",
};
const nextGetStaticPaths: SnippetContent = {
  key: "Nextjs getStaticPaths",
  prefix: "ngspa",
  body: [
    "export const getStaticPaths = async () => {",
    "",
    "",
    "\treturn {",
    "\t\tpaths:${1:[]},",
    "\t\tfallback:${2:false}",
    "\t}",
    "}",
  ],
  description: "Next GetStaticPaths",
};
const nextGetInitialProps: SnippetContent = {
  key: "Nextjs getInitialProps",
  prefix: "ngipr",
  body: [
    "${1:${TM_FILENAME_BASE}}.getInitialProps = async (${2:ctx}) => {",
    "",
    "\treturn {",
    "\t\t${3:data:null}",
    "\t}",
    "}",
  ],
  description: "Next GetInitialProps",
};
const nextAppFunction: SnippetContent = {
  key: "Nextjs custom app (_app.js)",
  prefix: "ncapp",
  body: [
    "// import App from 'next/app'",
    "",
    "const MyApp = ({ Component, pageProps }) => {",
    "\treturn <Component {...pageProps} />",
    "}",
    "",
    "//MyApp.getInitialProps = async (appContext) => {",
    "//\t// calls page's `getInitialProps` and fills `appProps.pageProps`",
    "//\tconst appProps = await App.getInitialProps(appContext);",
    "//\treturn { ...appProps }",
    "// }",
    "",
    "export default MyApp;",
  ],
  description: "Next Custom App (_app.js)",
};
const nextDocument: SnippetContent = {
  key: "Nextjs Custom Document (_document.js)",
  prefix: "ncdocument",
  body: [
    "import Document, { Html, Head, Main, NextScript } from 'next/document'",
    "",
    "class MyDocument extends Document {",
    "\tstatic async getInitialProps(ctx) {",
    "\t\tconst initialProps = await Document.getInitialProps(ctx)",
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
  description: "Next Custom Document (_document.js)",
};

const NextFunctionsSnippets = [
  nextGetServerSideProps,
  nextGetStaticProps,
  nextGetStaticPaths,
  nextGetInitialProps,
  nextAppFunction,
  nextDocument,
];

export default NextFunctionsSnippets;
