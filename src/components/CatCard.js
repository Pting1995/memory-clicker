import React from "react";
import { imageClickHandler } from "../helpers/imageClickHandler.js"

function CatCard(props) {
	// console.log(props)
	return (
		<>
			<figure className={`cat-box ${props.imageAnimation}`} onClick={() => imageClickHandler(props.id, props)} >
				<img src={process.env.PUBLIC_URL + props.image} alt={props.imageName} className="cat-image" width={props.imageSize} height={props.imageSize} loading="lazy" />
				<div className="cat-description">
					<p className="click-text">Choose this cat!</p>
				</div>
			</figure >
		</>
	);
}

export default CatCard;
