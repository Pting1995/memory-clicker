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

	useEffect(() => {
		timeoutHandler(setImageAnimation, "fade-in", 500)
	}, [imageAnimation])

	const imageClickHandler = (id) => {
		if (imageClickState === false) {

			setImageClickState(true)
			setImageAnimation("fade-out")
			timeoutHandler(setImageClickState, false, 1500)

			var clickedImageIndex = imageState.findIndex((image) => image.id === id)

			if (imageState[clickedImageIndex].clicked === false) {
				scoreIncrementer(props.scoreState, props.setScoreState)

				props.setnavbarState("correct")

				// update clicked to true
				const newImageState = imageState
				newImageState[clickedImageIndex].clicked = true
				setImageState(newImageState)

				setTimeout(() => {
					const shuffledImageState = imageState
					setImageState(shuffleArray(shuffledImageState))
				}, 500)
			}
			// u lose
			else {
				// keep highscore, reset currentScore
				const resetScoreState = props.scoreState
				resetScoreState.currentScore = 0
				props.setScoreState(resetScoreState)

				props.setnavbarState("incorrect")

				initImages()
			}
		}
	}

	// console.log(props)
	return (
		<section className="cat-catalogue">
			{imageState.map((image, index) => {
				return (<CatCard
					key={index}
					{...image}
					imageAnimation={imageAnimation}
					imageClickHandler={imageClickHandler}
				/>)
			})}
		</section>

	)
}
export default Wrapper;
