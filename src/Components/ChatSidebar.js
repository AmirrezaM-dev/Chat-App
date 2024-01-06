import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./useAuth"
import ChatSidebarHeader from "./ChatSidebarHeader"
import SidebarChatTemplates from "./SidebarChatTemplates"

const ChatSidebar = () => {
	const { user, chats } = useAuth()
	const { id } = useParams()
	const navigate = useNavigate()
	const timeSince = (date) => {
		const second = Math.floor((new Date() - date) / 1000)
		const days = second / 86400
		const hours = second / 3600
		const seconds = second / 60
		if (days > 1) {
			return new Date(date).toLocaleString("en-US", {
				year: "2-digit",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			})
		} else if (hours > 1) {
			return (
				Math.floor(hours) +
				` hour${Math.floor(hours) === 1 ? "" : "s"} ago`
			)
		} else if (seconds > 1) {
			return (
				Math.floor(seconds) +
				` minute${Math.floor(seconds) === 1 ? "" : "s"} ago`
			)
		}
		return "Just now"
	}

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
										<div className="avatar avatar-online">
											<img
												src={otherUser.avatar}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name text-truncate">
													{otherUser.fullname}
												</h6>
												<div className="chat-time">
													{timeSince(
														new Date(chat.createdAt)
													)}
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
