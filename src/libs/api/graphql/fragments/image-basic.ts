import { gql } from "@apollo/client";

export const imageBasicFragment = gql`
  fragment imageBasic on Asset {
    url
  }
`;
