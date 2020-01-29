import React, { useState, useEffect } from 'react';
import Square from './square'

const Board = ({rows, cols}) => {

    //determine whose turn it is
    let [playerX, setPlayer] = useState(true)

    let numSquares = rows * cols;
    let squares = [];
    let player = playerX ? "Player X" : "Player 0"

    function changePlayer() {
        playerX ? setPlayer(false) : setPlayer(true)
    }

    //whenever someone clicks, turn updates and checks if someone wins
    useEffect( () => {
        console.log('hi') //check wins
    }, [playerX])

    for (let i = 0; i < numSquares; i++) {
        squares.push(<Square key={i} playerX={playerX}/>)
    }

    return (
        <div id="board">
            {
                squares.map( square => {
                    return (
                        <div onClick={changePlayer}>{square}</div>
                    )
                })
            }
            <p>It's {player}'s turn!</p>
        </div>
    );
}

export default Board;