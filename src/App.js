import React from 'react';
import Header from './Header.js'
import Game from './Game.js'
import Status from './Status.js'
import './static/style/main.css';

export default function App() {

  const [squares, setSquares] = React.useState({
    squareOne: "", squareTwo: "", squareThree: "",
    squareFour: "", squareFive: "", squareSix: "",
    squareSeven: "", squareEight: "", squareNine: ""
  });
  const [playerX, setPlayerX] = React.useState(true);
  const [status, setStatus] = React.useState("Next player: X");
  const [canPlay, setCanPlay] = React.useState(true);

  React.useEffect(function () {
    if (playerX === true) {
      setStatus("Next player: X")
    } else {
      setStatus("Next player: O")
    }
  }, [playerX])

  React.useEffect(function () {
    checkWinner()
  }, [playerX])

  function clickSquare(square) {
    setSquares(prevData => {
      if (playerX === true) {
        let symbol = "X";
        return {
          ...prevData,
          [square]: symbol
        }
      } else if (playerX === false) {
        let symbol = "O";
        return {
          ...prevData,
          [square]: symbol
        }
      }
    })
  }

  function changePlayer() {
    setPlayerX(function (oldValue) {
      return !oldValue;
    })
  }

  function checkWinner() {
    const { squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine } = squares;
    const lines = [
      [squareOne, squareTwo, squareThree],
      [squareFour, squareFive, squareSix],
      [squareSeven, squareEight, squareNine],
      [squareOne, squareFour, squareSeven],
      [squareTwo, squareFive, squareEight],
      [squareThree, squareSix, squareNine],
      [squareOne, squareFive, squareNine],
      [squareThree, squareFive, squareSeven],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (a === "X" && b === "X" && c === "X") {
        setStatus("Winner: X")
        setCanPlay(false);
      } else if (a === "O" && b === "O" && c === "O") {
        setStatus("Winner: O")
        setCanPlay(false);
      } else {
        if (squareOne !== "" && squareTwo !== "" && squareThree !== "" && squareFour !== "" && squareFive !== "" && squareSix !== "" && squareSeven !== "" && squareEight !== "" && squareNine !== "") {
          setStatus("Tie")
        }
      }
    }
  }

  function reset() {
    setSquares({
      squareOne: "", squareTwo: "", squareThree: "",
      squareFour: "", squareFive: "", squareSix: "",
      squareSeven: "", squareEight: "", squareNine: ""
    });
    setPlayerX(true);
    setStatus("Next player: X");
    setCanPlay(true);
  }

  function handleClick(square, state) {
    if (state === "" && canPlay === true) {
      clickSquare(square);
      changePlayer();
    }
  }

  console.log(canPlay);

  return (
    <>
      <Header
        reset={reset} />
      <Game
        squares={squares}
        playerX={playerX}
        status={status}
        handleClick={handleClick}
        checkWinner={checkWinner} />
      <Status
        status={status} />
    </>
  )
}
