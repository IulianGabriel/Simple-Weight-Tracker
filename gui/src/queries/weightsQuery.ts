import { gql } from "@apollo/client";

export const GET_WEIGHTS = gql`
  query GetWeights {
    weight {
      id
      date
      weight
    }
  }
`;
