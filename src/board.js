import React from 'react';
import Square from './square'

const Board = ({rows, cols}) => {

    let numSquares = rows * cols;
    let squares = [];

    for (let i = 0; i < numSquares; i++) {
        squares.push(<Square key={i} />)
    }

    return (
        <div id="board">
            {
                squares
            }
        </div>
    );
}

export default Board;