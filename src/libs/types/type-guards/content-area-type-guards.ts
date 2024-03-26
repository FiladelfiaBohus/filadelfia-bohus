import {
  HeroFragment,
  ImageBlockFragment,
  StaffListFragment,
  TextFragment,
} from "../generated/graphql";

export function isHero(item: any): item is HeroFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "Hero";
}

export function isImageBlock(item: any): item is ImageBlockFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "Image";
}

export function isStaffList(item: any): item is StaffListFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "StaffList";
}

export function isText(item: any): item is TextFragment {
  if (!Object.prototype.hasOwnProperty.call(item, "__typename")) {
    return false;
  }
  return item.__typename === "Text";
}
