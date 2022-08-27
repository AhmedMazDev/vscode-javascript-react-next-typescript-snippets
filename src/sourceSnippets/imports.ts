import { Snippet } from "../types/Snippet";

const importReact: Snippet = {
  key: "importReact",
  prefix: "imr",
  body: ["import React from 'react'"],
};

const importReactDom: Snippet = {
  key: "importReactDom",
  prefix: "imrd",
  body: ["import ReactDOM from 'react-dom'"],
};

const importReactWithComponent: Snippet = {
  key: "importReactWithComponent",
  prefix: "imrc",
  body: ["import React, { Component } from 'react'"],
};

export default [importReact, importReactDom, importReactWithComponent];
