import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.js"
import Sidebar from "./components/SideBar.js"

import OverviewImagePage from "./pages/overviewImagePage.js"
import SingleImagePage from "./pages/singleImagePage.js"
// import DataPage from "./pages/dataPage.js"
import ErrorPage from "./pages/errorPage.js"

import timeoutHandler from "./helpers/timeoutHandler.js";
import initImages from "./helpers/initImages.js";
import { shuffleArrayState } from "./helpers/shuffleArray.js";

function App() {
	const [scoreState, setScoreState] = useState({
		currentScore: 0,
		highScore: 0
	})

	const [navbarState, setNavbarState] = useState("initial")

	const [imageState, setImageState] = useState([]);

	const [imageAnimation, setImageAnimation] = useState("fade-in");

	const [clickTimeOut, setClickTimeOut] = useState(false);

	let fadeOutTimer = 500
	let fadeInTimer = 1000
	let totalFadeTimer = fadeOutTimer + fadeInTimer

	// initalize image array when page load
	useEffect(() => {
		shuffleArrayState(initImages(), setImageState)
	}, [])

	// play animation when a image is clicked
	useEffect(() => {
		timeoutHandler(setImageAnimation, "fade-in", fadeOutTimer)
	}, [imageAnimation, setImageAnimation, fadeOutTimer])

	// sets a click timeout
	useEffect(() => {
		if (clickTimeOut === true) {
			timeoutHandler(setClickTimeOut, false, totalFadeTimer)
		}
	}, [clickTimeOut, setClickTimeOut, totalFadeTimer])

	// set navbar back to default
	useEffect(() => {
		if (navbarState === "correct" || navbarState === "incorrect" || navbarState === "shuffle") {
			timeoutHandler(setNavbarState, "default", totalFadeTimer)
		}
	}, [navbarState, setNavbarState, totalFadeTimer])

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/memory-clicker/*" errorElement={<ErrorPage />} element={
					<>
						<Sidebar
							scoreState={scoreState}
							setScoreState={setScoreState}
							navbarState={navbarState}
							setNavbarState={setNavbarState} />
						<main>
							<Navbar
								scoreState={scoreState}
								setScoreState={setScoreState}
								navbarState={navbarState}
								setNavbarState={setNavbarState} />
							<Routes>
								<Route path="" element={<OverviewImagePage
									scoreState={scoreState}
									setScoreState={setScoreState}
									navbarState={navbarState}
									setNavbarState={setNavbarState}
									imageState={imageState}
									setImageState={setImageState}
									imageAnimation={imageAnimation}
									setImageAnimation={setImageAnimation}
									fadeOutTimer={fadeOutTimer}
									clickTimeOut={clickTimeOut}
									setClickTimeOut={setClickTimeOut}
								/>} />
								<Route path="/featured" element={<SingleImagePage
									scoreState={scoreState}
									setScoreState={setScoreState}
									navbarState={navbarState}
									setNavbarState={setNavbarState}
									imageState={imageState}
									setImageState={setImageState}
									imageAnimation={imageAnimation}
									setImageAnimation={setImageAnimation}
									fadeOutTimer={fadeOutTimer}
									clickTimeOut={clickTimeOut}
									setClickTimeOut={setClickTimeOut}
								/>} />
							</Routes>
						</main>
					</>
				}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;