import React from 'react';
import '../styles/components/Table.css';
const TableL = ({ players, dataTHead }) => {

  const order = ()=>{
    players.sort(function (a, b) {
      if (a.standard_elo > b.standard_elo) {
        return 1;
      }
      if (a.standard_elo < b.standard_elo) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          {dataTHead.map((title, index) => (
            <th onClick={()=>order()} key={`Fid${index}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        
        {players.map((player) => {
          if (Object.keys(player).length != 0) {
            return (
              <tr key={`Fide${player.id}`}>
                <td>{player.name}</td>
                <td>{player.sex}</td>
                <td>{player.standard_elo}</td>
                <td>{player.rapid_elo}</td>
                <td>{player.blitz_elo}</td>
                <td>{player.birth_year}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default TableL;
