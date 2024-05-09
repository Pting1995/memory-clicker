import scoreIncrementer from "./scoreIncrementer.js";
import scoreResetter from "./scoreResetter.js"
import initImages from "./initImages.js";
import { shuffleArrayState } from "./shuffleArray.js";

export const imageClickHandler = (id, props) => {
	// console.log(props)
	if (props.clickTimeOut === false) {
		let nextImageState = []

		let clickedImageIndex = props.imageState.findIndex((image) => image.id === id)

		props.setClickTimeOut(true)
		props.setImageAnimation("fade-out")

		if (props.imageState[clickedImageIndex].clicked === false) {

			scoreIncrementer(props.scoreState, props.setScoreState, (newScoreState) => {
				console.log(props)
				// Check win condition
				if (newScoreState.maxScore === newScoreState.currentScore) {
					nextImageState = initImages();

					scoreResetter(newScoreState, props.setScoreState);

					props.setNavbarState("win")
				}

				// continue game
				else {
					nextImageState = [...props.imageState];
					nextImageState[clickedImageIndex].clicked = true;

					props.setNavbarState("correct")
				}
			});

		}
		// lose condition
		else {
			nextImageState = initImages();

			scoreResetter(props.scoreState, props.setScoreState);

			props.setNavbarState("incorrect")
		}

		// shuffle image array after fade out
		setTimeout(() => {
			shuffleArrayState(nextImageState, props.setImageState)
		}, props.fadeOutTimer)
	}
}