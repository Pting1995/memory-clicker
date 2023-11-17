import React from "react";
import CatCard from "./CatCard.js"

function Wrapper(props) {
	// console.log(props)
	return (
		<section>
			<div className="cat-container">
				{props.imageState.map((image, index) => {
					return (<CatCard
						key={index}
						{...image}
						imageClickHandler={props.imageClickHandler}
					/>)
				})}
			</div>
		</section>

	)
}
export default Wrapper;
