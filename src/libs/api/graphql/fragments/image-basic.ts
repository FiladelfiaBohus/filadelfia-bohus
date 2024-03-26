import { gql } from "@apollo/client";

export const IMAGE_BASIC_FRAGMENT = gql`
  fragment imageBasic on Asset {
    url
  }
`;
