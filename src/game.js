import React, { useState } from 'react';
import Board from './board'

const Game = () => {

    //user input gives dimensions
    let [rows, setRows] = useState(3);
    let [cols, setCols] = useState(3);

    function rowDimensions(e) {
        setRows(e.target.value)
        document.getElementById('board').style.setProperty('--rows', rows)
    }

    function checkWin(board) {
        
    }

    return (
        <div>
            <label> How many rows?
                <input type='number' value={rows} onChange={(e) => rowDimensions(e)}></input>
            </label>
            <label> How many cols?
                <input type='number' value={cols} onChange={(e) => setCols(e.target.input)}></input>
            </label>
            <Board rows={rows} cols={cols} checkWin={checkWin}/>
        </div>
    )
}

export default Game;