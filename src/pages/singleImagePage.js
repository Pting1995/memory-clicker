import { useState, useEffect } from "react";

import CatCard from "../components/CatCard.js"

import initImages from "../helpers/initImages.js";
import timeoutHandler from "../helpers/timeoutHandler.js";
import { shuffleArrayState } from "../helpers/shuffleArray.js";

function SingleImagePage(props) {
	const [imageState, setImageState] = useState([]);

	const [imageClickState, setImageClickState] = useState(false);

	const [imageAnimation, setImageAnimation] = useState("fade-in");

	let fadeOutTimer = 500
	let fadeInTimer = 1000
	let totalFadeTimer = fadeOutTimer + fadeInTimer

	let imageSize = 400

	useEffect(() => {
		setImageState(initImages())
	}, [setImageState])

	useEffect(() => {
		props.setNavbarState(`initial2`)
	})

	useEffect(() => {
		if (imageClickState === true) {
			timeoutHandler(setImageClickState, false, totalFadeTimer)
		}
	}, [imageClickState, setImageClickState, totalFadeTimer])

	useEffect(() => {
		timeoutHandler(setImageAnimation, "fade-in", fadeOutTimer)
	}, [imageAnimation, setImageAnimation, fadeOutTimer])
	// console.log(props)

	const shuffleImageArray = () => {
		setImageAnimation("fade-out")

		setTimeout(() => {
			shuffleArrayState(imageState, setImageState)
		}, fadeOutTimer)
	}

	return (
		<>
			<section className="cat-catalogue">
				<CatCard
					{...imageState[0]}
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
				/>
			</section>
			{/* <button onClick>This is a new cat</button> */}
			<button onClick={() => { shuffleImageArray() }}>Shuffle Cat</button >
		</>
	);
}

export default SingleImagePage;