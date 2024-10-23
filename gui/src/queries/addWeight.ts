import { gql } from "@apollo/client";

export const ADD_WEIGHT = gql`
  mutation AddWeight($date: String!, $weight: Int!) {
    addWeight(date: $date, weight: $weight) {
      date
      weight
    }
  }
`;
