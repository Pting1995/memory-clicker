import React from "react";

function CatCard(props) {
	console.log(props)
	return (
		<div className="col-md-3">
			<img src={props.image} alt={props.imageName} className="rounded" width="250" height="250"
			// onClick={() => props.clickChoice(props.id, props.clicked)}
			/>
		</div>

	);
}

export default CatCard;
