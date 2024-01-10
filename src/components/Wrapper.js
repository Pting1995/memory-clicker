import { useState, useEffect } from "react";

import CatCard from "./CatCard.js"

import initImages from "../helpers/initImages.js";
import scoreIncrementer from "../helpers/scoreIncrementer";
import shuffleArray from "../helpers/shuffleArray";
import timeoutHandler from "../helpers/timeoutHandler.js";

function Wrapper(props) {
	const [imageState, setImageState] = useState([])

	const [imageClickState, setImageClickState] = useState(false)

	const [imageAnimation, setImageAnimation] = useState("fade-in")

	useEffect(() => {
		initImages(setImageState)
	}, [])

	var fadeOutTimer = 500
	var fadeInTimer = 1000
	var totalFadeTimer = fadeOutTimer + fadeInTimer

	useEffect(() => {
		if (imageClickState === true) {
			timeoutHandler(setImageClickState, false, totalFadeTimer)
		}
	}, [imageClickState, totalFadeTimer])

	useEffect(() => {
		timeoutHandler(setImageAnimation, "fade-in", fadeOutTimer)
	}, [imageAnimation, fadeOutTimer])

	const imageClickHandler = (id) => {
		if (imageClickState === false) {
			var userChoice;

			setImageClickState(true)

			setImageAnimation("fade-out")

			var clickedImageIndex = imageState.findIndex((image) => image.id === id)

			if (imageState[clickedImageIndex].clicked === false) {
				userChoice = "correct"

				scoreIncrementer(props.scoreState, props.setScoreState)

				// update clicked to true
				const newImageState = imageState
				newImageState[clickedImageIndex].clicked = true
				setImageState(newImageState)
			}
			// u lose
			else {
				userChoice = "incorrect"

				// keep highscore, reset currentScore
				const resetScoreState = props.scoreState
				resetScoreState.currentScore = 0
				props.setScoreState(resetScoreState)
			}
			props.setnavbarState(userChoice)

			// shuffle image array
			setTimeout(() => {
				const shuffledImageState = shuffleArray(imageState)
				setImageState(shuffleArray(shuffledImageState))
			}, fadeOutTimer)
		}
	}

	// console.log(props)
	return (
		<section className="cat-catalogue">
			{imageState.map((image, index) => {
				return (<CatCard
					key={index}
					{...image}
					imageClickState={imageClickState}
					imageAnimation={imageAnimation}
					imageClickHandler={imageClickHandler}
				/>)
			})}
		</section>
	)
}
export default Wrapper;
