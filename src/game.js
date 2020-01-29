import React, { useState } from 'react';
import Board from './board'

const Game = () => {

    let [rows, setRows] = useState(3);
    let [cols, setCols] = useState(3);

    function rowDimensions(e) {
        setRows(e.target.value)
        document.getElementById('board').style.setProperty('--rows', rows)
    }


    return (
        <div>
            <label> How many rows?
                <input type='number' placeholder={rows} onChange={(e) => rowDimensions(e)}></input>
            </label>
            <label> How many cols?
                <input type='number' placeholder={cols} onChange={(e) => setCols(e.target.input)}></input>
            </label>
            <Board rows={rows} cols={cols}/>
        </div>
    )
}

export default Game;