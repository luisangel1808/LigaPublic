import { useState, useEffect} from 'react';
import axios from 'axios';

const usePlayersAxios = (url, arr, part2 = '') => {
  const [dataNew, setDataNew] = useState([]);
  const arra =[];
  useEffect(async () => {
    const result = await Promise.allSettled(arr.map((n) =>
      axios.get(`${url}${n}${part2}`)
      .then((response)=>response.data)
    ))

    result.map((v)=>{
      if(v.status==="fulfilled"){
        arra.push(v.value)
      }
      
      
    })
    setDataNew(arra);

}, [arr]);
return dataNew
}
export default usePlayersAxios;
