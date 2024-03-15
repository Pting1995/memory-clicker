import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/NavBar.js"
import Sidebar from "./components/SideBar.js"

import OverviewProjectPage from "./pages/overviewImagePage.js"
import SingleProjectPage from "./pages/singleImagePage.js"
import ErrorPage from "./pages/errorPage.js"

function App() {
	const [scoreState, setScoreState] = useState({
		currentScore: 0,
		highScore: 0
	})

	const [navbarState, setNavbarState] = useState("initial")

	const router = createBrowserRouter([
		{
			path: "/memory-clicker",
			errorElement: <ErrorPage />,
			children: [
				{
					path: "",
					element: <OverviewProjectPage
						scoreState={scoreState}
						setScoreState={setScoreState}
						navbarState={navbarState}
						setNavbarState={setNavbarState}
					/>
				},
				// {
				// 	path: "featured",
				// 	element: <SingleProjectPage />
				// }
			]
		}
	])

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