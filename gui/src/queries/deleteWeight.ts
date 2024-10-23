import { gql } from "@apollo/client";

export const DELETE_WEIGHT = gql`
  mutation DeleteWeight($id: String!) {
    deleteWeight(id: $id) {
      id
      date
      weight
    }
  }
`;
