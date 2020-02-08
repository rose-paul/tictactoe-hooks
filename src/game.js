import React, { useState, useEffect } from 'react';
import Board from './board'

const Game = () => {

    //user input gives dimensions
    let [rows, setRows] = useState(3);
    let [cols, setCols] = useState(3);

    //listen for changes in rows
    useEffect(() => {

    }, [rows]) 

    function rowDimensions(e) {
        setRows(e.target.value)
        setCols(e.target.value)
        document.getElementById('board').style.setProperty('--rows', rows)
    }

    function checkWin(board) {
        if (checkDiags(board) || checkCols(board) || checkRows(board)) {
            // fix bug that alerted before displaying final move render
            setTimeout(() => {
                alert("Game over!")
            })
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
        let height = board.length;
        let width = board[0].length;
        if (height !== width) return false;
        let [leftRow, leftCol] = [0, 0]
        let [rightRow, rightCol] = [0, width - 1]
        let diag1 = [];
        let diag2 = []
        while (leftRow < height) {
            diag1.push(board[leftRow][leftCol])
            leftRow++
            leftCol++
            diag2.push(board[rightRow][rightCol])
            rightRow++
            rightCol--
        }

        return checkStreak(diag1) || checkStreak(diag2)


    }

    //HELPER FOR CHECK METHODS
    function checkStreak(streak) {
        if (streak[0] === 0) return false;
        let num = streak[0]
        return streak.every( el => el === num)
    }

    return (
        <div>
            <h1>Tic Tac Toe - React Hooks</h1>
            {/* <label> How many rows?
                <input type='number' value={rows} onChange={(e) => rowDimensions(e)}></input>
            </label> */}
            <Board rows={rows} cols={cols} checkWin={checkWin}/>
        </div>
    )
}

export default Game;