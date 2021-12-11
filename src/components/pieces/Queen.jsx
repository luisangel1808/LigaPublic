import React from 'react';
import WhiteQueen from '../../assets/static/pieces/WhiteQueen.svg'
import BlackQueen from '../../assets/static/pieces/BlackQueen.svg'

const Queen = ({piece}) => {

    return (
        <>
            <img src={piece=== "Q" ? WhiteQueen: BlackQueen} alt="" name="queen"/>
        </>
    )
}

export default Queen
