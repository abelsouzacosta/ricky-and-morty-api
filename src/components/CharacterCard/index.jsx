import React from "react";

import "./styles.css";

export const CharacterCard = ({ character }) => {
  const { name, status, gender, species, image } = character;

  return (
    <div className="character-profile">
      <img src={image} alt="name" />
    </div>
  );
};
