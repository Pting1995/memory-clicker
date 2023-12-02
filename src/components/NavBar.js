import React from "react";

function Navbar(props) {
	// console.log(props)
	return (
		<nav className={props.navbarState}>
			<h1 className="title">Cat Memorization Game</h1>
			{props.navbarState === "default" && <p>Try your best to click each cat once!</p>}
			{props.navbarState === "correct" && <p>Correct!</p>}
			{props.navbarState === "incorrect" && <p>Incorrect, Sorry you lose!</p>}
			<div>
				<p>Hiscore: {props.scoreState.highScore}</p>
				{props.navbarState === "correct" ? <p>Score: {props.scoreState.score - 1} + 1 = {props.scoreState.score}</p> : <p>Score: {props.scoreState.score}</p>}
			</div>
		</nav >
	);
}

export default Navbar;