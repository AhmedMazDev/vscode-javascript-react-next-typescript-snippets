import { SnippetContent } from "../../../types/Snippet";

const nextLinkImport: SnippetContent = {
  key: "Nextjs import for Link component",
  prefix: "nil",
  body: ["import ${1:Link} from 'next/link';"],
  description: "next import Link",
};
const nextRouterImport: SnippetContent = {
  key: "Nextjs import for Router(default) component",
  prefix: "nir",
  body: ["import ${1:Router} from 'next/router';"],
  description: "next import Router(default)",
};
const nextUseRouterImport: SnippetContent = {
  key: "Nextjs import for useRouter component",
  prefix: "niur",
  body: ["import {useRouter} from 'next/router';"],
  description: "next import useRouter",
};
const nextHeadImport: SnippetContent = {
  key: "Nextjs import for Head component",
  prefix: "nih",
  body: ["import ${1:Head} from 'next/head';"],
  description: "next import Head",
};
const nextImageImport: SnippetContent = {
  key: "Nextjs import for Image component",
  prefix: "nii",
  body: ["import ${1:Image} from 'next/image';"],
  description: "next import Image",
};
const nextImportDynamic: SnippetContent = {
  key: "Nextjs import for Dynamic",
  prefix: "nid",
  body: ["import ${1:dynamic} from 'next/dynamic';"],
  description: "next import dynamic",
};

const nextLinkComponent: SnippetContent = {
  key: "Nextjs link component definition with href",
  prefix: "nulwhref",
  body: ["<Link href='${1:path}'><a>${2:value}</a></Link>"],
  description: "nextjs usage of link component with href",
};

const nextLinkWithHref: SnippetContent = {
  key: "Nextjs link component definition with href and as",
  prefix: "nulwas",
  body: [
    "<Link href='${1:routepattern}' as='${2:path}'><a>${3:value}</a></Link>",
  ],
  description: "nextjs usage of link component with href and as",
};

const nextRouterComponent: SnippetContent = {
  key: "Nextjs useRouter component definition",
  prefix: "nuur",
  body: ["const ${1:router} = useRouter();"],
  description: "nextjs usage of useRouter component",
};
const nextHeadComponent: SnippetContent = {
  key: "Nextjs Head component definition",
  prefix: "nuh",
  body: ["<Head>", "\t<title>${1:Title}</title>", "</Head>"],
  description: "nextjs usage of Head Component",
};
const nextImageComponent: SnippetContent = {
  key: "Nextjs Image component definition",
  prefix: "nui",
  body: ["<Image src='${1:path}' width='' height='' alt='' />"],
  description: "nextjs usage of Image Component",
};
const nextDynamicImport: SnippetContent = {
  key: "Nextjs Dynamic Import definition",
  prefix: "nud",
  body: ["const ${1:DynamicComponent} = dynamic(() => import('${2:./path}'))"],
  description: "nextjs usage of Dynamic Import",
};

const NextImportsSnippets = [
  nextLinkImport,
  nextRouterImport,
  nextImportDynamic,
  nextUseRouterImport,
  nextHeadImport,
  nextImageImport,
  nextLinkComponent,
  nextDynamicImport,
  nextHeadComponent,
  nextImageComponent,
  nextRouterComponent,
  nextLinkWithHref,
];

export default NextImportsSnippets;
