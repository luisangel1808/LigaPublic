import React from 'react';
import initialState from '../initialState';
import Player from '../components/Player';
import '../styles/components/Players.css';
const Players = () => {
  const players = initialState.players;

  return (
    <section className="Players">
      <h1 className="Players-title-outstanding">Algunos Jugadores</h1>
      <div className="Players-container-outstanding">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
};

export default Players;
