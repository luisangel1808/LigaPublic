import React, { useState } from 'react';
import '../styles/components/FideTable.css';
import clasification from '../../fide.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const FideTable = () => {

  const mapTitle = (title) => {
    if (title == 'Candidate Master') {
      return 'CM';
    }
    if (title == 'FIDE Master') {
      return 'FM';
    } else {
      return '';
    }
  };

  const [sortConfig, setSortConfig] = useState({
    key: 'std',
    direction: 'desc',
  });

  let sortedPlayers = [...clasification.players];
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
    <div className="FideTable">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th className={sortConfig.key==="name" ? "gold" : "black"} onClick={() => requestSort('name')}>
              <FontAwesomeIcon icon={faSort} />
              {' Nombre '}
            </th>            
            <th className={sortConfig.key==="std" ? "gold" : "black"} onClick={() => requestSort('std')}>              <FontAwesomeIcon icon={faSort} />
              {' Clásico '}
            </th>
            <th className={sortConfig.key==="rapid" ? "gold" : "black"} onClick={() => requestSort('rapid')}>
              <FontAwesomeIcon icon={faSort} />
              {' Rápido '}
            </th>
            <th className={sortConfig.key==="blitz" ? "gold" : "black"} onClick={() => requestSort('blitz')}>
              <FontAwesomeIcon icon={faSort} />
              {' Blitz '}
            </th>
            <th className={sortConfig.key==="year" ? "gold" : "black"} onClick={() => requestSort('year')}>
              <FontAwesomeIcon icon={faSort} />
              {' Año '}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => {
            return (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{mapTitle(player.title)}</td>
                <td>{player.name}</td>
                <td>{player.std}</td>
                <td>{player.rapid}</td>
                <td>{player.blitz}</td>
                <td>{player.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FideTable;
