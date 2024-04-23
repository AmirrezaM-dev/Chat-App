import { Modal, Button } from "react-bootstrap"
import { useMain } from "./useMain"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"
const BlockContact = () => {
	const { showBlockContact, setShowBlockContact, Toast } = useMain()
	const { authApi } = useAuth()
	const { setBlocked } = useChat()
	const [isBlocking, setIsBlocking] = useState(false)
	const deleteContact = () => {
		setIsBlocking(true)
		authApi
			.post("/api/contact/block", {
				_id: showBlockContact.contact.contactUser[0]._id,
				action: showBlockContact.isUserBlocked,
			})
			.then((response) => {
				//response?.data?.contactUser?.[0]?._id
				setBlocked((blocked) => {
					if (showBlockContact.isUserBlocked)
						return [
							...blocked.filter(
								(val) =>
									val?.blacklistUser?.[0]?._id !==
									showBlockContact?.contact?.contactUser?.[0]
										?._id
							),
						]
					else {
						return [...blocked, response.data]
					}
				})
				Toast.fire({
					icon: "success",
					title: `Contact ${
						showBlockContact.isUserBlocked ? "unblocked" : "blocked"
					} successfully`,
					timer: 1000,
				})
				setShowBlockContact(false)
			})
			.catch((e) => {
				Toast.fire({
					icon: "error",
					title: e?.response?.data?.error || "Something went wrong",
				})
			})
			.finally(() => {
				setIsBlocking(false)
			})
	}
	useEffect(() => {
		setIsBlocking(false)
	}, [showBlockContact])

	return (
		<Modal
			show={showBlockContact !== false}
			onHide={() => {
				setShowBlockContact(false)
			}}
			backdrop={isBlocking ? "static" : "none"}
		>
			<Modal.Header closeButton={!isBlocking}>
				<Modal.Title>
					Do you want to{" "}
					{showBlockContact.isUserBlocked ? "unblock" : "block"} this
					contact?
				</Modal.Title>
			</Modal.Header>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="me-auto"
					onClick={() => setShowBlockContact(false)}
					disabled={isBlocking}
				>
					Cancel
				</Button>
				<Button
					variant={showBlockContact.isUserBlocked ? "info" : "danger"}
					className="ms-auto"
					onClick={deleteContact}
					disabled={isBlocking}
				>
					{isBlocking ? (
						<FontAwesomeIcon icon={faSpinner} spin />
					) : showBlockContact.isUserBlocked ? (
						"Unblock"
					) : (
						"Block"
					)}
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default BlockContact
