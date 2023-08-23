import React from "react";
import * as functions from "../../functions/functions";

function Settings(props) {
  return (
    <div id="settings" className="settings" style={{display : "none"}}>
			<h1>Settings</h1>

			<div className="main-set">
				<div>
					<h2>Time: </h2>
					<input type="text" placeholder={props.time} onChange={props.handleTime} />
				</div>

				<div>
					<h2>Player Time: </h2>
					<input type="text" placeholder={props.ptime} onChange={props.handlePTime} />
				</div>
			</div>

			<p className="button" onClick={functions.goBack}>Back</p>
		</div>
  );
}

export default Settings;
