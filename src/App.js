import { useState } from "react";
import Navbar from "./components/NavBar.js"
import Wrapper from "./components/Wrapper.js"

function App() {
	const [scoreState, setScoreState] = useState({
		score: 0,
		highscore: 0
	})

	// const clickChoice = (id, clicked) => {
	// 	if (clicked === false) {
	// 		console.log(images)

	// 		// score++
	// 		var newScore = this.state.score + 1
	// 		// console.log(newScore)
	// 		if (newScore > this.state.hiscore) {
	// 			this.state.hiscore = newScore
	// 		}

	// 		var img = this.state.images

	// 		img.forEach((image, index) => {
	// 			if (id === image.id) {
	// 				img[index].clicked = true;
	// 			}
	// 		})

	// 		return this.setState({
	// 			// randomize
	// 			images: img.sort(() => Math.random() - 0.5),
	// 			score: newScore,
	// 			clicked: true
	// 		})
	// 	}
	// 	// u lose
	// 	else {
	// 		// reset but keep hiscore
	// 		images.forEach((index) => { index.clicked = false })
	// 		return this.setState({
	// 			score: 0
	// 		})
	// 	}
	// 	// checks hiscore
	// }

	return (
		<div>
			<Navbar
				scoreState={scoreState}
			/>
			<Wrapper />
		</div>
	);
}

export default App;