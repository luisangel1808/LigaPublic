import React from 'react';
import BlackBishop from '../../assets/static/pieces/BlackBishop.svg'
import WhiteBishop from '../../assets/static/pieces/WhiteBishop.svg'

const Bishop = ({piece}) => {

    return (
        <>
            <img src={piece=== "B" ? WhiteBishop: BlackBishop} alt="" name="bishop"/>
        </>
    )
}

export default Bishop
