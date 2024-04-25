import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./useAuth"
import ChatSidebarHeader from "./ChatSidebarHeader"
import SidebarChatTemplates from "./SidebarChatTemplates"
import { useMain } from "./useMain"
import { useChat } from "./useChat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"

const ChatSidebar = () => {
	const { user } = useAuth()
	const { timeSince } = useMain()
	const { chats } = useChat()
	const { id } = useParams()
	const navigate = useNavigate()

	return (
		<div className="d-flex flex-column h-100">
			<div className="hide-scrollbar h-100">
				{/* Chat Header Start */}
				<ChatSidebarHeader />
				{/* Chat Header End */}
				{/* Chat Contact List Start */}
				<ul className="contacts-list">
					{chats
						.sort(
							(a, b) =>
								new Date(b.createdAt) - new Date(a.createdAt)
						)
						.map((chat, chatIndex) => {
							const otherUser =
								chat.sender_user[0]._id !== user._id
									? chat.sender_user[0]
									: chat.receiver_user[0]
							return (
								<li
									key={chatIndex}
									className={`contacts-item friends ${
										id === otherUser._id ? "active" : ""
									}`}
									onClick={() =>
										navigate(`/chat/${otherUser._id}`)
									}
								>
									<Link className="contacts-link">
										{otherUser._id === user._id ? (
											<Button
												disabled
												className={`avatar opacity-100 rounded-circle ${
													id === otherUser._id
														? "border-white"
														: "border-dark"
												}`}
												variant=""
											>
												<FontAwesomeIcon
													icon={faBookmark}
												/>
											</Button>
										) : otherUser?.avatar ? (
											<div className="avatar /*avatar-online*/">
												<img
													src={otherUser.avatar}
													alt=""
												/>
											</div>
										) : (
											<></>
										)}
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name text-truncate">
													{otherUser._id === user._id
														? "Saved Messages"
														: otherUser.fullname}
												</h6>
												<div className="chat-time">
													{timeSince(chat.createdAt)}
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													{chat.text}
												</p>
											</div>
										</div>
									</Link>
								</li>
							)
						})}
					<SidebarChatTemplates />
				</ul>
				{/* Chat Contact List End */}
			</div>
		</div>
	)
}

export default ChatSidebar
