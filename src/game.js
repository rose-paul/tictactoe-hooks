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
        if (checkCols(board)) {
            console.log('win')
        }
    }

    //WIN BY ROW
    function checkRows(board) {
        let falseCount = 0;
        board.forEach(row => {
            if (!checkStreak(row)) {
                falseCount++
            }
        })
        return falseCount < board[0].length;
    }

    //WIN BY COL
    function checkCols(board) {
        let col = board[0].length;
        let bottom = board.length;
        let falseCount = 0;
        for (let i = 0; i < col; i++) {
            let streak = [];
            for (let j = 0; j < bottom; j++) {
                streak.push(board[j][i])
            }
            if (!checkStreak(streak)) {
                falseCount++
            }
        }
        return falseCount < board.length;
    }

    //WIN BY DIAG
    function checkDiags(board) {
        topLeft = board[0][0];
        topRight = board[0][board[0].length - 1]
        height = board.length;

        
    }

    function checkStreak(streak) {
        if (streak[0] === 0) return false;
        let num = streak[0]
        return streak.every( el => el === num)
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