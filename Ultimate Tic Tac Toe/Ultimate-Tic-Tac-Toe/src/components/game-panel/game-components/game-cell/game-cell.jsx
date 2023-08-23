import React, { useState, useEffect } from 'react';

function Cell(props) {

	const [text, setText] = useState('');
	const [isClicked, setIsClicked] = useState(false);

	//funcao de eventListener para por um X ou um O
	const click = () => {

		if(!isClicked && !props.isWon){
			setText(props.getSymbol());
			props.handlePlay(props.index, props.getSymbol());
			props.handleSymbol();
			setIsClicked(true);
		}
		
	}

  return (
    //célula do jogo do galo
		<div id={props.index} onClick={click} className='cell'>
			{text}
		</div>
  );
}

export default Cell;
