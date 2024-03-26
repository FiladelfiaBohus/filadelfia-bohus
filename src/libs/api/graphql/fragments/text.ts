import { gql } from "@apollo/client";

export const textFragment = gql`
  fragment text on Text {
    id
    title
    body
  }
`;
