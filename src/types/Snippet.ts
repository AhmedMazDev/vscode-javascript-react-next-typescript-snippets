export type Snippets = {
  [key in string]: SnippetContent;
};

export interface SnippetContent {
  key: string;
  prefix: string;
  body: string[];
  description?: string;
}
