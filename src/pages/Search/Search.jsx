/**
 * React Dependencies
 */
import React, { useState } from "react";

/**
 * Third Party Dependencies
 */
import { useLazyQuery, gql } from "@apollo/client";

/**
 * Constants
 */
const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  const searchHandler = () => {
    console.log("**function called!");
    getLocations(name);
  };

  console.log({ error, loading, data, called });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => searchHandler()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character, index) => (
            <li key={index}>{character.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
