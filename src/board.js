import React, { useState, useEffect } from 'react';
import Square from './square'

const Board = ({rows, cols}) => {

    //determine whose turn it is
    let [playerX, setPlayer] = useState(true)

    let numSquares = rows * cols;
    let squares = [];
    let player = playerX ? "Player X" : "Player 0"
    let currentBoard = new Array(rows).fill().map( row => new Array(cols).fill(0))

    //whenever someone clicks, turn updates and will check if someone wins (now just console logs)
    useEffect( () => {
        console.log('hi') //check wins
    }, [playerX])

    function handleClick(key) { // mod rows?
        if (playerX) {
            setPlayer(false)
        } else {
            setPlayer(true)
        }
    }


    for (let i = 0; i < numSquares; i++) {
        squares.push(<Square key={i} playerX={playerX}/>)
    }

    return (
        <div id="board">
            <div>
            {
                squares.map( square => {
                    return (
                        <div onClick={() => handleClick(square.key)}>{square}</div>
                    )
                })
            }
            </div>
            <p>It's {player}'s turn!</p>
        </div>
    );
}

export default Board;