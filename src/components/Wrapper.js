import { useState, useEffect } from "react";

import CatCard from "./CatCard.js"

function Wrapper(props) {
	const [imageState, setImageState] = useState([]);

	const [imageClickState, setImageClickState] = useState(false);

	const [imageAnimation, setImageAnimation] = useState("fade-in");

	useEffect(() => {
		setImageState(initImages())
	}, [setImageState])

	var fadeOutTimer = 500
	var fadeInTimer = 1000
	var totalFadeTimer = fadeOutTimer + fadeInTimer

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
		<section className="cat-catalogue">
			{imageState.map((image, index) => {
				return (<CatCard
					key={index}
					{...image}
					imageState={imageState}
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
	)
}
export default Wrapper;
