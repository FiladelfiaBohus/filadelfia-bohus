import { gql } from "@apollo/client";

import {
  HERO_FRAGMENT,
  imageBlockFragment,
  staffListFragment,
  textFragment,
} from "../fragments";

const PAGE_FRAGMENT = gql`
  fragment page on Page {
    id
    pageTitle
    pageDescription
    content {
      ...hero
      ...imageBlock
      ...staffList
      ...text
    }
    slug
  }
  ${HERO_FRAGMENT}
  ${imageBlockFragment}
  ${staffListFragment}
  ${textFragment}
`;

export const PAGE_QUERY = gql`
  query Page($slug: String) {
    page(where: { slug: $slug }, stage: DRAFT) {
      ...page
    }
  }
  ${PAGE_FRAGMENT}
`;
