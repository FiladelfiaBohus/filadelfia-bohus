import { gql } from "@apollo/client";

import { HERO_FRAGMENT, imageBlockFragment, textFragment } from "../fragments";

const HOME_PAGE_FRAGMENT = gql`
  fragment homePage on HomePage {
    id
    pageTitle
    pageDescription
    content {
      ...hero
      ...imageBlock
      ...text
    }
  }
  ${HERO_FRAGMENT}
  ${imageBlockFragment}
  ${textFragment}
`;

export const HOME_PAGE_QUERY = gql`
  query HomePage {
    homePage(where: { id: "cltvxcrkvi8xl07ure2zpwy86" }, stage: DRAFT) {
      ...homePage
    }
  }
  ${HOME_PAGE_FRAGMENT}
`;
