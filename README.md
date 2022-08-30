# VS Code React/NextJs/JS/Typescript snippets

JavaScript, React and NextJs snippets with Typescript support for [VS Code](https://code.visualstudio.com/)

## Installation

### Install From Visual Studio Marketplace 👉 [HERE](https://marketplace.visualstudio.com/items?itemName=AhmedMaz.vscode-javascript-react-next-typescript-snippets)

## Options

This Extenstion provides the following options to customize the behaviour of the snippets

|                  Option | Description                                                                                                       |
| ----------------------: | ----------------------------------------------------------------------------------------------------------------- |
|          languageScopes | list of supported languages / files recognition default : `typescript,typescriptreact,javascript,javascriptreact` |
|              typescript | adds additional typescript snippets                                                                               |
| typescript props prefix | Controls which prefix for typescript snippets should use for props/state.                                         |

## Special Thanks

Special Thanks to the following Repo :

- [ES7+ React/Redux/React-Native/JS snippets](https://github.com/chillios-ts/vscode-react-javascript-snippets#visual-studio-marketplace)

## List of available Snippets

1. [Javascript](#javascript)

   1. [Console](#console)
   2. [Import and Export](#Import-Export)
   3. [Other Snippets](#other-snippets)

2. [React](#react)

   1. [Components](#components)
   2. [Hooks](#react-hooks)
   3. [Imports](#react-imports)

3. [NextJs](#next-js)
   1. [Imports](#next-imports)
   2. [Functions](#next-functions)
   3. [API](#next-api)

# Javascript

# Console

### `cas`

If the specified expression is false, the message is written to the console along with a stack trace

```js
console.assert(first, second);
```

### `ccl`

Clears the console

```js
console.clear();
```

### `cco`

Writes the the number of times that count() has been invoked at the same line and with the same label

```js
console.count(first);
```

### `cdi`

Prints a JavaScript representation of the specified object

```js
console.dir(first);
```

### `cer`

Displays a message in the console and also includes a stack trace from where the method was called

```js
console.error(first);
```

### `cgr`

Groups and indents all following output by an additional level, until console.groupEnd() is called.

```js
console.group("first");
```

### `cge`

Closes out the corresponding console.group().

```js
console.groupEnd();
```

### `clg`

Displays a message in the console

```js
console.log(first);
```

### `ctr`

Prints a stack trace from the point where the method was called

```js
console.trace(first);
```

### `clo`

Logs property with name.

```js
console.log("first", first);
```

### `clj`

Logs stringified JSON property with name.

```js
console.log("first", JSON.stringify(first, null, 2));
```

### `ctm`

Console time wrapper

```js
console.time("first");
```

### `cte`

Console time end wrapper

```js
console.timeEnd("first");
```

### `cwa`

Displays a message in the console but also displays a yellow warning icon along with the logged message

```js
console.warn(first);
```

### `cin`

Displays a message in the console but also displays a blue information icon along with the logged message

```js
console.info(first);
```

### `ctl`

Logs table to console

```js
console.table([first]);
```

# Import/Export

### `imd`

undefined

```js
import { second } from "first";
```

### `ime`

undefined

```js
import * as second from "first";
```

### `imn`

undefined

```js
import "first";
```

### `ima`

undefined

```js
import { second as third } from "first";
```

### `imp`

undefined

```js
import second from "first";
```

### `exp`

undefined

```js
export default first;
```

### `exd`

undefined

```js
export { second } from "first";
```

### `exa`

undefined

```js
export { second as third } from "first";
```

### `enf`

Export named function

```js
export const first = (second) => {
  third;
};
```

### `edf`

Export default function

```js
export default (first) => {
  second;
};
```

### `ednf`

Export default named function

```js
export default function first(second) {
  third;
}
```

# Others Snippets

### `met`

Creates a method inside a class

```js
first = (second) => {
  third;
};
```

### `pge`

Creates a getter property inside a class

```js
get first() {
return this.second
}
```

### `pse`

Creates a setter property inside a class

```js
set first(second) {third}
```

### `fre`

Creates a forEach statement

```js
first.forEach((second) => {
  third;
});
```

### `fof`

Iterating over property names of iterable objects

```js
for (let first of second) {
  third;
}
```

### `fin`

Iterating over property values of iterable objects

```js
for (let first in second) {
  third;
}
```

### `anfn`

Creates an anonymous function

```js
(first) => {
  second;
};
```

### `nfn`

Creates a named function

```js
const first = (second) => {
  third;
};
```

### `dob`

Creates and assigns a local variable using object destructing

```js
const { second } = first;
```

### `dar`

Creates and assigns a local variable using array destructing

```js
const [second] = first;
```

### `sti`

Executes the given function at specified intervals

```js
setInterval(() => {
  first;
}, second);
```

### `sto`

Executes the given function after the specified delay

```js
setTimeout(() => {
  first;
}, second);
```

### `prom`

Creates and returns a new Promise in the standard ES7 syntax

```js
return new Promise((resolve, reject) => {
  first;
});
```

### `cp`

Creates and assigns a local variable using props destructing

```js
const { first } = this.props;
```

### `cs`

Creates and assigns a local variable using state destructing

```js
const { first } = this.state;
```

### `rconst`

Adds a default constructor for it('', () => {})the class that contains props as arguments

```js
constructor(props) {
super(props)

this.state = {
   first
}
}
```

### `est`

Creates empty state object. To be used in a constructor.

```js
state = { first };
```

### `cdm`

Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.

```js
componentDidMount() { first }
```

### `scu`

Invoked before rendering when new props or state are being received.

```js
shouldComponentUpdate(nextProps, nextState) { first }
```

### `cdup`

Invoked immediately after the component's updates are flushed to the DOM.

```js
componentDidUpdate(prevProps, prevState) { first}
```

### `cwun`

Invoked immediately before a component is unmounted from the DOM.

```js
componentWillUnmount() {first }
```

### `gdsfp`

Invoked right before calling the render method, both on the initial mount and on subsequent updates.

```js
static getDerivedStateFromProps(props, state) {first}
```

### `gsbu`

Called right before mutations are made (e.g. before the DOM is updated)

```js
getSnapshotBeforeUpdate = (prevProps, prevState) => {
  first;
};
```

### `rcontext`

Create React context

```js
const first = React.createContext();
```

### `cref`

Create ref statement used inside constructor

```js
this.firstRef = React.createRef();
```

### `sst`

Performs a shallow merge of nextState into current state

```js
this.setState({ first });
```

### `ssf`

Performs a shallow merge of nextState into current state

```js
this.setState((state, props) => {
  return { first };
});
```

### `props`

Access component's props

```js
this.props.first;
```

### `state`

undefined

```js
this.state.first;
```

### `bnd`

Binds this to a method

```js
this.first = this.first.bind(this);
```

### `cmmb`

undefined

```js
/**
 * first
 */
```

### `hocredux`

undefined

```js
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const mapStateToProps = (state) => ({});

export const mapDispatchToProps = {};

export const first = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default (WrapperComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(first(WrapperComponent));
```

### `hoc`

undefined

```js
import React from "react";
import PropTypes from "prop-types";

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};
```

### `tpf`

undefined

```js
typeof first;
```

# React

# Components

### `rafc`

Creates a React Arrow Function Component with ES7 module system

```js
import React from "react";

export const file = () => {
  return <div>first</div>;
};
```

### `rafce`

Creates a React Arrow Function Component with ES7 module system

```js
import React from "react";

const file = () => {
  return <div>first</div>;
};

export default file;
```

### `rcc`

Creates a React component class with ES7 module system

```js
import React, { Component } from "react";

export default class file extends Component {
  render() {
    return <div>first</div>;
  }
}
```

### `rce`

Creates a React component class with ES7 module system

```js
import React, { Component } from "react";

export class file extends Component {
  render() {
    return <div>first</div>;
  }
}

export default file;
```

### `rpce`

Creates a React pure component class with ES7 module system export

```js
import React, { PureComponent } from "react";

export class file extends PureComponent {
  render() {
    return <div>first</div>;
  }
}

export default file;
```

### `rpc`

Creates a React pure component class with ES7 module system

```js
import React, { PureComponent } from "react";

export default class file extends PureComponent {
  render() {
    return <div>first</div>;
  }
}
```

### `rmc`

Creates a React Memo Function Component with ES7 module system

```js
import React, { memo } from "react";

const file = memo(() => {
  return <div>first</div>;
});

export default file;
```

### `rfc`

Creates a React Functional Component with ES7 module system

```js
import React from "react";

export default function file() {
  return <div>first</div>;
}
```

### `rfce`

Creates a React Functional Component with ES7 module system

```js
import React from "react";

function file() {
  return <div>first</div>;
}

export default file;
```

### `exptp`

undefined

```js
export type first = {second}
```

### `expint`

undefined

```js
export interface first {second}
```

### `tsrcc`

Creates a React component class with ES7 module system and TypeScript interfaces

```js
import React, { Component } from "react";

typeProps;

typeState;

export default class file extends Component<Props, State> {
  state = {};

  render() {
    return <div>first</div>;
  }
}
```

### `tsrce`

Creates a React component class with ES7 module system and TypeScript interfaces

```js
import React, { Component } from "react";

typeProps;

typeState;

class file extends Component<Props, State> {
  state = {};

  render() {
    return <div>first</div>;
  }
}

export default file;
```

### `tsrfce`

Creates a React Functional Component with ES7 module system and TypeScript interface

```js
import React from "react";

typeProps;

function file({}: Props) {
  return <div>first</div>;
}

export default file;
```

### `tsrfc`

Creates a React Functional Component with ES7 module system and TypeScript interface

```js
import React from "react";

typeProps;

export default function file({}: Props) {
  return <div>first</div>;
}
```

### `tsrafce`

Creates a React Arrow Function Component with ES7 module system and TypeScript interface

```js
import React from "react";

typeProps;

const file: React.FC<Props> = (props: Props) => {
  return <div>first</div>;
};

export default file;
```

### `tsrafc`

Creates a React Arrow Function Component with ES7 module system and TypeScript interface

```js
import React from "react";

typeProps;

const file: React.FC<Props> = (props) => {
  return <div>first</div>;
};
```

### `tsrpc`

Creates a React pure component class with ES7 module system and TypeScript interface

```js
import React, { PureComponent } from "react";

typeProps;

export default class file extends PureComponent<Props> {
  render() {
    return <div>first</div>;
  }
}
```

### `tsrpce`

Creates a React pure component class with ES7 module system and TypeScript interface

```js
import React, { PureComponent } from "react";

typeProps;

class file extends PureComponent<Props> {
  render() {
    return <div>first</div>;
  }
}

export default file;
```

# Hooks

### `useContextSnippet`

undefined

```js
const first = useContext(second);
```

### `useMemoSnippet`

undefined

```js
useMemo(() => first, [second]);
```

### `useLayoutEffectSnippet`

undefined

```js
useLayoutEffect(() => {
  first;

  return () => {
    second;
  };
}, [third]);
```

### `useCallbackSnippet`

undefined

```js
useCallback(() => {
  first;
}, [second]);
```

### `useEffectSnippet`

undefined

```js
useEffect(() => {
  first;

  return () => {
    second;
  };
}, [third]);
```

### `useStateSnippet`

undefined

```js
const [first, setcapitalize] = useState(second);
```

### `useRefSnippet`

undefined

```js
const first = useRef(second);
```

### `useImperativeHandleSnippet`

undefined

```js
useImperativeHandle(
  first,
  () => {
    second;
  },
  [third]
);
```

### `useLayoutEffectSnippet`

undefined

```js
useLayoutEffect(() => {
  first;

  return () => {
    second;
  };
}, [third]);
```

### `useReducerSnippet`

undefined

```js
const [state, dispatch] = useReducer(first, second, third);
```

### `useContextSnippetTypescript`

undefined

```js
const first = useContext < third > second;
```

### `useStateSnippetTypescript`

undefined

```js
const [first, setcapitalize] = useState < third > second;
```

### `useRefSnippetTypescript`

undefined

```js
const first = useRef < third > second;
```

# Imports

### `imbr`

undefined

```js
import { BrowserRouter as Router } from "react-router-dom";
```

### `imrr`

undefined

```js
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
```

### `imr`

undefined

```js
import React from "react";
```

### `imrd`

undefined

```js
import ReactDOM from "react-dom";
```

### `imrc`

undefined

```js
import React, { Component } from "react";
```

### `imrm`

undefined

```js
import React, { memo } from "react";
```

### `imrpc`

undefined

```js
import React, { PureComponent } from "react";
```

### `imbrl`

undefined

```js
import { Link } from "react-router-dom";
```

### `imbrnl`

undefined

```js
import { NavLink } from "react-router-dom";
```

### `imbrc`

undefined

```js
import { Route, Switch, NavLink, Link } from "react-router-dom";
```

### `imbrs`

undefined

```js
import { Switch } from "react-router-dom";
```

# NextJS

# Imports

### `nil`

next import Link

```js
import ${1:Link} from 'next/link';
```

### `nir`

next import Router(default)

```js
import ${1:Router} from 'next/router';
```

### `nid`

next import dynamic

```js
import ${1:dynamic} from 'next/dynamic';
```

### `niur`

next import useRouter

```js
import { useRouter } from "next/router";
```

### `nih`

next import Head

```js
import ${1:Head} from 'next/head';
```

### `nii`

next import Image

```js
import ${1:Image} from 'next/image';
```

### `nulwhref`

nextjs usage of link component with href

```js
<Link href='${1:path}'><a>${2:value}</a></Link>
```

### `nud`

nextjs usage of Dynamic Import

```js
const ${1:DynamicComponent} = dynamic(() => import('${2:./path}'))
```

### `nuh`

nextjs usage of Head Component

```js
<Head>
	<title>${1:Title}</title>
</Head>
```

### `nui`

nextjs usage of Image Component

```js
<Image src="${1:path}" width="" height="" alt="" />
```

### `nuur`

nextjs usage of useRouter component

```js
const ${1:router} = useRouter();
```

### `nulwas`

nextjs usage of link component with href and as

```js
<Link href='${1:routepattern}' as='${2:path}'><a>${3:value}</a></Link>
```

# Functions

### `ngsspr`

Next GetServerSideProps

```js
export const getServerSideProps = async (${1:ctx}) => {


	return {
		props:{
			${2:data:null}
		}
	}
}
```

### `ngspr`

Next GetStaticProps

```js
export const getStaticProps = async (${1:ctx}) => {


	return {
		props:{
			${2:data:null}
		}
	}
}
```

### `ngspa`

Next GetStaticPaths

```js
export const getStaticPaths = async () => {


	return {
		paths:${1:[]},
		fallback:${2:false}
	}
}
```

### `ngipr`

Next GetInitialProps

```js
${1:${TM_FILENAME_BASE}}.getInitialProps = async (${2:ctx}) => {

	return {
		${3:data:null}
	}
}
```

### `ncapp`

Next Custom App (\_app.js)

```js
// import App from 'next/app'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

//MyApp.getInitialProps = async (appContext) => {
//	// calls page's `getInitialProps` and fills `appProps.pageProps`
//	const appProps = await App.getInitialProps(appContext);
//	return { ...appProps }
// }

export default MyApp;
```

### `ncdocument`

Next Custom Document (\_document.js)

```js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### `ntsgsspr`

Next Ttpescript GetServerSideProps

```js
import {GetServerSideProps } from 'next';

export const getServerSideProps : GetServerSideProps = async (${1:ctx}) => {


	return {
		props:{
			${2:data:null}
		}
	}
}
```

### `ntsgspr`

Next TypeScript GetStaticProps

```js
import {GetStaticProps } from 'next';

export const getStaticProps : GetStaticProps = async (${1:ctx}) => {


	return {
		props:{
			${2:data:null}
		}
	}
}
```

### `ntsgspa`

Next TypeScript GetStaticPaths

```js
import {GetStaticPaths } from 'next';

export const getStaticPaths : GetStaticPaths = async () => {


	return {
		paths:${1:[]},
		fallback:${2:false}
	}
}
```

### `ntscapp`

Next Typescript Custom App (\_app.js)

```js
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
```

### `ntscdocument`

Next Typescript Custom Document (\_document.js)

```js
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

# API

### `napi`

Next Api Route

```js
export default (${1:req}, ${2:res}) => {

	${3:res.status(200).json({ name: 'John Doe' })}


}
```

### `ntsapi`

Next TypeScript Api Route

```js
import { NextApiRequest, NextApiResponse } from 'next';

export default (${1:req}:NextApiRequest, ${2:res}:NextApiResponse) => {

	${3:res.status(200).json({ name: 'John Doe' })}


}
```
