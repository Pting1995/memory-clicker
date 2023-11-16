import { useState, useEffect } from "react";
import CatCard from "./CatCard.js"
import imageList from "./images.json";

function Wrapper(props) {

	const [imageState, setImageState] = useState([])

	const initImages = () => {
		var imageState = []
		imageState = [...imageList].map((image, index) => ({
			...image,
			imageIndex: index,
			imageName: "cat",
			clicked: false
		}))
		setImageState(imageState)
	}

	useEffect(() => {
		initImages()
	}, [])

	return <div className="container">
		<div className="row">
			{imageState.map((image, index) => {
				return (<CatCard
					key={index}
					{...image}
				/>)
			})}
		</div>;
	</div>
}

export default Wrapper;
