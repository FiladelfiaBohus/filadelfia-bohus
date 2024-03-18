import { gql } from "@apollo/client";

import { HERO_FRAGMENT } from "../fragments";

const HOME_PAGE_FRAGMENT = gql`
  fragment homePage on HomePage {
    id
    content {
      ...hero
    }
  }
  ${HERO_FRAGMENT}
`;

export const HOME_PAGE_QUERY = gql`
  query HomePage {
    homePage(where: { id: "cltvxcrkvi8xl07ure2zpwy86" }, stage: DRAFT) {
      ...homePage
    }
  }
  ${HOME_PAGE_FRAGMENT}
`;
