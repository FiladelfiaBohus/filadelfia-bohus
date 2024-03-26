import { gql } from "@apollo/client";

export const HERO_FRAGMENT = gql`
  fragment hero on Hero {
    id
    ingress
    title
    image {
      url
    }
  }
`;
