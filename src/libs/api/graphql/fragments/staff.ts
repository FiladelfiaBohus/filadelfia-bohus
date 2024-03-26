import { gql } from "@apollo/client";

export const staffFragment = gql`
  fragment staff on Staff {
    name
    label
    image {
      url
    }
  }
`;
