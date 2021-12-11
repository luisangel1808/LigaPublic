import { useState } from 'react';

const usePlayers = (url, playersT, part2 = '') => {
  const [players, setPlayers] = useState([]);

  const arr = [];
  

    //setPlayers(arr)
    const q = async () => {
      return Promise.all(playersT.map((pl)=>{
        const urlComplete = `${url}${pl}${part2}`;
        fetch(urlComplete)
        .then((response) => response.json())
        .then((data) => (
          data
     ));
      }))
    }
    q().then(data => {
      console.log(data)
    })


  
  return [];
};

export default usePlayers;
