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
import { checkMaxScore } from "./helpers/scoreHandler.js";
import { scoreResetter } from "./helpers/scoreHandler.js";

function App() {
	const [imageState, setImageState] = useState([]);

	const [scoreState, setScoreState] = useState({
		maxScore: imageState.length,
		highScore: 0,
		currentScore: 0,
		priorScore: 0
	})

	const [navbarState, setNavbarState] = useState("initial")

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
		if (navbarState === "correct" || navbarState === "incorrect" || navbarState === "shuffle" || navbarState === "win") {
			timeoutHandler(setNavbarState, "default", totalFadeTimer)
		}
	}, [navbarState, setNavbarState, totalFadeTimer])

	// update maxScore when imageState length changes
	useEffect(() => {
		checkMaxScore(imageState.length, scoreState, setScoreState)
		// function should only fire when imageState length changes
		// eslint-disable-next-line
	}, [imageState.length])

	// Check win condition
	useEffect(() => {
		// console.log(scoreState.maxScore, scoreState.currentScore)
		if (scoreState.maxScore === scoreState.currentScore) {
			let nextImageState = []
			nextImageState = initImages();
			setImageState(nextImageState)

			scoreResetter(scoreState, setScoreState);

			setNavbarState("win")
		}
	}, [scoreState.currentScore])

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/memory-clicker/*" errorElement={<ErrorPage />} element={
					<>
						<Sidebar
							scoreState={scoreState}
							setScoreState={setScoreState}
							navbarState={navbarState}
							setNavbarState={setNavbarState}
						/>
						<main>
							<Navbar
								scoreState={scoreState}
								setScoreState={setScoreState}
								navbarState={navbarState}
								setNavbarState={setNavbarState}
							/>
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