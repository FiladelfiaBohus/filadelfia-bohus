import { gql } from "@apollo/client";

import { HERO_FRAGMENT } from "../fragments";

const PAGE_FRAGMENT = gql`
  fragment page on Page {
    id
    content {
      ...hero
    }
    slug
  }
  ${HERO_FRAGMENT}
`;

export const PAGE_QUERY = gql`
  query Page($slug: String) {
    page(where: { slug: $slug }, stage: DRAFT) {
      ...page
    }
  }
  ${PAGE_FRAGMENT}
`;
