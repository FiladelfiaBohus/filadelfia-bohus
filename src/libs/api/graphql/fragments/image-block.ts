import { gql } from "@apollo/client";

export const imageBlockFragment = gql`
  fragment imageBlock on Image {
    image {
      url
      height
      width
    }
  }
`;
