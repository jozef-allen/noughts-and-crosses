import React from 'react';

function Game(props) {

    return (
        <div className="container">
            <div className="board">
                <div className="square" onClick={() => props.handleClick("squareOne", props.squares.squareOne)}>{props.squares.squareOne}</div>
                <div className="square" onClick={() => props.handleClick("squareTwo", props.squares.squareTwo)}>{props.squares.squareTwo}</div>
                <div className="square" onClick={() => props.handleClick("squareThree", props.squares.squareThree)}>{props.squares.squareThree}</div>
                <div className="square" onClick={() => props.handleClick("squareFour", props.squares.squareFour)}>{props.squares.squareFour}</div>
                <div className="square" onClick={() => props.handleClick("squareFive", props.squares.squareFive)}>{props.squares.squareFive}</div>
                <div className="square" onClick={() => props.handleClick("squareSix", props.squares.squareSix)}>{props.squares.squareSix}</div>
                <div className="square" onClick={() => props.handleClick("squareSeven", props.squares.squareSeven)}>{props.squares.squareSeven}</div>
                <div className="square" onClick={() => props.handleClick("squareEight", props.squares.squareEight)}>{props.squares.squareEight}</div>
                <div className="square" onClick={() => props.handleClick("squareNine", props.squares.squareNine)}>{props.squares.squareNine}</div>
            </div>
        </div>
    )
}

export default Game;