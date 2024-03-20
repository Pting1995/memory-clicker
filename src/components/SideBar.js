import React from "react";
import { Link } from "react-router-dom"

function Sidebar(props) {
	// console.log(props)
	return (
		<section className="side-bar">
			<h1 className="title">Cat Memorization Game</h1>
			<Link className="btn" to="/memory-clicker">All the Cats</Link>
			<Link className="btn" to="/memory-clicker/featured">One Cat</Link>
		</section>
	);
}

export default Sidebar;