import scoreIncrementer from "./scoreIncrementer.js";
import scoreResetter from "./scoreResetter.js"
import initImages from "./initImages.js";
import shuffleArray from "./shuffleArray.js";

export const imageClickHandler = (id, props) => {
	// console.log(props)
	if (props.imageClickState === false) {
		var nextImageState = []
		var userChoice;
		var clickedImageIndex = props.imageState.findIndex((image) => image.id === id)

		props.setImageClickState(true)
		props.setImageAnimation("fade-out")

		if (props.imageState[clickedImageIndex].clicked === false) {
			nextImageState = handleCorrectChoice(clickedImageIndex, props.imageState, props.scoreState, props.setScoreState)

			userChoice = "correct"
		}
		// lose condition
		else {
			nextImageState = handleIncorrectChoice(props.scoreState, props.setScoreState)

			userChoice = "incorrect"
		}
		props.setNavbarState(userChoice)

		// shuffle image array after fade out
		setTimeout(() => {
			nextImageState = shuffleArray(nextImageState)
			props.setImageState(nextImageState)
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