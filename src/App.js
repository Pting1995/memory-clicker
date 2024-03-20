import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
								/>} />
								<Route path="/featured" element={<SingleImagePage
									scoreState={scoreState}
									setScoreState={setScoreState}
									navbarState={navbarState}
									setNavbarState={setNavbarState}
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