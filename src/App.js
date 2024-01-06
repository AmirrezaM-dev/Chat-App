import {
	Routes,
	Route,
	useLocation,
	useNavigate,
	useRoutes,
} from "react-router-dom"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Forgot from "./Pages/Forgot"
import StartNewChat from "./Components/StartNewChat"
import CreateGroup from "./Components/CreateGroup"
import InviteOthers from "./Components/InviteOthers"
import Notifications from "./Components/Notifications"
import Navigation from "./Components/Navigation"
import { useAuth } from "./Components/useAuth"
import { useEffect } from "react"
import Chat from "./Pages/Chat"
import ChatStart from "./Pages/ChatStart"
import Contacts from "./Pages/Contacts"
import Profile from "./Pages/Profile"
import Preloader from "./Pages/Preloader"
import { useMain } from "./Components/useMain"
import Sidebar from "./Components/Sidebar"

const App = () => {
	const { showPreloader } = useMain()
	const { loggedIn, firstLogin } = useAuth()
	const pathname = useLocation().pathname
	const navigate = useNavigate()
	useEffect(() => {
		if (
			loggedIn &&
			(pathname.indexOf("signin") !== -1 ||
				pathname.indexOf("signup") !== -1)
		)
			navigate("/chat")
		const main = document.getElementsByClassName("main")
		const sidebarHeaders = document.getElementsByClassName("sidebar-header")
		if (main?.[0])
			if (
				(pathname.indexOf("chat") !== -1 && pathname > "/chat/") ||
				(pathname.indexOf("contacts") !== -1 && pathname > "/contacts/")
			) {
				Object.keys(sidebarHeaders).map((sidebarHeader) =>
					sidebarHeaders[sidebarHeader].classList.add(
						"d-none",
						"d-lg-block"
					)
				)
				main[0].classList.add("main-visible")
			} else {
				main[0].classList.remove("main-visible")
				Object.keys(sidebarHeaders).map((sidebarHeader) =>
					sidebarHeaders[sidebarHeader].classList.remove(
						"d-none",
						"d-lg-block"
					)
				)
			}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loggedIn, pathname])
	const SideBar = () =>
		useRoutes(
			[].concat(
				[
					"/",
					"/chat",
					"/chat/:id",
					"/contacts",
					"/contacts/:id",
					"/profile",
				].map((path) => ({
					path: path,
					element: <Sidebar />,
				}))
			)
		)
	return !firstLogin || showPreloader ? (
		<Preloader />
	) : (
		<>
			<Navigation />
			<SideBar />
			<main className={`main main-visible`}>
				<Routes>
					<Route path={"/signin"} element={<SignIn />} />
					<Route path={"/signup"} element={<SignUp />} />
					<Route path={"/forgot"} element={<Forgot />} />
					{["/", "/chat"].map((path) => {
						return <Route path={path} element={<ChatStart />} />
					})}
					<Route path={"/chat/:id"} element={<Chat />} />
					<Route path={"/contacts"} element={<Contacts />} />
					<Route path={"/contacts/:id"} element={<Contacts />} />
					<Route path={"/profile"} element={<Profile />} />
				</Routes>
			</main>
			<StartNewChat />
			<CreateGroup />
			<InviteOthers />
			<Notifications />
		</>
	)
}

export default App
