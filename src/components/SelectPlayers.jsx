import React, { useState, useContext, useEffect } from 'react';
import {db} from '../firebase';
import AppContext from '../context/AppContext';

const SelectPlayers = () => {
    const { addToPlayersListT } = useContext(AppContext);
    const [selected, setSelected] = useState([]);
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
   const handleSubmit = ()=> {
    addToPlayersListT(selected);
  };
  useEffect(() => {
    getPlayers();
  }, []);   
  useEffect(() => {
    setSelected(players[0])
  }, [players]);
    return (
        <div>
                <h3>Añade jugador</h3>
                <select onChange={(e) => setSelected(players[e.target.selectedIndex])} >{players.map((player,index) =>{
                    return(
                        <option key={index}>{player.name}</option>
                    )
                } )}</select>
                <button type="button" onClick={()=>handleSubmit()}>Añadir jugador</button>
        </div>
    )
}

export default SelectPlayers
