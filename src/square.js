import React, { useState } from 'react';

const Square = () => {

    let [status, setStatus] = useState(0);
    let [display, setDisplay] = useState("")

    function selectSquare() {
        setDisplay("X") //later set current user and status
    }

    return (
        <div className='square' onClick={selectSquare}>
            {display}
        </div>
    )
}

export default Square;