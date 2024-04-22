import { Col, Modal, Row, Form, Button } from "react-bootstrap"
import { useMain } from "./useMain"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"
const DeleteAllMessages = () => {
	const { showDeleteAllMessage, setShowDeleteAllMessage } = useMain()
	const { Socket } = useAuth()
	const { setLoadedChats, setChats } = useChat()
	const [deleteForEveryone, setDeleteForEveryone] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const deleteMessage = () => {
		setIsDeleting(true)
		const OtherUserID = showDeleteAllMessage.id
		Socket.emit(
			"deleteAllMessages",
			{
				OtherUserID,
				deleteForEveryone,
			},
			(response) => {
				if (response.success) {
					setLoadedChats((loadedChats) => {
						return {
							...loadedChats,
							[OtherUserID]: [],
						}
					})
					setChats((chats) => {
						return chats.filter(
							(chat) =>
								chat.receiver_user[0]._id !== OtherUserID &&
								chat.sender_user[0]._id !== OtherUserID
						)
					})
					setShowDeleteAllMessage(false)
				} else {
					console.log("Deleting Message Failed")
				}
			}
		)
	}
	useEffect(() => {
		setIsDeleting(false)
	}, [showDeleteAllMessage])

	return (
		<Modal
			show={showDeleteAllMessage !== false}
			onHide={() => {
				setShowDeleteAllMessage(false)
			}}
			backdrop={isDeleting ? "static" : "none"}
		>
			<Modal.Header closeButton={!isDeleting}>
				<Modal.Title>Do you want to delete all messages?</Modal.Title>
			</Modal.Header>
			<Modal.Body className="py-0">
				<Form>
					<Row>
						<Col sm={12}>
							<div className="row">
								<Col sm={12}>
									<Form.Group
										className="m-2"
										onClick={() => {
											if (!isDeleting)
												setDeleteForEveryone(
													(deleteForEveryone) =>
														!deleteForEveryone
												)
										}}
									>
										<Form.Check
											checked={deleteForEveryone}
											onChange={() =>
												setDeleteForEveryone(
													(deleteForEveryone) =>
														!deleteForEveryone
												)
											}
											type="checkbox"
											label={`Delete for everyone?`}
											disabled={isDeleting}
										/>
									</Form.Group>
								</Col>
							</div>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="me-auto"
					onClick={() => setShowDeleteAllMessage(false)}
					disabled={isDeleting}
				>
					Cancel
				</Button>
				<Button
					variant="danger"
					className="ms-auto"
					onClick={deleteMessage}
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

export default DeleteAllMessages
