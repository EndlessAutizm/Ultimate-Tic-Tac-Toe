import React, { useState, useEffect } from 'react';
import * as functions from './functions/functions.js';

import {
  ControlPanel,
  GamePanel,
	Credits,
	Modal,
	Settings
} from "./components";

function App() {

	const [bodyColor, setBodyColor] = useState('#16191f');

	const [time, setTime] = useState(120);
	const [ptime, setPTime] = useState(30);

  const handleColorChange = () => {
    const newColor = '#ff0000'; // Replace with the desired color
    setBodyColor(newColor);
  }

	const handleTime = (i) => {
		setTime(i.target.value);
	}

	const handlePTime = (i) => {
		setPTime(i.target.value);
	}

	const [name1, setName1] = useState('Player1');
	const [name2, setName2] = useState('Player2');

	const [selectedType, setSelectedType] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({ title: '', message: '' , won: ''});

	const handleName1 = (e) => {
    setName1(e.target.value);
		console.log(name1);
  }

	const handleName2 = (e) => {
    setName2(e.target.value);
		console.log(name2);
  }

	const handleType = (event) => {
    setSelectedType(event);

		console.log(event);
		if(event === 1)
			setName2('CPU');

		document.getElementById('panel').style.display = "none";

		handleGameStart();
		
	}

	const handleGameStart = () => {
		const newColor = '#16191f'; // Replace with the desired color
    setBodyColor(newColor);
		setGameStarted(!gameStarted);
		console.log(gameStarted);
	}

  return (
    <div className="container">

		<style>{`body { background-color: ${bodyColor}; }`}</style>

			<div className="main">

				<ControlPanel
					handleType={handleType}
					handleName1={handleName1}
					handleName2={handleName2}
				/>

				{gameStarted && (
					<GamePanel
						type={selectedType}
						handleGameStart={handleGameStart}
						setShowModal={setShowModal}
						setModalContent={setModalContent}
						Pl1={name1}
						Pl2={name2}
						setColor={setBodyColor}
						time={time}
						ptime={ptime}
						gameStarted={gameStarted}
					/>
				)}

				<Settings 
					time={time}
					ptime={ptime}
					handleTime={handleTime}
					handlePTime={handlePTime}
				/>

				<Credits />

			</div>

			{showModal && (
				<Modal
					title={modalContent.title}
					message={modalContent.message}
					won={modalContent.won}
					onClose={() => setShowModal(false)}
					handleGameStart={handleGameStart}
				/>
			)}

    </div>
  );
}

export default App;
