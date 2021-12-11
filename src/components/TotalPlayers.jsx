import React, { useState, useEffect } from 'react';
import '../styles/components/PlayersList.css';
import {db} from '../firebase';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TotalPlayers = () => {

    const [players, setPlayers] = useState([]);
    const getPlayers = async () =>{
        db.collection('players')
           .onSnapshot((querySnapshot)=>{
               const docs = [];
               querySnapshot.forEach(doc=>{
                   docs.push({...doc.data()});
               });
               setPlayers(docs);
      })
   }
   useEffect(() => {
    getPlayers();
}, []);

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
          {players.map((player, index) => {
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
                <td><FontAwesomeIcon icon={faWindowClose}/></td>
                <td><FontAwesomeIcon icon={faEdit}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TotalPlayers;