import React from "react";
import * as functions from "../../functions/functions";

function ControlPanel(props) {

  return (
    <div id="panel" className="control-panel">
			<h1>Ultimate Tic Tac Toe</h1>
			
			<input type="text" placeholder="player 1" onChange={props.handleName1} />
			<input type="text" placeholder="player 2" onChange={props.handleName2} />

			<div>
				<p className="button" onClick={() => props.handleType(2)}>Player1 VS Player2</p>
				<p className="button" onClick={() => props.handleType(1)}>Player VS CPU</p>
				<p className="button" onClick={functions.handleSettings}>Settings</p>
				<p className="button" onClick={functions.handleCredits}>Credits</p>
			</div>
					
		</div>
  );
}

export default ControlPanel;
