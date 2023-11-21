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

	const [navbarState, setnavbarState] = useState("default")

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

	useEffect(() => {
		setTimeout(() => {
			setnavbarState("default")
		}, 3000);
	}, [navbarState])

	const imageClickHandler = (id) => {
		var clickedImageIndex = imageState.findIndex((image) => image.id === id)
		if (imageState[clickedImageIndex].clicked === false) {
			scoreIncrementer()

			setnavbarState("correct")

			// update clicked to true
			const newImageState = imageState
			newImageState[clickedImageIndex].clicked = true
			setImageState(newImageState)

			const shuffledImageState = imageState
			setImageState(shuffle(shuffledImageState))
		}
		// u lose
		else {
			// keep highscore but reset score/game
			setScoreState({
				...scoreState,
				score: 0
			})

			setnavbarState("incorrect")

			initImages()
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
				navbarState={navbarState}
			/>
			<Wrapper
				imageState={imageState}
				imageClickHandler={imageClickHandler}
			/>
		</div>
	);
}

export default App;