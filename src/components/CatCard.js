import React from "react";

function CatCard(props) {
	console.log(props)
	return (
		<div className="col-md-3">
			{!props.clicked
				? <p>NOT CLICKED</p>
				: <p>CLICKED</p>}
			<img src={process.env.PUBLIC_URL + props.image} alt={props.imageName} className="rounded" width="250" height="250"
				onClick={() => props.imageClickHandler(props.id)}
			/>
		</div>

	);
}

export default CatCard;
