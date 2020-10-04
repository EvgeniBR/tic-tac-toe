import React from 'react';
import Box from './Box'

const Game = ({squares , onClick}) =>{
    return (
        <div className="board">
            {squares.map((square , index) => (
                <Box key={index} value={square} onClick={()=>onClick(index)} />
            ))}
        </div>
    )
}

export default Game;
