import React from "react";

import "./styles.css";

export const CharacterCard = ({ character }) => {
  const { name, status, gender, species, image, location, origin } = character;

  return (
    <div className="character-profile">
      <img src={image} alt="name" />

      <div className="character-general-info">
        <div className="character-profile__title">
          <h2>{name}</h2>
        </div>

        <span className="character-status">
          <span className="status__icon"></span>
          {status}
        </span>

        <div className="character-profile__personal-info">
          <p>
            Gender: {gender}, {species}
          </p>
        </div>

        <div className="character-profile__origin">
          <p>Origin: {origin.name}</p>
        </div>

        <div className="character-profile__location">
          <p>Location: {location.name}</p>
        </div>
      </div>
    </div>
  );
};
