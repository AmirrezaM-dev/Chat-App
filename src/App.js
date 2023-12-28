import { useRoutes } from "react-router-dom"
import MessangerApp from "./Pages/MessangerApp"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Forgot from "./Pages/Forgot"

const App = () => {
	const Routes = () =>
		useRoutes(
			[
				{
					path: "/signin",
					element: <SignIn />,
				},
				{
					path: "/signup",
					element: <SignUp />,
				},
				{
					path: "/forgot",
					element: <Forgot />,
				},
			].concat(
				["/", "/:side", "/:side/:id"].map((path) => ({
					path: path,
					element: <MessangerApp />,
				}))
			)
		)
	return <Routes />
}

export default App
