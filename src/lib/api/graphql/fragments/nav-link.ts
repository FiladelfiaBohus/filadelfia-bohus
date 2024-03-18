import { gql } from "@apollo/client";

export const NAV_LINK_FRAGMENT = gql`
  fragment navLink on NavLink {
    id
    page {
      slug
      title
    }
  }
`;
