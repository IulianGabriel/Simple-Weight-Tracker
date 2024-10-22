import { gql } from "@apollo/client";

export const DELETE_WEIGHT = gql`
  mutation DeleteWeight($x: String!) {
    deleteWeight(x: $x) {
      x
      y
    }
  }
`;
