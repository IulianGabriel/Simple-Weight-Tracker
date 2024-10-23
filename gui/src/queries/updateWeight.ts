import { gql } from "@apollo/client";

export const UPDATE_WEIGHT = gql`
  mutation UpdateWeight($id: String!, $date: String!, $weight: Int!) {
    editWeight(id: $id, date: $date, weight: $weight) {
      id
      date
      weight
    }
  }
`;
