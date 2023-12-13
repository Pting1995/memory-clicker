import React from "react";

function CatCard(props) {
	// console.log(props)
	return (
		<>
			<figure className={props.imageAnimation + " cat-box"} onClick={() => props.imageClickHandler(props.id)} >
				<img src={process.env.PUBLIC_URL + props.image} alt={props.imageName} className="cat-image" width="250" height="250" loading="lazy" />
				<div className="cat-description">
					<p className="click-text">Choose this cat!</p>
				</div>
			</figure >
		</>
	);
}

export default CatCard;
