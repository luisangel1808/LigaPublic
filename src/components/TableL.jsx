import React, { useState } from 'react';
import '../styles/components/Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
const TableL = ({ players, dataTHead }) => {
  let playersSimplified = [];
  players.map((player) => {
    let pl = {};
    pl.id = player.id;
    pl.username = player.username;
    pl.name = player.profile
      ? `${player.profile.firstName || ''} ${player.profile.lastName || ''}`
      : '';
    pl.online = player.online;
    pl.puzzles = player.perfs.puzzle.games;
    pl.blitz = player.perfs.blitz.rating;
    pl.bullet = player.perfs.bullet.rating;
    pl.puzzlesR = player.perfs.puzzle.rating;
    playersSimplified.push(pl);
  });

  const [sortConfig, setSortConfig] = useState({
    key: 'blitz',
    direction: 'desc',
  });

  let sortedPlayers = [...playersSimplified];
  sortedPlayers.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          {dataTHead.map((title, index) => (
            title.name != "" ?
            <th
              key={`Lic${index}`}
              className={sortConfig.key === title.name ? 'gold' : 'black'}
              onClick={() => requestSort(title.name)}
            >
              <FontAwesomeIcon icon={faSort} />
              {` ${title.showedName} `}
            </th>
            :
            <th
            key={`Lic${index}`}
          >
          </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedPlayers.map((player) => {
          if (Object.keys(player).length != 0) {
            return (
              <tr key={player.id}>
                <td>
                  <a
                    href={`https://lichess.org/@/${player.username}`}
                    target="_blank"
                  >
                    {player.username}
                  </a>
                </td>
                <td>
                  <div className={`online-${player.online}`}></div>
                </td>
                <td>{player.name}</td>
                <td>{player.blitz}</td>
                <td>{player.bullet}</td>
                <td>{player.puzzlesR}</td>
                <td>{player.puzzles}</td>
                <td>
                  <a
                    href={`https://lichess.org/api/games/user/${player.username}`}
                  >
                    Partidas
                  </a>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default TableL;
