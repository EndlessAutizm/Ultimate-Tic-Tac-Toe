import React, { useState, useEffect } from "react";
import * as functions from "../../functions/functions.js";
import { Board } from "./game-components";
import "../../assets/css/game.css";
import * as helpers from "../../helpers";

function GamePanel(props) {

	const pltime = props.ptime;

  const [symbol, setSymbol] = useState("X");

  const [time, setTime] = useState(props.time);

  const [pl1Time, setPl1Time] = useState(pltime);
  const [pl2Time, setPl2Time] = useState(pltime);

	const [pl1Score, setPl1Score] = useState(0);
	const [pl2Score, setPl2Score] = useState(0);

  const [board, setBoard] = useState(new Array(9));


	const handleScore = (type) => {
		if(type === 'X')
			setPl1Score(pl1Score + 1);
		else
			setPl2Score(pl2Score + 1);
	}


  const handleEndGame = () => {
		props.handleGameStart();
    functions.goBack();
  };


  const addBoard = (i, symb) => {
    const updatedBoard = [...board];
    updatedBoard[i] = symb;
    setBoard(updatedBoard);
  };

  const handleSymbol = () => {
    if (symbol === "X") setSymbol("O");
    else setSymbol("X");
  };

  const getSymbol = () => {
    return symbol;
  };

  var renderBoards = () => {
    return Array.from({ length: 3 * 3 }, (_, index) => (
      <Board
        key={index + "_board"}
        index={index}
        handleSymbol={handleSymbol}
        getSymbol={getSymbol}
        addBoard={addBoard}
				handleScore={handleScore}
      />
    ));
  };


  useEffect(() => {

    const newIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);

      if (symbol === "X") {
				setPl2Time(pltime);
				setPl1Time((tempo) => (tempo > 0 ? tempo - 1 : 0));
			}
      else{
				setPl1Time(pltime);
				setPl2Time((tempo) => (tempo > 0 ? tempo - 1 : 0));
			}
    }, 1000);

    return () => {
      clearInterval(newIntervalId);
    };
  });


  useEffect(() => {
    if (getSymbol() === "X") {
			const newColor = '#f15f7f';
			props.setColor(newColor);
		}
		else{
			const newColor = '#61dafb';
			props.setColor(newColor);
		}
  });


	useEffect(() => {
    
		
		if(time === 0){

			if(pl1Score > pl2Score){
				props.setShowModal(true);
				props.setModalContent({ title: props.Pl1+' Won', message: 'Score: '+pl1Score, won: 'PX' });

			} else if(pl2Score > pl1Score){
				props.setShowModal(true);
				props.setModalContent({ title: props.Pl2+' Won', message: 'Score: '+pl2Score, won: 'PX' });

			} else {
				props.setShowModal(true);
				props.setModalContent({ title: 'It\'s a Draw', message: props.Pl1+' and '+props.Pl2+' had the same score', won: 'PD' });

			}

		} else if(pl1Time === 0){
			props.setShowModal(true);
			props.setModalContent({ title: props.Pl2+' Won', message: props.Pl1+' ran out of time', won: 'PO' });
			
		} else if(pl2Time === 0) {
			props.setShowModal(true);
			props.setModalContent({ title: props.Pl1+' Won', message: props.Pl2+' ran out of time', won: 'PX' });

		} else {

			switch (helpers.check(board)) {
				case "X":
					props.setShowModal(true);
					props.setModalContent({ title: props.Pl1+' Won', message: 'Score: '+pl1Score, won: 'PX' });
				break;
	
				case "O":
					props.setShowModal(true);
					props.setModalContent({ title: props.Pl2+' Won', message: 'Score: '+pl2Score, won: 'PO' });
				break;
	
				case "D":

					console.log(pl1Score);
					console.log(pl2Score);
					
					if(pl1Score > pl2Score){
						props.setShowModal(true);
						props.setModalContent({ title: props.Pl1+'Won', message: 'Score: '+pl1Score, won: 'PX' });
		
					} else if(pl2Score > pl1Score){
						props.setShowModal(true);
						props.setModalContent({ title: props.Pl2+'Won', message: 'Score: '+pl2Score, won: 'PX' });
					}
				break;
	
				default:
				break;
			}

		}

  });



  return (
    <div id="game" className="game" >
      {props.type === 1 ? <h1>{props.Pl1} VS CPU</h1> : <h1>{props.Pl1} VS {props.Pl2}</h1>}

      <div className="game-info">
        <p>
          Time: <span id="game-time">{time}</span>
          <br />
          <span className="name">{props.Pl1}</span> Timer: <span id="player-time">{pl1Time}</span>
          <br />
					<span className="name">{props.type === 1 ? 'CPU' : props.Pl2}</span> Timer: <span id="player-time">{pl2Time}</span>
        </p>
        <button className="button" onClick={handleEndGame}>
          End Game
        </button>
      </div>

			<h2 style={{ marginBottom: 0 }}>{getSymbol() === "X" ? props.Pl1+' turn': props.Pl2+' turn'}</h2>

      <div className="game-board">{renderBoards()}</div>
    </div>
  );
}

export default GamePanel;
