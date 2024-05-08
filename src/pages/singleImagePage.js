import { useState, useEffect } from "react";

import CatCard from "../components/CatCard.js"

import { shuffleArrayState } from "../helpers/shuffleArray.js";

function SingleImagePage(props) {
	const { navbarState, setNavbarState } = props

	const { imageAnimation, setImageAnimation } = props

	const { fadeOutTimer } = props

	let imageSize = 400

	useEffect(() => {
		setNavbarState(`initial2`)
	}, [setNavbarState])

	const shuffleImageArray = () => {
		setImageAnimation("fade-out")

		setNavbarState("shuffle")

		setTimeout(() => {
			shuffleArrayState(props.imageState, props.setImageState)
		}, fadeOutTimer)
	}

	// console.log(props)

	return (
		<>
			<section className="cat-catalogue flex-column">
				<CatCard
					{...props.imageState[0]}
					imageSize={imageSize}
					imageState={props.imageState}
					setImageState={props.setImageState}
					clickTimeOut={props.clickTimeOut}
					setClickTimeOut={props.setClickTimeOut}
					imageAnimation={props.imageAnimation}
					setImageAnimation={props.setImageAnimation}
					fadeOutTimer={props.fadeOutTimer}
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