import { Dropdown } from "react-bootstrap"
import { useAuth } from "./useAuth"

const FilterChats = () => {
	const { filterChats, setFilterChats } = useAuth()
	return (
		<Dropdown className="nav-link px-1 me-2">
			<Dropdown.Toggle
				variant="outline-mute"
				className="text-dark border border-dark"
			>
				{filterChats}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item onClick={() => setFilterChats("All Chats")}>
					All Chats
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setFilterChats("Contacts")}>
					Contacts
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setFilterChats("Groups")}>
					Groups
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setFilterChats("Unread")}>
					Unread
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setFilterChats("Archived")}>
					Archived
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default FilterChats
