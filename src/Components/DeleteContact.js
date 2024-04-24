import { Modal, Button } from "react-bootstrap"
import { useMain } from "./useMain"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"
const DeleteContact = () => {
	const { showDeleteContact, setShowDeleteContact, Toast } = useMain()
	const { authApi } = useAuth()
	const { setContacts } = useChat()
	const [isDeleting, setIsDeleting] = useState(false)
	const deleteContact = () => {
		setIsDeleting(true)
		authApi
			.post("/api/contact/remove", { _id: showDeleteContact._id })
			.then(() => {
				setContacts((contacts) => {
					return [
						...contacts.filter(
							(val) => val._id !== showDeleteContact._id
						),
					]
				})
				Toast.fire({
					icon: "success",
					title: "Contact deleted",
					timer: 1000,
				})
				setShowDeleteContact(false)
			})
			.catch((e) => {
				console.log(e)
				Toast.fire({
					icon: "error",
					title: "Something went wrong",
				})
			})
			.finally(() => {
				setIsDeleting(false)
			})
	}
	useEffect(() => {
		setIsDeleting(false)
	}, [showDeleteContact])

	return (
		<Modal
			show={showDeleteContact !== false}
			onHide={() => {
				setShowDeleteContact(false)
			}}
			backdrop={isDeleting ? "static" : "none"}
		>
			<Modal.Header closeButton={!isDeleting}>
				<Modal.Title>Do you want to delete this contact?</Modal.Title>
			</Modal.Header>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="me-auto"
					onClick={() => setShowDeleteContact(false)}
					disabled={isDeleting}
				>
					Cancel
				</Button>
				<Button
					variant="danger"
					className="ms-auto"
					onClick={deleteContact}
					disabled={isDeleting}
				>
					{isDeleting ? (
						<FontAwesomeIcon icon={faSpinner} spin />
					) : (
						"Delete"
					)}
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DeleteContact
