import { useState, useEffect } from "react";

import CatCard from "../components/CatCard.js"

import timeoutHandler from "../helpers/timeoutHandler.js";

function OverviewImagePage(props) {
	console.log(props.imageState)
	const { navbarState, setNavbarState } = props

	const [imageClickState, setImageClickState] = useState(false);

	const [imageAnimation, setImageAnimation] = useState("fade-in");

	let fadeOutTimer = 500
	let fadeInTimer = 1000
	let totalFadeTimer = fadeOutTimer + fadeInTimer

	let imageSize = 250

	useEffect(() => {
		if (navbarState === "correct" || navbarState === "incorrect") {
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
	// console.log(props)
	return (
		<>
			<section className="cat-catalogue">
				{props.imageState.map((image, index) => {
					return (<CatCard
						key={index}
						{...image}
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
					/>)
				})}
			</section>
		</>
	);
}

export default OverviewImagePage;