import { useLocation } from "react-router-dom"
import { useAuth } from "./useAuth"
import ChatSidebar from "./ChatSidebar"
import ContactsSidebar from "./ContactsSidebar"
import ProfileSidebar from "./ProfileSidebar"

const Sidebar = () => {
	const { loggedIn } = useAuth()
	const pathname = useLocation().pathname

	return loggedIn ? (
		<aside className="sidebar">
			{/* Tab Content Start */}
			<div className="tab-content">
				{/* Chat Tab Content Start */}
				<div
					className={`tab-pane ${
						pathname === "/" || pathname.indexOf("chat") !== -1
							? "active"
							: ""
					}`}
				>
					<ChatSidebar />
				</div>
				{/* Chats Tab Content End */}
				{/* Friends Tab Content Start */}
				<div
					className={`tab-pane ${
						pathname.indexOf("contacts") !== -1 ? "active" : ""
					}`}
				>
					<ContactsSidebar />
				</div>
				{/* Friends Tab Content End */}
				{/* Profile Tab Content Start */}
				<div
					className={`tab-pane ${
						pathname.indexOf("profile") !== -1 ? "active" : ""
					}`}
				>
					<ProfileSidebar />
				</div>
				{/* Profile Tab Content End */}
			</div>
			{/* Tab Content End */}
		</aside>
	) : (
		<></>
	)
}

export default Sidebar
