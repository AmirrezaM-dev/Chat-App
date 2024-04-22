import { Dropdown } from "react-bootstrap"
import { useMain } from "./useMain"

const FilterChats = () => {
	const { filterChats, setFilterChats } = useMain()
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
				<Dropdown.Item
					onClick={() => setFilterChats("Groups")}
					disabled
				>
					Groups
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setFilterChats("Unread")}>
					Unread
				</Dropdown.Item>
				<Dropdown.Item
					onClick={() => setFilterChats("Archived")}
					disabled
				>
					Archived
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default FilterChats
