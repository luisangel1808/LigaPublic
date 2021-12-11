import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/RoundRobin.css';
const TournamentClasification = () => {
  const { state } = useContext(AppContext);
  const players = state.players;
  return (
    <div>
      <table className="tableTournament">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Jugador</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            if (Object.keys(players).length != 0) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{player.player}</td>
                  <td>{player.points}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TournamentClasification;
