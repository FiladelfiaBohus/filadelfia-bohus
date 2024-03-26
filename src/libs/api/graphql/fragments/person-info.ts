import { gql } from "@apollo/client";

export const PERSON_INFO_FRAGMENT = gql`
  fragment personInfo on PersonInfo {
    id
    name
    label
    image {
      url
    }
  }
`;
