import React from 'react';
import WhitePawn from '../../assets/static/pieces/WhitePawn.svg';
import BlackPawn from '../../assets/static/pieces/BlackPawn.svg';

const Pawn = ({piece}) => {

    return (
        <>
            <img src={piece=== "P" ? WhitePawn: BlackPawn} alt="" name="pawn"/>
        </>
    )
}

export default Pawn
