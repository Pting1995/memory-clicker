import React from "react";
import CatCard from "./CatCard.js"

function Wrapper(props) {
	// console.log(props)
	return (
		<section className="cat-catalogue">
			{props.imageState.map((image, index) => {
				return (<CatCard
					key={index}
					{...image}
					imageAnimation={props.imageAnimation}
					imageClickHandler={props.imageClickHandler}
				/>)
			})}
		</section>

	)
}
export default Wrapper;
