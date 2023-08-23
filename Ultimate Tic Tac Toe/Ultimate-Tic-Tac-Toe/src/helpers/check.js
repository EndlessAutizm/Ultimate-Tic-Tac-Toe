const check = (board) => {

	console.log('verificar...');

	// vitoria do X
	if(checkBoard(board, 'X'))
	 return 'X';

	// vitoria do O
	if(checkBoard(board, 'O'))
	 return 'O';

	// draw
	if(checkDraw(board))
		return 'D';

	return ' ';
};

const checkBoard = (board, symb) => {

	// horizontais
	if(board[0] === symb && board[0] === board[1] && board[1] === board[2])
		return true;
	if(board[3] === symb && board[3] === board[4] && board[4] === board[5])
		return true;
	if(board[6] === symb && board[6] === board[7] && board[7] === board[8])
		return true;

	// verticais
	if(board[0] === symb && board[0] === board[3] && board[3] === board[6])
		return true;
	if(board[1] === symb && board[1] === board[4] && board[4] === board[7])
		return true;
	if(board[2] === symb && board[2] === board[5] && board[5] === board[8])
		return true;

	// diagonais
	if(board[0] === symb && board[0] === board[4] && board[4] === board[8])
		return true;
	if(board[2] === symb && board[2] === board[4] && board[4] === board[6])
		return true;

	return false;

};

const checkDraw = (board) => {
	
	for(let i=0; i < 9; i++)
		if(board[i] !== 'X' && board[i] !== 'O')
			return false;
	return true;

};

export default check;
