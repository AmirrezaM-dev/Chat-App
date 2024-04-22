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
import { useChat } from "./useChat"

const MessageOptions = ({ message, chatId }) => {
	const { timeSince, setShowDeleteMessage, setShowEditMessage, copyText } =
		useMain()
	const { user } = useAuth()
	const { loadedChats } = useChat()
	return (
		<div className="message-options">
			{chatId !== user._id && loadedChats["info-" + chatId]?.avatar ? (
				<div className="avatar avatar-sm">
					<img alt="" src={loadedChats["info-" + chatId].avatar} />
				</div>
			) : (
				<></>
			)}
			<span className="message-date">{timeSince(message.createdAt)}</span>
			<span
				className={`message-status ${
					message.status !== "read" ? "d-none" : ""
				}`}
			>
				Seen
			</span>
			<span
				className={`message-status ${
					!message.isEdited ? "d-none" : ""
				}`}
			>
				Edited
			</span>
			<Dropdown>
				<Dropdown.Toggle as={Link}>
					<FontAwesomeIcon icon={faEllipsis} />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item disabled>
						<FontAwesomeIcon
							icon={faSquareCheck}
							className="me-2"
						/>
						Select
					</Dropdown.Item>
					<Dropdown.Item disabled>
						<FontAwesomeIcon icon={faReply} className="me-2" />
						Reply
					</Dropdown.Item>
					<Dropdown.Item disabled>
						<FontAwesomeIcon icon={faShare} className="me-2" />
						Forward
					</Dropdown.Item>
					{message.sender === user._id ? (
						<Dropdown.Item
							className="text-info"
							onClick={() =>
								setShowEditMessage({
									message,
									chatId,
								})
							}
						>
							<FontAwesomeIcon icon={faPencil} className="me-2" />
							Edit
						</Dropdown.Item>
					) : (
						<></>
					)}
					<Dropdown.Item
						className="text-primary"
						onClick={() => copyText(message.text)}
					>
						<FontAwesomeIcon icon={faCopy} className="me-2" />
						Copy
					</Dropdown.Item>
					<Dropdown.Item
						className="text-danger"
						onClick={() =>
							setShowDeleteMessage({
								message,
								chatId,
							})
						}
					>
						<FontAwesomeIcon icon={faX} className="me-2" />
						Delete
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	)
}

export default MessageOptions
