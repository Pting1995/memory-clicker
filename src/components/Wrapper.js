import { useState, useEffect } from "react";

import CatCard from "./CatCard.js"

import imageList from "../components/images.json"

import scoreIncrementer from "../helpers/scoreIncrementer";
import shuffleArray from "../helpers/shuffleArray";
import timeoutHandler from "../helpers/timeoutHandler.js";

function Wrapper(props) {
	const [imageState, setImageState] = useState([])

	const [imageClickState, setImageClickState] = useState(false)

	const [imageAnimation, setImageAnimation] = useState("fade-in")

	useEffect(() => {
		initImages()
	}, [])

	const initImages = () => {
		var imageState = []
		imageState = [...imageList].map((image, index) => ({
			...image,
			id: index,
			imageName: "The cat meows at midnight",
			clicked: false
		}))
		setImageState(imageState)
	}

	var fadeOutTimer = 500
	var fadeInTimer = 1000
	var totalFadeTimer = fadeOutTimer + fadeInTimer

	useEffect(() => {
		if (imageClickState === true) {
			timeoutHandler(setImageClickState, false, totalFadeTimer)
		}
	}, [imageClickState])

	useEffect(() => {
		timeoutHandler(setImageAnimation, "fade-in", fadeOutTimer)
	}, [imageAnimation])

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

				// shuffle image array
				setTimeout(() => {
					const shuffledImageState = shuffleArray(imageState)
					setImageState(shuffleArray(shuffledImageState))
				}, fadeOutTimer)
			}
			// u lose
			else {
				userChoice = "incorrect"

				// keep highscore, reset currentScore
				const resetScoreState = props.scoreState
				resetScoreState.currentScore = 0
				props.setScoreState(resetScoreState)

				initImages()
			}
			props.setnavbarState(userChoice)
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
