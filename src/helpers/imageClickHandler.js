import { scoreResetter, scoreIncrementer } from "./scoreHandler.js"
import initImages from "./initImages.js";
import { shuffleArrayState } from "./shuffleArray.js";

export const imageClickHandler = (id, props) => {
	// console.log(props)
	if (props.clickTimeOut === false) {
		let nextImageState = []

		// do i need this
		let clickedImageIndex = props.imageState.findIndex((image) => image.id === id)

		props.setClickTimeOut(true)
		props.setImageAnimation("fade-out")

		//simplify?
		if (props.imageState[clickedImageIndex].clicked === false) {

			scoreIncrementer(props.scoreState, props.setScoreState)
			console.log(props.scoreState.maxScore, props.scoreState.currentScore)

			nextImageState = [...props.imageState];
			nextImageState[clickedImageIndex].clicked = true;

			props.setNavbarState("correct")
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
