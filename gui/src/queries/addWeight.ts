import { gql } from "@apollo/client";

export const ADD_WEIGHT = gql`
  mutation AddWeight($x: String!, $y: Int!) {
    addWeight(x: $x, y: $y) {
      x
      y
    }
  }
`;
