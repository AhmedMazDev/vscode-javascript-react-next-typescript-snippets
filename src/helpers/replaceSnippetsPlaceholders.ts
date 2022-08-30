import { Mappings } from "../types/Mappings";
import { Placeholders } from "../types/Placeholders";
import getExtensionConfig from "./getExtenstionConfig";
export const replaceSnippetsPlaceholders = (snippetBody: string[]) => {
  const config = getExtensionConfig();

  const propsPlaceholders =
    config.typescriptPropsStatePrefix === "type"
      ? Mappings.TypeProps
      : Mappings.InterfaceProps;

  const statePlaceholders =
    config.typescriptPropsStatePrefix === "type"
      ? Mappings.TypeState
      : Mappings.InterfaceState;

  return snippetBody.map((body) => {
    return String(body)
      .replace(new RegExp(Placeholders.FileName, "g"), Mappings.FileName)
      .replace(new RegExp(Placeholders.FirstTab, "g"), Mappings.FirstTab)
      .replace(new RegExp(Placeholders.SecondTab, "g"), Mappings.SecondTab)
      .replace(new RegExp(Placeholders.ThirdTab, "g"), Mappings.ThirdTab)
      .replace(new RegExp(Placeholders.Capitalize, "g"), Mappings.Capitalize)
      .replace(new RegExp(Placeholders.TypeProps, "g"), propsPlaceholders)
      .replace(new RegExp(Placeholders.TypeState, "g"), statePlaceholders);
  });
};
