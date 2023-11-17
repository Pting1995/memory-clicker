import React from "react";
import CatCard from "./CatCard.js"

function Wrapper(props) {
	// console.log(props)
	return <div className="container">
		<div className="row">
			{props.imageState.map((image, index) => {
				return (<CatCard
					key={index}
					{...image}
					imageClickHandler={props.imageClickHandler}
				/>)
			})}
		</div>;
	</div>
}

export default Wrapper;
