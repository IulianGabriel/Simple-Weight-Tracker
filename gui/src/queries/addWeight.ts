import { gql } from "@apollo/client";

export const ADD_WEIGHT = gql`
  mutation AddWeight($id: String!, $date: String!, $weight: Float!) {
    addWeight(id: $id, date: $date, weight: $weight) {
      id
      date
      weight
    }
  }
`;
