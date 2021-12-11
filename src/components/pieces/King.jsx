import React from 'react';
import WhiteKing from '../../assets/static/pieces/WhiteKing.svg'
import BlackKing from '../../assets/static/pieces/BlackKing.svg'

const King = ({piece}) => {

    return (
        <>
            <img src={piece=== "K" ? WhiteKing: BlackKing} alt="" name="king"/>
        </>
    )
}

export default King
