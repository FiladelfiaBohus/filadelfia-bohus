import { PersonInfoFragment } from "@/lib/types/generated/graphql";
import { HeroFragment } from "../generated/graphql";

export function isHero(item: any): item is HeroFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "Hero";
}

export function isPersonInfo(item: any): item is PersonInfoFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "PersonInfo";
}
