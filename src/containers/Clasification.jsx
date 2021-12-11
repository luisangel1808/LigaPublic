import React from 'react';
import '../styles/components/Clasification.css';
import usePlayersAxios from '../hooks/usePlayersAxios';
import Table from '../components/TableF';
const Clasification = () => {
  const API = 'https://fide-ratings-scraper.herokuapp.com/player/';
  const part2 = '/info';
  const codes = [
    4427564,
    4495276,
    4415817,
    4413610,
    4416856,
    4412486,
    4464591,
    4457307,
    4422848,
    4450329,
    4430646,
    4472594,
    4430638,
    4415914,
    4433491,
    4412397,
    4401522,
    4457420,
    4414861,
    4402898,
    4437950,
    4402324,
    4420080,
    4421965,
    4456637,
    4464605,
    4471750,
    4421876,
    4454553,
  ];
  const players = usePlayersAxios(API, codes, part2);
  const dataTHead = ['Nombre', ' ', 'Clásico', 'Activo', 'Blitz', 'Año'];
  if(players.length>0){
    return (
      <div className="Clasification">
        <Table players={players} dataTHead={dataTHead} />
      </div>
    );
  }
  else{
    return (
      <div className="Clasification">
        <h2>Cargando datos de Ratings Fide, por favor espere</h2>
      </div>
    )
  }
};

export default Clasification;
//4443195,4457315,4479637,4457617,4437187,4456645
