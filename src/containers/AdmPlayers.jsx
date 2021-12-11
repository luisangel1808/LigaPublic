import React from 'react';
import AddPlayer from '../components/AddPlayer';
import TotalPlayers from '../components/TotalPlayers';
//import '../styles/components/AdmPlayers.css';
const AdmPlayers = () => {
  return (
    <div className="NewTournament">
      <AddPlayer />
      <TotalPlayers />
    </div>
  );
};

export default AdmPlayers;
