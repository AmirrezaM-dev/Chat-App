import { useRoutes } from "react-router-dom"
import MessangerApp from "./Pages/MessangerApp"

const App = () => {
	const Routes = () =>
		useRoutes(
			[].concat(
				["/", ":side", ":side/:id"].map((path) => ({
					path: path,
					element: <MessangerApp />,
				}))
			)
		)
	return <Routes />
}

export default App
