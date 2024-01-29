import { Dropdown } from "react-bootstrap"
import { useMain } from "../Components/useMain"
import { useAuth } from "./useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import {
	faCopy,
	faEllipsis,
	faPencil,
	faReply,
	faShare,
	faSquareCheck,
	faX,
} from "@fortawesome/free-solid-svg-icons"

const MessageOptions = ({ chat }) => {
	const { timeSince } = useMain()
	const { user } = useAuth()
	return (
		<div className="message-options">
			<div className="avatar avatar-sm">
				<img alt="" src={user.avatar} />
			</div>
			<span className="message-date">{timeSince(chat.createdAt)}</span>
			<span
				className={`message-status ${
					chat.status !== "read" ? "d-none" : ""
				}`}
			>
				Seen
			</span>
			<span
				className={`message-status ${!chat.isEdited ? "d-none" : ""}`}
			>
				Edited
			</span>
			<Dropdown>
				<Dropdown.Toggle as={Link}>
					<FontAwesomeIcon icon={faEllipsis} />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						<FontAwesomeIcon
							icon={faSquareCheck}
							className="me-2"
						/>
						Select
					</Dropdown.Item>
					<Dropdown.Item>
						<FontAwesomeIcon icon={faReply} className="me-2" />
						Reply
					</Dropdown.Item>
					<Dropdown.Item>
						<FontAwesomeIcon icon={faShare} className="me-2" />
						Forward
					</Dropdown.Item>
					<Dropdown.Item className="text-info">
						<FontAwesomeIcon icon={faPencil} className="me-2" />
						Edit
					</Dropdown.Item>
					<Dropdown.Item className="text-primary">
						<FontAwesomeIcon icon={faCopy} className="me-2" />
						Copy
					</Dropdown.Item>
					<Dropdown.Item className="text-danger">
						<FontAwesomeIcon icon={faX} className="me-2" />
						Delete
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	)
}

export default MessageOptions
