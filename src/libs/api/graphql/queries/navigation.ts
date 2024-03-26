import { gql } from "@apollo/client";

import { imageBasicFragment, NAV_LINK_FRAGMENT } from "../fragments";

export const NAVIGATION_QUERY = gql`
  query NavigationQuery {
    navigation(where: { id: "cltvzxqzzjzmx07urcg4ircdf" }, stage: DRAFT) {
      id
      logo {
        ...imageBasic
      }
      logoText
      menuItems {
        ...navLink
      }
    }
  }
  ${imageBasicFragment}
  ${NAV_LINK_FRAGMENT}
`;
