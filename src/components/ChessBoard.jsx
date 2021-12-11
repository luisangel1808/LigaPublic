import React from 'react'
import Chessboard from "chessboardjsx";

const ChessBoard = (props) => {

    return (
        <>
            <Chessboard width="250" position={props.children.fen}/>
        </>
    )
}
export default ChessBoard