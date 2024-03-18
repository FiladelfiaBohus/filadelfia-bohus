import { gql } from "@apollo/client";

export const HERO_FRAGMENT = gql`
  fragment hero on Hero {
    id
    image {
      size
      url
    }
    title
    stage
  }
`;