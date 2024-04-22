import {
	faVolumeMute,
	faTrash,
	faArchive,
	faSearch,
	faEllipsisVertical,
	faInfoCircle,
	faBan,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dropdown, Nav } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useMain } from "./useMain"

const ChatOptions = ({ setShowSearch, setShowInfo }) => {
	const { id } = useParams()
	const { setShowDeleteAllMessage } = useMain()
	return (
		<Nav className="flex-nowrap">
			<li
				className="nav-item list-inline-item d-none d-sm-block me-1"
				onClick={() => setShowSearch((showSearch) => !showSearch)}
			>
				<Link className="nav-link text-muted px-1">
					<FontAwesomeIcon icon={faSearch} />
				</Link>
			</li>

			<li className="nav-item list-inline-item d-none d-sm-block me-0">
				<Dropdown
					className="nav-link px-1"
					// drop="start"
				>
					<Dropdown.Toggle as={Link} className="text-secondary">
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() => {
								setShowInfo((showInfo) => !showInfo)
							}}
						>
							<FontAwesomeIcon
								icon={faInfoCircle}
								className="me-2"
							/>
							View Info
						</Dropdown.Item>
						<Dropdown.Item disabled>
							<FontAwesomeIcon
								icon={faVolumeMute}
								className="me-2"
							/>
							Mute Notifications
						</Dropdown.Item>
						<Dropdown.Item disabled>
							<FontAwesomeIcon
								icon={faArchive}
								className="me-2"
							/>
							Archive
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setShowDeleteAllMessage({ id })
							}}
						>
							<FontAwesomeIcon icon={faTrash} className="me-2" />
							Delete
						</Dropdown.Item>
						<Dropdown.Item /*className="text-danger"*/ disabled>
							<FontAwesomeIcon icon={faBan} className="me-2" />
							Block
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</li>
			<li className="nav-item list-inline-item d-sm-none me-0"></li>
		</Nav>
	)
}

export default ChatOptions
