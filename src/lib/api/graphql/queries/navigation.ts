import { gql } from "@apollo/client";

import { NAV_LINK_FRAGMENT } from "../fragments/nav-link";

export const NAVIGATION_QUERY = gql`
  query NavigationQuery {
    navigation(where: { id: "cltvzxqzzjzmx07urcg4ircdf" }, stage: DRAFT) {
      id
      menuItems {
        ...navLink
      }
    }
  }
  ${NAV_LINK_FRAGMENT}
`;
