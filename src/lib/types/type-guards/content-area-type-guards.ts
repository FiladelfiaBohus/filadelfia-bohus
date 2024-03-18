import { HeroFragment } from "../generated/graphql";

export function isHero(item: any): item is HeroFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "Hero";
}
