import { useState, useEffect } from "react";

import CatCard from "./CatCard.js"

import initImages from "../helpers/initImages.js";
import { handleCorrectChoice, handleIncorrectChoice } from "../helpers/choiceHandler.js"
import shuffleArray from "../helpers/shuffleArray";
import timeoutHandler from "../helpers/timeoutHandler.js";

function Wrapper(props) {
	const [imageState, setImageState] = useState([])

	const [imageClickState, setImageClickState] = useState(false)

	const [imageAnimation, setImageAnimation] = useState("fade-in")

	useEffect(() => {
		setImageState(initImages())
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
			var nextImageState = []
			var userChoice;
			var clickedImageIndex = imageState.findIndex((image) => image.id === id)

			setImageClickState(true)
			setImageAnimation("fade-out")

			if (imageState[clickedImageIndex].clicked === false) {
				nextImageState = handleCorrectChoice(clickedImageIndex, imageState, props)

				userChoice = "correct"
			}
			// lose condition
			else {
				nextImageState = handleIncorrectChoice(props)

				userChoice = "incorrect"
			}
			props.setnavbarState(userChoice)

			// shuffle image array after fade out
			setTimeout(() => {
				nextImageState = shuffleArray(nextImageState)
				setImageState(nextImageState)
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
