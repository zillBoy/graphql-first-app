/**
 * React Dependencies
 */
import React from "react";

/**
 * Intenal Dependencies
 */
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";

/**
 * Third Party Dependencies
 */
import { useNavigate } from "react-router-dom";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  const navigate = useNavigate();

  console.log({ error, loading, data });

  if (loading) return <p>Spinner....</p>;
  if (error)
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );

  const goTocharacterHandler = (character) => {
    navigate({
      pathname: `/character/${character.id}`,
    });
  };

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <div
            key={character.id}
            onClick={() => goTocharacterHandler(character)}
          >
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
