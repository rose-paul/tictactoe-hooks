import React, { useState, useEffect } from 'react';
import Square from './square'

const Board = ({rows, cols, checkWin}) => {

    //determine whose turn it is
    let [playerX, setPlayer] = useState(true)

    let squares = [];
    let player = playerX ? "Player X" : "Player 0"
    let currentBoard = new Array(rows).fill().map( row => new Array(cols).fill(0))

    for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
            temp.push(<Square key={i} playerX={playerX}/>)
        }
        squares.push(temp)
    }

    //whenever someone clicks, turn updates and will check if someone wins (now just console logs)
    useEffect( () => {
        //rerender squares
    }, [playerX])

    function handleClick(pos) { // mod rows?

        let [row, col] = pos;
        if (playerX) {
            currentBoard[row][col] = 1
            setPlayer(false)
        } else {
            currentBoard[row][col] = 2
            setPlayer(true)
        }

        checkWin(currentBoard)
    }


    return (
        <div id="board">
            <div>
                {
                    squares.map((subArr, rowIdx) => {
                        return (
                            subArr.map(
                                (square, colIdx) => {
                                    return (
                                        <div onClick={() => handleClick([colIdx, rowIdx])}>{square}</div>
                                    )
    
                                }
                            )
                        )
                    })
                }
            </div>
            <p>It's {player}'s turn!</p>
        </div>
    );
}

export default Board;