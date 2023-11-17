import React from "react";

function Navbar(props) {
	// console.log(props)
	return (
		< nav className="navbar" >
			<h1 className="title">Cat Memorization Game</h1>
			<p>Try your best to click each cat once!</p>
			<div>
				<p>Score: {props.scoreState.score}</p>
				<p>Hiscore: {props.scoreState.highScore}</p>
			</div>
		</nav >
	);
}

export default Navbar;