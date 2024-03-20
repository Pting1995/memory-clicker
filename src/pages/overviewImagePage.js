import { useState, useEffect } from "react";

import CatCard from "../components/CatCard.js"

import initImages from "../helpers/initImages.js";
import timeoutHandler from "../helpers/timeoutHandler.js";

function OverviewImagePage(props) {
	const { navbarState, setNavbarState } = props

	const [imageState, setImageState] = useState([]);

	const [imageClickState, setImageClickState] = useState(false);

	const [imageAnimation, setImageAnimation] = useState("fade-in");

	let fadeOutTimer = 500
	let fadeInTimer = 1000
	let totalFadeTimer = fadeOutTimer + fadeInTimer

	let imageSize = 250

	useEffect(() => {
		setImageState(initImages())
	}, [setImageState])

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
				{imageState.map((image, index) => {
					return (<CatCard
						key={index}
						{...image}
						imageState={imageState}
						imageSize={imageSize}
						setImageState={setImageState}
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