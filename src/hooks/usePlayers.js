import { useState, useEffect } from 'react';

const usePlayers = (url, player, part2 = '') => {
  const [players, setPlayers] = useState({});
  
useEffect(() => {
  const urlComplete = `${url}${player}${part2}`;
  fetch(urlComplete)
    .then((response) => response.json())
    .then((data) => {
      setPlayers(data);
    });
}, [])


  return players;
};

export default usePlayers;
