import { gql } from "@apollo/client";

export const UPDATE_WEIGHT = gql`
  mutation UpdateWeight($x: String!, $y: Int!) {
    editWeight(x: $x, y: $y) {
      x
      y
    }
  }
`;
