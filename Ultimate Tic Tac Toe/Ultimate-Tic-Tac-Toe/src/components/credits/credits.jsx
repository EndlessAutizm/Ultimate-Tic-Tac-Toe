import React from "react";
import * as functions from "../../functions/functions";

function Credits() {
  return (
    <div id="credits" className="credits" style={{display : "none"}}>
			<h1>Credits</h1>
			<h2><img src="../img/duck.png"></img> Bruno Pinto - 2021129642</h2>
			<h2><img src="../img/alien.png"></img> Diogo Ferreira - 2021129669</h2>
			<h2><img src="../img/chess-horse.png"></img> Rúben Ferreira - 2021129743</h2>
			<br></br>
			<p className="button" onClick={functions.goBack}>Back</p>
		</div>
  );
}

export default Credits;
