import { scoreResetter, scoreIncrementer } from "./scoreHandler.js"
import initImages from "./initImages.js";
import { shuffleArrayState } from "./shuffleArray.js";

export const imageClickHandler = (id, props) => {
	// console.log(props)
	if (props.clickTimeOut === false) {
		props.setClickTimeOut(true)

		let clickedImageIndex = props.imageState.findIndex((image) => image.id === id)

		visualClickHandler(clickedImageIndex, props)

		gameplayClickHandler(clickedImageIndex, props)
	}
}

const visualClickHandler = (id, props) => {
	props.setImageAnimation("fade-out")

	if (props.imageState[id].clicked === false) {
		props.setNavbarState("correct")
	}
	else {
		props.setNavbarState("incorrect")
	}
}

const gameplayClickHandler = (id, props) => {
	let nextImageState = []
	// good click condition
	if (props.imageState[id].clicked === false) {
		scoreIncrementer(props.scoreState, props.setScoreState)

		nextImageState = [...props.imageState];
		nextImageState[id].clicked = true;
	}
	// lose condition
	else {
		scoreResetter(props.scoreState, props.setScoreState);

		nextImageState = initImages();
		console.log(nextImageState)
	}

	setTimeout(() => {
		shuffleArrayState(nextImageState, props.setImageState)
	}, props.fadeOutTimer)
}
