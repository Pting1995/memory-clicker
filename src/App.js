import { useState, useEffect } from "react";
import Navbar from "./components/NavBar.js"
import Wrapper from "./components/Wrapper.js"

import imageList from "./components/images.json";

function App() {
	const [scoreState, setScoreState] = useState({
		score: 0,
		highScore: 0
	})

	const [imageState, setImageState] = useState([])

	const initImages = () => {
		var imageState = []
		imageState = [...imageList].map((image, index) => ({
			id: index,
			imageName: "The cat meows at midnight",
			...image,
			clicked: false
		}))
		setImageState(imageState)
	}

	useEffect(() => {
		initImages()
	}, [])

	// useEffect(() => {
	// 	const imageFeedback = setTimeout(() => {
	// 		const shuffledImageState = imageState
	// 		shuffle(shuffledImageState)
	// 		setImageState(shuffledImageState)
	// 	}, 3000);

	// 	return () => clearTimeout(imageFeedback);

	// }, [scoreState, imageState])

	const imageClickHandler = (id) => {
		var clickedImageIndex = imageState.findIndex((image) => image.id === id)
		if (imageState[clickedImageIndex].clicked === false) {
			scoreIncrementer()

			// update clicked to true
			const newImageState = imageState
			newImageState[clickedImageIndex].clicked = true
			setImageState(newImageState)

			var correctImage = document.getElementById(id)

			var feedbackTimer;
			const timer = () => {
				window.clearTimeout(feedbackTimer);
				feedbackTimer = window.setTimeout(() => {
					const shuffledImageState = imageState
					shuffle(shuffledImageState)
					setImageState(shuffledImageState)
				}, 3000);
			}

		}
		// u lose
		else {
			// keep highscore but reset score/game
			initImages()
			setScoreState({
				...scoreState,
				score: 0
			})
		}
	}

	const scoreIncrementer = () => {
		var newScore = scoreState.score + 1;
		if (newScore > scoreState.highScore) {
			setScoreState({
				score: newScore,
				highScore: newScore
			})
		}
		else {
			setScoreState({
				score: newScore,
				...scoreState
			})
		}
	}

	const shuffle = (array) => {
		let currentIndex = array.length
		let randomIndex;

		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
			console.log()
		}
		return array;
	}

	return (
		<div>
			<Navbar
				scoreState={scoreState}
			/>
			<Wrapper
				imageState={imageState}
				imageClickHandler={imageClickHandler}
			/>
		</div>
	);
}

export default App;