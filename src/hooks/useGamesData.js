import { useState, useEffect } from 'react';
import useOnePlayer from '../hooks/useOnePlayer';
import {db} from '../firebase';
import { watchUserChanges } from '../firebase/index';
const useGamesData = () => {
  const [state, setState] = useState({
    games: [],
    players: [],
    playersList: [],
    authReady: false,
    isLoggedIn: false,
    user: null,
  });

  const createFixture = (players) => {
    useEffect(() => {
      const data = generateFixture(players);
      setState({
        ...state,
        games: data,
      });
    }, []);
  };

  const updateClasification = (players) => {
    const playersCla = pointsCounter(players);
    setState({
      ...state,
      players: playersCla,
    });
  };

  const addToPlayersList = async(payload) => {
    await db.collection('players').doc().set(payload);
  };

  const validateCode = async(codFide)=>{
    const API = 'https://fide-ratings-scraper.herokuapp.com/player/';
    const part2 = '/info';
    const data = await useOnePlayer(API,codFide,part2);
    let player = {}
    if (data) {
      player.standard_elo = data.standard_elo;
      player.rapid_elo = data.rapid_elo;
      player.blitz_elo = data.blitz_elo;
      player.name = data.name;
      player.sex = data.sex;
      player.birth_year = data.birth_year
    }
    return player;
  }

  const addToPlayersListT = async(payload) => {
    if(!state.playersList.includes(payload)){
      setState({
        ...state,
        playersList: [...state.playersList, payload],
      });
    }
  };

  const generateFixture = (players) => {
    let games = [];
    if (players.length % 2 !== 0) players.push('Descanso');
    let rounds = players.length - 1;
    let roundGames = players.length / 2;
    let home = [];
    let away = [];

    for (let i = 0; i < roundGames; i++) {
      for (let j = 1; j < players.length; j++) {
        home.push(j);
      }
    }
    for (let k = 0; k < home.length; k++) {
      if (k % roundGames === 0) {
        away[k] = players.length;
      } else {
        away[k] = rounds--;
        if (rounds === 0) rounds = players.length - 1;
      }
    }
    let rnd = 1;
    let aux = 0;
    for (let i = 0; i < home.length; i++) {
      if (aux === roundGames) {
        rnd++;
        aux = 0;
      }
      aux++;
      let game = {
        white: null,
        black: null,
        result: null,
        round: rnd,
        win: null,
        draw1: null,
        draw2: null,
        rest: false,
      };
      if ((i + roundGames) % players.length === 0) {
        game.white = players[away[i] - 1];
        game.black = players[home[i] - 1];
      } else {
        game.white = players[home[i] - 1];
        game.black = players[away[i] - 1];
      }
      if (game.white === 'Descanso' || game.black === 'Descanso') {
        game.rest = true;
      }
      games.push(game);
    }
    return games;
  };

  const pointsCounter = (players) => {
    const playersObject = players.map((player) => {
      return {
        player: player,
        points: 0,
      };
    });
    const counter = (number, name) => {
      playersObject.filter((obj) => {
        if (obj['player'] === name) {
          obj['points'] += number;
        }
      });
    };

    state.games.map((game) => {
      if (game.win) {
        counter(1, game.win);
      } else if (game.draw1) {
        counter(0.5, game.draw1);
        counter(0.5, game.draw2);
      }
    });

    playersObject.sort(function (a, b) {
      if (a.points < b.points) {
        return 1;
      }
      if (a.points > b.points) {
        return -1;
      }
      return 0;
    });

    return playersObject;
  };

  useEffect(() => {
    watchUserChanges((user)=>{
        if(user){
            setState({
                ...state,
                authReady:true,
                isLoggedIn:true,
                user,
            });
        }
        else{
            setState({
                ...state,
                authReady:true,
                isLoggedIn:true,
                user:null
            });
        }
    })
  }, [])

  return {
    state,
    createFixture,
    updateClasification,
    addToPlayersList,
    addToPlayersListT,
    validateCode
  };
};

export default useGamesData;
