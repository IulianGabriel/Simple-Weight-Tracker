import { gql } from "@apollo/client";

export const UPDATE_WEIGHT = gql`
  mutation UpdateWeight($date: String!, $weight: Int!) {
    editWeight(date: $date, weight: $weight) {
      date
      weight
    }
  }
`;
