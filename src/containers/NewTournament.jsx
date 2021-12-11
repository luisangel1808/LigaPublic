import React from 'react';
import { Link } from 'react-router-dom';
import SelectPlayers from '../components/SelectPlayers';
import PlayersList from '../components/PlayersList';
import '../styles/components/NewTournament.css';
const NewTournament = () => {
  return (
    <div className="NewTournament">
      <SelectPlayers />
      <PlayersList />
      <Link to="/tournament">
        <button>Crear torneo</button>
      </Link>
    </div>
  );
};

export default NewTournament;
