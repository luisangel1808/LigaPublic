import { useState, useEffect} from 'react';
import axios from 'axios';

const usePlayersAxios = async(url, player, part2 = '') => {
  try {
    const result = await axios.get(`${url}${player}${part2}`)
    return result.data
  } catch (error) {
    return null;
  }
        
       




}
export default usePlayersAxios;