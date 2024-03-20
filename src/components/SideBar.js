import React from "react";
import { Link } from "react-router-dom"

function Sidebar(props) {
	// console.log(props)
	return (
		<section className="side-bar">
			<h1 className="title">Cat Memorization Game</h1>
			<Link className="btn full-width" to="/memory-clicker">Show me all of the cats</Link>
			<Link className="btn full-width" to="/memory-clicker/featured">I'd like your finest cat</Link>
		</section>
	);
}

export default Sidebar;