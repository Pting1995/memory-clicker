import React from "react";

function CatCard(props) {
	console.log(props)
	return (
		<img src={process.env.PUBLIC_URL + props.image} alt={props.imageName} className="cat-image" width="250" height="250"
			onClick={() => props.imageClickHandler(props.id)}
		/>

	);
}

export default CatCard;
