import { gql } from "@apollo/client";

export const DELETE_WEIGHT = gql`
  mutation DeleteWeight($date: String!) {
    deleteWeight(date: $date) {
      date
      weight
    }
  }
`;
