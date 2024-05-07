import { useState, useEffect } from "react";

import CatCard from "../components/CatCard.js"

import initImages from "../helpers/initImages.js";
import timeoutHandler from "../helpers/timeoutHandler.js";
import { shuffleArrayState } from "../helpers/shuffleArray.js";

function SingleImagePage(props) {
	const { navbarState, setNavbarState } = props

	const [imageClickState, setImageClickState] = useState(false);

	const [imageAnimation, setImageAnimation] = useState("fade-in");

	let fadeOutTimer = 500
	let fadeInTimer = 1000
	let totalFadeTimer = fadeOutTimer + fadeInTimer

	let imageSize = 400

	useEffect(() => {
		setNavbarState(`initial2`)
	}, [setNavbarState])

	useEffect(() => {
		if (navbarState === "correct" || navbarState === "incorrect" || navbarState === "shuffle") {
			timeoutHandler(setNavbarState, "default", totalFadeTimer)
		}
	}, [navbarState, setNavbarState, totalFadeTimer])

	useEffect(() => {
		if (imageClickState === true) {
			timeoutHandler(setImageClickState, false, totalFadeTimer)
		}
	}, [imageClickState, setImageClickState, totalFadeTimer])

	useEffect(() => {
		timeoutHandler(setImageAnimation, "fade-in", fadeOutTimer)
	}, [imageAnimation, setImageAnimation, fadeOutTimer])

	const shuffleImageArray = () => {
		setImageAnimation("fade-out")

		setNavbarState("shuffle")

		setTimeout(() => {
			shuffleArrayState(props.imageState, props.setImageState)
		}, fadeOutTimer)
	}
	console.log(props)

	return (
		<>
			<section className="cat-catalogue flex-column">
				<CatCard
					{...props.imageState[0]}
					imageSize={imageSize}
					imageState={props.imageState}
					setImageState={props.setImageState}
					imageClickState={imageClickState}
					setImageClickState={setImageClickState}
					imageAnimation={imageAnimation}
					setImageAnimation={setImageAnimation}
					fadeOutTimer={fadeOutTimer}
					scoreState={props.scoreState}
					setScoreState={props.setScoreState}
					setNavbarState={props.setNavbarState}
				/>
				<button className="btn shuffle-btn" onClick={() => { shuffleImageArray() }}>Shuffle Cat</button >
			</section >

		</>
	);
}

export default SingleImagePage;