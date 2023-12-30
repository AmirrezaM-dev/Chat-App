import { Button } from "react-bootstrap"
import { useMain } from "../Components/useMain"
const ChatStart = () => {
	const { setShowNewChat } = useMain()
	return (
		<div className="d-flex flex-column justify-content-center text-center h-100 w-100">
			<div className="container">
				<div className="avatar avatar-lg mb-2">
					<img
						className="avatar-img"
						src={require("../assets/media/avatar/4.png")}
						alt=""
					/>
				</div>
				<h5>Welcome, Christina!</h5>
				<p className="text-muted">
					Please select a chat to Start messaging.
				</p>
				<Button
					variant="outline-primary"
					onClick={() => setShowNewChat(true)}
				>
					Start a conversation
				</Button>
			</div>
		</div>
	)
}

export default ChatStart
