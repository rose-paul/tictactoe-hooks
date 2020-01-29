import React, { useState } from 'react';

const Square = ({playerX}) => {

    let [display, setDisplay] = useState("")

    function selectSquare() {
        playerX ? setDisplay("X") : setDisplay("O")
    }

    return (
        <div className='square' onClick={selectSquare} >
            {display}
        </div>
    )
}

export default Square;