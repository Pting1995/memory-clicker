import { useState, useEffect } from "react";

import CatCard from "../components/CatCard.js"

import timeoutHandler from "../helpers/timeoutHandler.js";

function OverviewImagePage(props) {

	const { navbarState, setNavbarState } = props

	const { imageAnimation, setImageAnimation } = props

	const { fadeOutTimer } = props

	let imageSize = 250

	useEffect(() => {
		setNavbarState(`initial`)
	}, [setNavbarState])

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
						clickTimeOut={props.clickTimeOut}
						setClickTimeOut={props.setClickTimeOut}
						imageAnimation={props.imageAnimation}
						setImageAnimation={props.setImageAnimation}
						fadeOutTimer={props.fadeOutTimer}
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