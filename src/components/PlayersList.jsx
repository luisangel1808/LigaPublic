import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/PlayersList.css';
const PlayersList = () => {
  const {
    state: { playersList },
  } = useContext(AppContext);

  return (
    <div className="PlayersList">
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Código</th>
            <th>Sexo</th>
            <th>Club</th>
            <th>Liga</th>
            <th>Clásico</th>
            <th>Activo</th>
            <th>Blitz</th>
            <th>Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {playersList.map((player, index) => {
            return (
              <tr key={`List-${index}`}>
                <td>{player.name}</td>
                <td>{player.codFide}</td>
                <td>{player.sex}</td>
                <td>{player.club}</td>
                <td>{player.league}</td>
                <td>{player.standard_elo}</td>
                <td>{player.rapid_elo}</td>
                <td>{player.blitz_elo}</td>
                <td>{player.birth_year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersList;
