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

	const [navbarState, setnavbarState] = useState("initial")

	return (
		<>
			<Sidebar />
			<main>
				<Navbar
					scoreState={scoreState}
					setScoreState={setScoreState}
					navbarState={navbarState}
					setnavbarState={setnavbarState}
				/>
				<RouterProvider
					router={router}
					scoreState={scoreState}
					setScoreState={setScoreState}
					navbarState={navbarState}
					setnavbarState={setnavbarState}
				/>
			</main>

		</>
	);
}

const router = createBrowserRouter([
	{
		path: "/memory-clicker",
		errorElement: <ErrorPage />,
		children: [
			{
				path: "all",
				element: <OverviewProjectPage />
			},
			// {
			// 	path: "featured",
			// 	element: <SingleProjectPage />
			// }
		]
	}
])

export default App;