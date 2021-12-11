import React from 'react';
import '../styles/components/Player.css';
const Player = ({ player }) => {
  return (
    <div className="container-outstanding__1">
      <img src={player.picture} alt="Deportista destacado" />
      <h2>{player.name}</h2>
      <p>{player.description}</p>
    </div>
  );
};
export default Player;
