import { Link } from "react-router-dom"
import { useMain } from "./useMain"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from "react-bootstrap"
import { useAuth } from "./useAuth"

const SideBarDropDownOptions = () => {
	const {
		setShowNotifications,
		setShowNewChat,
		setShowCreateGroup,
		setShowInviteOthers,
	} = useMain()
	const { logout } = useAuth()
	return (
		<ul className="nav flex-nowrap">
			<li
				className="nav-item list-inline-item me-1"
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
			</li>
			<li className="nav-item list-inline-item me-0">
				<Dropdown className="nav-link px-1 me-2 no-dropdown-after">
					<Dropdown.Toggle
						className="nav-link text-muted px-1 py-0"
						as={Link}
					>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={() => setShowNewChat(true)}>
							New Chat
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setShowCreateGroup(true)}>
							Create Group
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => setShowInviteOthers(true)}
						>
							Invite Others
						</Dropdown.Item>
						<Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</li>
		</ul>
	)
}

export default SideBarDropDownOptions
