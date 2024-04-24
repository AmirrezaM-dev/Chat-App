import {
	faVolumeMute,
	faTrash,
	faArchive,
	faSearch,
	faEllipsisVertical,
	faInfoCircle,
	faBan,
	faUserPlus,
	faEraser,
	faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dropdown, Nav } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useMain } from "./useMain"
import { useChat } from "./useChat"

const ChatOptions = ({ setShowSearch, setShowInfo }) => {
	const { id } = useParams()
	const { contacts, blocked } = useChat()
	const contact = contacts.filter((val) => val?.contactUser?.[0]?._id === id)
	const isUserBlocked = blocked.filter(
		(val) => val?.blacklistUser?.[0]?._id === id
	).length
		? true
		: false
	const {
		setShowAddContact,
		setShowDeleteAllMessage,
		setShowBlockContact,
		setShowDeleteContact,
	} = useMain()
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
							<FontAwesomeIcon icon={faEraser} className="me-2" />
							Clear History
						</Dropdown.Item>
						<Dropdown.Item
							className={
								contact.length ? "text-warning" : "text-success"
							}
							onClick={() =>
								contact.length
									? setShowDeleteContact(contact[0])
									: setShowAddContact(id)
							}
						>
							<FontAwesomeIcon
								icon={contact.length ? faTrash : faUserPlus}
								className="me-2"
							/>
							{contact.length
								? "Delete contact"
								: "Add to contacts"}
						</Dropdown.Item>
						{contact.length ? (
							<Dropdown.Item
								className={
									isUserBlocked ? "text-info" : "text-danger"
								}
								onClick={() =>
									setShowBlockContact({
										contact: contact[0],
										isUserBlocked,
									})
								}
							>
								<FontAwesomeIcon
									icon={
										isUserBlocked ? faUnlockKeyhole : faBan
									}
									className="me-2"
								/>
								{isUserBlocked ? "Unblock" : "Block"}
							</Dropdown.Item>
						) : (
							<></>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</li>
			<li className="nav-item list-inline-item d-sm-none me-0"></li>
		</Nav>
	)
}

export default ChatOptions
