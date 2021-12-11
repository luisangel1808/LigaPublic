import React from 'react';
import WhiteRook from '../../assets/static/pieces/WhiteRook.svg'
import BlackRook from '../../assets/static/pieces/BlackRook.svg'

const Rook = ({piece}) => {

    return (
        <>
            <img src={piece=== "R" ? WhiteRook: BlackRook} alt="" name="rook" />
        </>
    )
}

export default Rook
