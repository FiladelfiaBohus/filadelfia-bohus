import { gql } from "@apollo/client";

import { NAV_LINK_FRAGMENT } from "../fragments";

export const NAVIGATION_QUERY = gql`
  query NavigationQuery {
    navigation(where: { id: "cltvzxqzzjzmx07urcg4ircdf" }, stage: DRAFT) {
      id
      logo {
        url
      }
      logoText
      menuItems {
        ...navLink
      }
    }
  }
  ${NAV_LINK_FRAGMENT}
`;
