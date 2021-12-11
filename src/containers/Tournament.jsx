import React from 'react';
import RoundRobin from '../components/RoundRobin';
import TournamentClasification from '../components/TournamentClasification';
import '../styles/components/Tournament.css';

const Tournament = () => (
  <div className="Tournament">
    <RoundRobin />
    <TournamentClasification />
  </div>
);

export default Tournament;
