import React, { useContext, useState } from 'react';
import '../styles/components/RoundRobin.css';
import AppContext from '../context/AppContext';
const RoundRobin = () => {
  const { state, createFixture, updateClasification } = useContext(AppContext);
  const playersArray = state.playersList.map((player) => player.name);
  let rounds;

  playersArray.length % 2 != 0
    ? (rounds = playersArray.length)
    : (rounds = playersArray.length - 1);

  createFixture(playersArray);
  const games = state.games;
  const handleResult = (result, win, draw1, draw2, game) => () => {
    game.result = result;
    game.win = win;
    game.draw1 = draw1;
    game.draw2 = draw2;
    updateClasification(playersArray);
  };
  const [page, setPage] = useState(1);
  const changePage = (number) => () => {
    if (page + number === 0) {
      setPage(rounds);
    } else if (page + number > rounds) {
      setPage(1);
    } else {
      setPage(page + number);
    }
  };

  return (
    <div>
      <table className="tableTournament">
        <thead>
          <tr>
            <th>Ronda</th>
            <th>Blancas</th>
            <th>Negras</th>
            <th>Añadir resultado</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => {
            if (!game.rest && game.round == page)
              return (
                <tr key={index}>
                  <td>{game.round}</td>
                  <td>{game.white}</td>
                  <td>{game.black}</td>
                  <td>
                    <button
                      onClick={handleResult(
                        '1-0',
                        game.white,
                        null,
                        null,
                        game,
                        index
                      )}
                    >
                      1-0
                    </button>
                    <button
                      onClick={handleResult(
                        '0.5-0.5',
                        null,
                        game.white,
                        game.black,
                        game,
                        index
                      )}
                    >
                      1/2
                    </button>
                    <button
                      onClick={handleResult(
                        '0-1',
                        game.black,
                        null,
                        null,
                        game,
                        index
                      )}
                    >
                      0-1
                    </button>
                    <button
                      onClick={handleResult(
                        '0-0',
                        null,
                        null,
                        null,
                        game,
                        index
                      )}
                    >
                      0-0
                    </button>
                  </td>
                  <td>{game.result}</td>
                </tr>
              );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={changePage(-1)}>Atrás</button>
        <button onClick={changePage(1)}>Adelante</button>
      </div>
    </div>
  );
};

export default RoundRobin;
