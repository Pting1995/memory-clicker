import { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import Navbar from "./components/NavBar.js"
import Sidebar from "./components/SideBar.js"

import OverviewImagePage from "./pages/overviewImagePage.js"
import SingleImagePage from "./pages/singleImagePage.js"
// import DataPage from "./pages/dataPage.js"
import ErrorPage from "./pages/errorPage.js"

function App() {
	const [scoreState, setScoreState] = useState({
		currentScore: 0,
		highScore: 0
	})

	const [navbarState, setNavbarState] = useState("initial")

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/memory-clicker" errorElement={<ErrorPage />} >
				<Route path="" element={<OverviewImagePage
					scoreState={scoreState}
					setScoreState={setScoreState}
					navbarState={navbarState}
					setNavbarState={setNavbarState}
				/>} />
				<Route path="featured" element={<SingleImagePage
					scoreState={scoreState}
					setScoreState={setScoreState}
					navbarState={navbarState}
					setNavbarState={setNavbarState}
				/>} />
			</Route>
		)
	);

	return (
		<>
			<Sidebar />
			<main>
				<Navbar
					scoreState={scoreState}
					setScoreState={setScoreState}
					navbarState={navbarState}
					setNavbarState={setNavbarState}
				/>
				<RouterProvider
					router={router}
				/>
			</main>

		</>
	);
}
export default App;