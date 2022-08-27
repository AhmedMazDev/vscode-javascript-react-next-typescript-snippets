import { workspace } from "vscode";
import { ExtensionConfig } from "../types/ExtensionConfig";

const getExtensionConfig = () => {
  return workspace.getConfiguration(
    "snippets.settings"
  ) as unknown as ExtensionConfig;
};

export default getExtensionConfig;
