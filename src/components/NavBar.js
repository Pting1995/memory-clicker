import React from "react";

function Navbar(props) {
	let navbarText = {
		initial: "Click each cat once!",
		initial2: "Click each cat once! If you've seen this cat, press the \"Shuffle Cat\" button",
		default: "Keep clicking cats you haven't clicked before!",
		correct: "Correct!",
		incorrect: "Incorrect, Sorry you lose! Your score was " + props.scoreState.priorScore,
		shuffle: "Every day im shufflin'",
		win: "Congratulations, you win!"
	}

	// console.log(props)
	return (
		<nav className={props.navbarState}>
			<p>{navbarText[props.navbarState]}</p>
			<div>
				<p>Winning Score: {props.scoreState.maxScore}</p>
				<p>Session Hiscore: {props.scoreState.highScore}</p>
				{props.navbarState === "correct" ? <p>Current Score: {props.scoreState.currentScore - 1} + 1 = {props.scoreState.currentScore}</p> : <p>Current Score: {props.scoreState.currentScore}</p>}
			</div>
		</nav >
	);
}

export default Navbar;