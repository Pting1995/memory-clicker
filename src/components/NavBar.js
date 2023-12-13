import { useState, useEffect } from "react";
import timeoutHandler from "../helpers/timeoutHandler";

function Navbar(props) {
	useEffect(() => {
		if (props.navbarState === "correct" || props.navbarState === "incorrect") {
			timeoutHandler(props.setnavbarState, "default", 1500)
		}
	}, [props.navbarState])

	// console.log(props)

	return (
		<nav className={props.navbarState}>
			{props.navbarState === "initial" && <p>Click each cat once!</p>}
			{props.navbarState === "default" && <p>Keep clicking cats you haven't clicked before!</p>}
			{props.navbarState === "correct" && <p>Correct!</p>}
			{props.navbarState === "incorrect" && <p>Incorrect, Sorry you lose!</p>}
			<div>
				<p>Hiscore: {props.scoreState.highScore}</p>
				{props.navbarState === "correct" ? <p>Current Score: {props.scoreState.currentScore - 1} + 1 = {props.scoreState.currentScore}</p> : <p>Current Score: {props.scoreState.currentScore}</p>}
			</div>
		</nav >
	);
}

export default Navbar;