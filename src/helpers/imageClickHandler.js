import scoreIncrementer from "./scoreIncrementer.js";
import scoreResetter from "./scoreResetter.js"
import initImages from "./initImages.js";
import { shuffleArrayState } from "./shuffleArray.js";

export const imageClickHandler = (id, props) => {
	// console.log(props)
	if (props.imageClickState === false) {
		let nextImageState = []
		let clickedImageIndex = props.imageState.findIndex((image) => image.id === id)

		props.setImageClickState(true)
		props.setImageAnimation("fade-out")

		if (props.imageState[clickedImageIndex].clicked === false) {
			nextImageState = handleCorrectChoice(clickedImageIndex, props.imageState, props.scoreState, props.setScoreState)

			props.setNavbarState("correct")
		}
		// lose condition
		else {
			nextImageState = handleIncorrectChoice(props.scoreState, props.setScoreState)

			props.setNavbarState("incorrect")
		}

		// shuffle image array after fade out
		setTimeout(() => {
			shuffleArrayState(nextImageState, props.setImageState)
		}, props.fadeOutTimer)
	}
}

const handleCorrectChoice = (clickedImageIndex, imageState, scoreState, setScoreState) => {
	scoreIncrementer(scoreState, setScoreState);

	const updatedImageState = [...imageState];
	updatedImageState[clickedImageIndex].clicked = true;

	return updatedImageState;
};

const handleIncorrectChoice = (scoreState, setScoreState) => {
	scoreResetter(scoreState, setScoreState);

	return initImages();
};