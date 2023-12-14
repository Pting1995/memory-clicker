import React from "react";
import meowtta from "../assets/images/get-meowtta-here.webp"

function ErrorPage() {
	// console.log(props)
	return (
		<>
			<section className="cat-catalogue">
				<figure>
					<img className="cat-box" src={meowtta} />
					<h1>404: Get meowtta here</h1>
				</figure>

			</section>

		</>
	);
}

export default ErrorPage;
