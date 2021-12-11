import React, { useState, useEffect } from 'react';
import usePlayersAxios from '../hooks/usePlayersAxios';
import Table from '../components/TableL';
import '../styles/components/Lichess.css';
import { db } from '../firebase';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const Lichess = () => {
  const API = 'https://lichess.org/api/user/';
  const [playersLichess, setPlayersLichess] = useState([]);

  const getPlayers = async () => {
    db.collection('players').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() }.lichess);
      });
      setPlayersLichess(docs);
    });
  };
  useEffect(() => {
    getPlayers();
  }, []);

  const players = usePlayersAxios(API, playersLichess);
  console.log(players)
  const dataTHead = [
    {"showedName":"Usuario","name":"username"},
    {"showedName":"","name":""},
    {"showedName":"Nombre","name":"name"},
    {"showedName":"Blitz","name":"blitz"},
    {"showedName":"Bala","name":"bullet"},
    {"showedName":"Táctica","name":"puzzlesR"},
    {"showedName":"Total Puzzles","name":"puzzles"},
    {"showedName":"Partidas","name":""},
  ];
  if (players.length > 0) {
    return (
      <div className="Lichess">
        <Table players={players} dataTHead={dataTHead} />
      </div>
    );
  } else {
    return (
      <div className="Lichess">
        <div className="sweet-loading">
          <MoonLoader
            color={"#FFFFFF"}
            loading={true}
            css={override}
            size={150}
          />
        </div>
      </div>
    );
  }
};

export default Lichess;
