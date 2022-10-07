/**
 * Third Party Dependencies
 */
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        id
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  let { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return {
    error,
    loading,
    data,
  };
};
