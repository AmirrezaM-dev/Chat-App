import { Col, Modal, Row, Form, Button } from "react-bootstrap"
import { useMain } from "./useMain"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"
const DeleteMessage = () => {
	const { showDeleteMessage, setShowDeleteMessage } = useMain()
	const { Socket } = useAuth()
	const { loadedChats, setLoadedChats, setChats } = useChat()
	const [deleteForEveryone, setDeleteForEveryone] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const deleteMessage = () => {
		setIsDeleting(true)
		Socket.emit(
			"deleteMessage",
			{
				message: showDeleteMessage.message,
				deleteForEveryone,
			},
			(response) => {
				if (response.success) {
					setLoadedChats((loadedChats) => {
						return {
							...loadedChats,
							[showDeleteMessage.chatId]: [
								...loadedChats[showDeleteMessage.chatId].filter(
									(val) =>
										val._id !==
										showDeleteMessage.message._id
								),
							],
						}
					})
					if (loadedChats[showDeleteMessage.chatId].length > 1) {
						setChats((chats) => {
							return chats.map((chat) => {
								if (
									chat.receiver_user[0]._id ===
										showDeleteMessage.message.receiver &&
									chat.sender_user[0]._id ===
										showDeleteMessage.message.sender
								) {
									const allMessagesExceptDeleteMessage =
										loadedChats[showDeleteMessage.chatId]
											.sort(
												(a, b) =>
													a.createdAt - b.createdAt
											)
											.filter(
												(val) =>
													val._id !==
													showDeleteMessage.message
														._id
											)
									return {
										...allMessagesExceptDeleteMessage[
											allMessagesExceptDeleteMessage.length -
												1
										],
										receiver_user: chat.receiver_user,
										sender_user: chat.sender_user,
									}
								} else {
									return chat
								}
							})
						})
					} else {
						setChats((chats) => {
							return chats.filter(
								(chat) =>
									chat.receiver_user[0]._id !==
										showDeleteMessage.message.receiver &&
									chat.sender_user[0]._id !==
										showDeleteMessage.message.sender
							)
						})
					}
					setShowDeleteMessage(false)
				}
			}
		)
	}
	useEffect(() => {
		setIsDeleting(false)
	}, [showDeleteMessage])

	return (
		<Modal
			show={showDeleteMessage !== false}
			onHide={() => {
				setShowDeleteMessage(false)
			}}
			backdrop={isDeleting ? "static" : "none"}
		>
			<Modal.Header closeButton={!isDeleting}>
				<Modal.Title>Do you want to delete this message?</Modal.Title>
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
					onClick={() => setShowDeleteMessage(false)}
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

export default DeleteMessage
