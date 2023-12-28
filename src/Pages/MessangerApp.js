import Navigation from "../Components/Navigation"
import Sidebar from "../Components/Sidebar"
import Main from "../Components/Main"
import StartNewChat from "../Components/StartNewChat"
import CreateGroup from "../Components/CreateGroup"
import InviteOthers from "../Components/InviteOthers"
import Notifications from "../Components/Notifications"
const MessangerApp = () => {
	return (
		<>
			<Navigation />
			<Sidebar />
			<Main />
			<StartNewChat />
			<CreateGroup />
			<InviteOthers />
			<Notifications />
		</>
	)
}

export default MessangerApp
