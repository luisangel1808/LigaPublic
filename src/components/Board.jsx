import React, { useState, useEffect } from 'react';
import '../styles/components/Board.css';
import Bishop from './pieces/Bishop';
import Knight from './pieces/Knight';
import Rook from './pieces/Rook';
import King from './pieces/King';
import Queen from './pieces/Queen';
import Pawn from './pieces/Pawn';
import ChessMoves from '../utils/ChessMoves';

const Board = () => {
  const rows = ['0','1', '2', '3', '4', '5', '6', '7'];
  const columns = ['0','1', '2', '3', '4', '5', '6', '7'];
  const [possibles, setPossibles] = useState([]);
  const [turn, setTurn] = useState("white");
  const [selected, setSelected] = useState("");
  const [piece, setPiece] = useState("")

  //const columns= ["a","b","c","d","e","f","g","h"];
  //const fen = 'r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 n - - 0 23';
  //const fen2 = '8/2R5/5p2/3p4/3ppr2/1B2PNpb/QpP1P3/2k1K2R w K - 0 1';
  //const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  //const fen = "rnb1k2r/pp2b1pp/2p2pn1/q3P2Q/5p2/PB6/1BPP2PP/RN2K1NR w KQkq - 0 1"
  const fen2 ="r2r4/pp2p1pp/2p5/4pk2/PBPqn3/8/4PPPP/1Q2RRK1 w - - 0 1"
  const fen = "3rr2k/1R4pp/1R1p4/p2P4/2PP1P1b/4PK2/3NQ2B/3q4 b - - 0 1"
  let spacesRemaining = 0;
  let fenPosition = 0;

  const [situation, setSituation] = useState(
    [
      ["r","","b","k","","","","r"],
      ["p","","b","p","","p","N","p"],
      ["n","","","","","n","",""],
      ["Q","p","","N","P","","","P"],
      ["","","","","","","P",""],
      ["","","","P","","K","",""],
      ["P","","P","","R","","",""],
      ["","","","","q","","b",""],
  ]);

  const handleSituation = (e) => {
    e.nativeEvent.target.name
      ? setSituation([
          ...situation,
          {
            position: e.currentTarget.id,
            color: e.nativeEvent.target.id,
            piece: e.nativeEvent.target.name,
          },
        ])
      : null;
  };

  const handleMove = ( col, row) =>{
    if(selected!==""){
      if(possibles.includes(`${col}${row}`))
      {
        const newSituation = []
        newSituation.push(...JSON.parse(JSON.stringify(situation)));
        newSituation[row][col] = piece;
        newSituation[selected[0]][selected[1]] = "";
        setSituation(newSituation)
      }
      setSelected("")
      setPiece("")
      setPossibles([])
    }
    else{
      setSelected(`${row}${col}`)
      setPiece(situation[row][col])
      calculateMoves(`${col}`,`${row}`,situation);
    }

  }

  const {
    kingMoves,
    queenMoves,
    rookMoves,
    bishopMoves,
    knightMoves,
    pawnMoves,
  } = ChessMoves();

  const calculateMoves = (col, row, situation) => {
    const piece = situation[row][col]
    switch (piece) {
      case 'Q':
      case 'q':
        setPossibles(queenMoves(col, row, piece, situation));
        break;
      case 'R':
      case 'r':
        setPossibles(rookMoves(col, row, piece, situation));
        break;
      case 'B':
      case 'b':
        setPossibles(bishopMoves(col, row, piece, situation));
        break;
      case 'N':
      case 'n':
          setPossibles(knightMoves(col, row, piece, situation));
        break;
      case 'K':
      case 'k':
          setPossibles(kingMoves(col, row, piece, situation));
        break;
      case 'P':
      case 'p':
          setPossibles(pawnMoves(col, row, piece, situation));
        break;
      default:
        setPossibles([])
        break;
    }
  };

  const returnPiece = (row, col) => {

    const piece =situation[row][col]
    if(piece===""){
      return null;
    }
    else{
      if(piece.toUpperCase()==="R")
        return <Rook piece={piece} />;
      if(piece.toUpperCase()==="P")
        return <Pawn piece={piece} />;
      if(piece.toUpperCase()==="N")
        return <Knight piece={piece} />;
      if(piece.toUpperCase()==="B")
        return <Bishop piece={piece} />;
      if(piece.toUpperCase()==="Q")
        return <Queen piece={piece} />;
      if(piece.toUpperCase()==="K")
        return <King piece={piece} />;
    }
  };

  return (
    <div className="Board">
      {rows.map((row, iR) => (
        <div className="row" key={iR}>
          {columns.map((col, iC) => (
            <div
              className={
                ((iR + iC) % 2 == 1 ? 'dark' : 'white') +
                ' ' +
                (possibles.includes(`${col}${row}`) ? 'possible' : '')
              }
              id={`${col}${row}`}
              key={`${col}${row}`}
              onClick={() => handleMove(col, row)
              }
            >
              {returnPiece(row, col) || `${col}${row}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
