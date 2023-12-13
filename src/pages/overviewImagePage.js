import React from "react";

import Wrapper from "../components/Wrapper.js"

function OverviewImagePage(props) {
	// console.log(props)
	return (
		<>
			<Wrapper
				scoreState={props.scoreState}
				navbarState={props.navbarState}
			/>
		</>
	);
}

export default OverviewImagePage;