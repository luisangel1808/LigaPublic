import React from 'react';
import WhiteKnight from '../../assets/static/pieces/WhiteKnight.svg'
import BlackKnight from '../../assets/static/pieces/BlackKnight.svg'

const Knight = ({piece}) => {

    return (
        <>
            <img src={piece=== "N" ? WhiteKnight: BlackKnight} alt="" name="knight"/>
        </>
    )
}

export default Knight
