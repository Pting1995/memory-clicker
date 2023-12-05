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

	const [imageAnimation, setImageAnimation] = useState("fade-in")

	const [navbarState, setnavbarState] = useState("default")

	useEffect(() => {
		initImages()
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setImageAnimation("fade-in")
		}, 500)
	}, [imageAnimation])

	useEffect(() => {
		if (navbarState === "correct" || navbarState === "incorrect") {
			const timer = setTimeout(() => {
				setnavbarState("default")
			}, 2000);
			// prevent memory leaks
			return () => {
				clearTimeout(timer);
			};
		}
	}, [navbarState])

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

	const imageClickHandler = (id) => {
		var clickedImageIndex = imageState.findIndex((image) => image.id === id)
		if (imageState[clickedImageIndex].clicked === false) {
			scoreIncrementer()

			setnavbarState("correct")

			// update clicked to true
			const newImageState = imageState
			newImageState[clickedImageIndex].clicked = true
			setImageState(newImageState)

			setTimeout(() => {
				const shuffledImageState = imageState
				setImageState(shuffle(shuffledImageState))
			}, 500)
		}
		// u lose
		else {
			// keep highscore but reset score/game
			const resetScoreState = scoreState
			resetScoreState.score = 0
			setScoreState(resetScoreState)

			setnavbarState("incorrect")

			initImages()
		}
		setImageAnimation("fade-out")
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
				...scoreState,
				score: newScore
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
				imageAnimation={imageAnimation}
				imageClickHandler={imageClickHandler}
			/>
		</div>
	);
}

export default App;