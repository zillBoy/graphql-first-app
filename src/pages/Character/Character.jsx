/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import "./Character.css";
import { useCharacter } from "../../hooks/useCharacter";

/**
 * Third Party Dependencies
 */
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading)
    return (
      <div>
        <p>Spinner...</p>
      </div>
    );

  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="character">
      <img
        src={data.character.image}
        width={750}
        height={750}
        alt={data.character.name}
      />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
      </div>
      <div className="character-episode">
        {data.character.episode.map((episode) => (
          <div key={episode.id}>
            <p>
              {episode.name} - {episode.episode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
