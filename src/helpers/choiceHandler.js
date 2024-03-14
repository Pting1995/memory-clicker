import scoreIncrementer from "../helpers/scoreIncrementer";
import scoreResetter from "../helpers/scoreResetter.js"
import initImages from "../helpers/initImages.js";

const handleCorrectChoice = (clickedImageIndex, imageState, props) => {
	scoreIncrementer(props.scoreState, props.setScoreState);

	const updatedImageState = [...imageState];
	updatedImageState[clickedImageIndex].clicked = true;

	return updatedImageState;
};

const handleIncorrectChoice = (props) => {
	scoreResetter(props.scoreState, props.setScoreState);

	return initImages();
};

export { handleCorrectChoice, handleIncorrectChoice };