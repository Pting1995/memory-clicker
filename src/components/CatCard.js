import React from "react";

function CatCard(props) {
	// console.log(props)
	return (
		<div>

			{props.clicked ? <p>ID: {props.id} clicked</p> : <p>ID: {props.id} not clicked</p>}
			<img src={process.env.PUBLIC_URL + props.image} alt={props.imageName} className="cat-image" width="250" height="250"
				onClick={() => props.imageClickHandler(props.id)}
			/>
		</div>


	);
}

export default CatCard;
