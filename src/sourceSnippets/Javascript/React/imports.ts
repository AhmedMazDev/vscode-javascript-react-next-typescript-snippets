import { Placeholders } from "../../../types/Placeholders";
import { SnippetContent } from "../../../types/Snippet";
import { reactWithMemo } from "../../sharedSnippets";

/**
 * react, react-dom & prop-types
 */
const importReact: SnippetContent = {
  key: "importReact",
  prefix: "imr",
  body: ["import React from 'react'"],
};

const importReactDom: SnippetContent = {
  key: "importReactDom",
  prefix: "imrd",
  body: ["import ReactDOM from 'react-dom'"],
};

const importReactWithComponent: SnippetContent = {
  key: "importReactWithComponent",
  prefix: "imrc",
  body: ["import React, { Component } from 'react'"],
};

const importReactWithPureComponent: SnippetContent = {
  key: "importReactWithPureComponent",
  prefix: "imrpc",
  body: ["import React, { PureComponent } from 'react'"],
};

const importReactWithMemo: SnippetContent = {
  key: "importReactWithMemo",
  prefix: "imrm",
  body: reactWithMemo,
};

/**
 * react-router
 */

const importBrowserRouter: SnippetContent = {
  key: "importBrowserRouter",
  prefix: "imbr",
  body: ["import { BrowserRouter as Router } from 'react-router-dom'"],
};

const importBrowserRouterWithRouteAndNavLink: SnippetContent = {
  key: "importBrowserRouterWithRouteAndNavLink",
  prefix: "imrr",
  body: [
    "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
    "",
  ],
};

const importRouterSetup: SnippetContent = {
  key: "importRouterSetup",
  prefix: "imbrc",
  body: ["import { Route, Switch, NavLink, Link } from 'react-router-dom'"],
};

const importRouterSwitch: SnippetContent = {
  key: "importRouterSwitch",
  prefix: "imbrs",
  body: ["import { Switch } from 'react-router-dom'"],
};

const importRouterLink: SnippetContent = {
  key: "importRouterLink",
  prefix: "imbrl",
  body: ["import { Link } from 'react-router-dom'"],
};

const importRouterNavLink: SnippetContent = {
  key: "importRouterNavLink",
  prefix: "imbrnl",
  body: ["import { NavLink } from 'react-router-dom'"],
};

/**
 * Others
 */

const ImportsReactSnippets = [
  importBrowserRouter,
  importBrowserRouterWithRouteAndNavLink,

  importReact,
  importReactDom,
  importReactWithComponent,
  importReactWithMemo,
  importReactWithPureComponent,
  importRouterLink,
  importRouterNavLink,
  importRouterSetup,
  importRouterSwitch,
];

export default ImportsReactSnippets;
