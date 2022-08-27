import { SnippetContent } from "../types/Snippet";

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

export default [importReact, importReactDom, importReactWithComponent];
