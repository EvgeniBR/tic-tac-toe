import React, { useState } from "react";
import Game from "./Game";
import { DoIHaveAWinner } from "../DoIHaveAWinner";

const App = () => {
  const [prevMove, setPrevMove] = useState([Array(9).fill(null)]);
  const [position, setPosition] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = DoIHaveAWinner(prevMove[position]);
  const xo = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const whatPrevMove = prevMove.slice(0, position + 1);
    const current = whatPrevMove[position];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xo;
    setPrevMove([...whatPrevMove, squares]);
    setPosition(whatPrevMove.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) =>{
    setPosition(step);
    setXisNext(step % 2 === 0 )
  }

  const renderMoves = () =>
  prevMove.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      
      <div className="info-wrapper">
          <div>
          <h3>Previous Moves:</h3>
          {renderMoves()}
          </div>
          <div><Game squares={prevMove[position]} onClick={handleClick}  /></div>
  <h3>{winner ? "winner : " + winner : "Next Player : " + xo}</h3>
      </div>
    </div>
  );
};

export default App
