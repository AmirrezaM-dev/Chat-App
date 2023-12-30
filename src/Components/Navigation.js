import { faEnvelope, faMessage } from "@fortawesome/free-regular-svg-icons"
import { faUserAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./useAuth"

const Navigation = () => {
	const { loggedIn } = useAuth()
	const { side } = useParams()
	const navigate = useNavigate()
	return loggedIn ? (
		<>
			{/* Navigation Start */}
			<div className="navigation navbar navbar-light bg-primary">
				{/* Logo Start */}
				<Link
					className="d-none d-xl-block bg-light rounded p-1"
					to="/chat"
				>
					<FontAwesomeIcon icon={faEnvelope} size="2x" />
				</Link>
				{/* Logo End */}
				{/* Main Nav Start */}
				<ul className="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center px-5">
					{/* Chats Tab Start */}
					<li className="nav-item" onClick={() => navigate("/chat")}>
						<Link
							className={`nav-link p-0 py-xl-3 ${
								side === undefined || side === "chat"
									? "active"
									: ""
							}`}
							title="Chats"
						>
							<FontAwesomeIcon icon={faMessage} />
						</Link>
					</li>
					{/* Chats Tab End */}
					{/* Friends Tab Start */}
					<li
						className="nav-item"
						onClick={() => navigate("/contacts")}
					>
						<Link
							className={`nav-link p-0 py-xl-3 ${
								side === "contacts" ? "active" : ""
							}`}
							title="Contacts"
						>
							<FontAwesomeIcon icon={faUserFriends} />
						</Link>
					</li>
					{/* Friends Tab End */}
					{/* Profile Tab Start */}
					<li
						className="nav-item"
						onClick={() => navigate("/profile")}
					>
						<Link
							className={`nav-link p-0 py-xl-3 ${
								side === "profile" ? "active" : ""
							}`}
							title="Profile"
						>
							<FontAwesomeIcon icon={faUserAlt} />
						</Link>
					</li>
					{/* Profile Tab End */}
				</ul>
				{/* Main Nav End */}
			</div>
			{/* Navigation End */}
		</>
	) : (
		<></>
	)
}

export default Navigation
