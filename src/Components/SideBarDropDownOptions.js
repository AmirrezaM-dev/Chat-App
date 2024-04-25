import { useNavigate } from "react-router-dom"
import { useMain } from "./useMain"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { Dropdown, Nav } from "react-bootstrap"
import { useAuth } from "./useAuth"

const SideBarDropDownOptions = () => {
	const { setShowNewChat } = useMain()
	const { user, logout } = useAuth()
	const navigate = useNavigate()
	return (
		<Nav className="flex-nowrap">
			{/* <Nav.Item
				className="list-inline-item me-1"
				onClick={() => {
					setShowNotifications(true)
				}}
			>
				<Link
					className="nav-link text-muted px-1"
					title="Notifications"
				>
					<FontAwesomeIcon icon={faBell} />
				</Link>
			</Nav.Item> */}
			<Nav.Item className="list-inline-item me-0">
				<Dropdown className="nav-link px-1 me-2 no-dropdown-after">
					<Dropdown.Toggle
						variant=""
						className="nav-link text-muted px-1 py-0"
					>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() => navigate("/chat/" + user._id)}
						>
							Saved Message
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setShowNewChat(true)}>
							New Chat
						</Dropdown.Item>
						{/* <Dropdown.Item
							disabled
							onClick={() => setShowCreateGroup(true)}
						>
							Create Group
						</Dropdown.Item> */}
						{/* <Dropdown.Item
							disabled
							onClick={() => setShowInviteOthers(true)}
						>
							Invite Others
						</Dropdown.Item> */}
						<Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Nav.Item>
		</Nav>
	)
}

export default SideBarDropDownOptions
