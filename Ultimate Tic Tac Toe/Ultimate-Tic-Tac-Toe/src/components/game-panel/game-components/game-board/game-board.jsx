import React, { useState, useEffect } from 'react';
import Cell from "../game-cell/game-cell.jsx"
import * as helpers from "../../../../helpers"

function Board(props) {

	const [board, setBoard] = useState(new Array(9));
  const [winner, setWinner] = useState('');
	const [won, setWon] = useState(false);

  const handlePlay = (index, symb) => {
    const updatedBoard = [...board];
    updatedBoard[index] = symb;
    setBoard(updatedBoard);
		
		switch(helpers.check(updatedBoard)){
			case 'X':
				setWinner('X');
				setWon(true);
				props.addBoard(props.index, 'X');
				props.handleScore('X');
			break;

			case 'O':
				setWinner('O');
				setWon(true);
				props.addBoard(props.index, 'O');
				props.handleScore('O');
			break;

			case 'D':
				setWinner('D');
				setWon(true);
				props.addBoard(props.index, 'D');
			break;

			default:
				break;
		}

	}


	const renderCells = () => {
    return Array.from({ length: 3*3 }, (_, index) => (
			<Cell
				key={index+'_cell'}
				index={index}
				handleSymbol={props.handleSymbol}
				getSymbol={props.getSymbol}
				handlePlay={handlePlay}
				isWon={won}
			/>
    ));
  };

  return (
    //jogo do galo
		<div className={`board ${winner}`} id={props.index}>
			{renderCells()}
		</div>
  );
}

export default Board;
