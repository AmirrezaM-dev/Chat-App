import { Col, Modal, Row, Form, Button } from "react-bootstrap"
import { useMain } from "./useMain"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"
const DeleteMessage = () => {
	const { showDeleteMessage, setShowDeleteMessage } = useMain()
	const { user, authApi } = useAuth()
	const { loadedChats, setLoadedChats, setChats } = useChat()
	const [deleteForEveryone, setDeleteForEveryone] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const deleteMessage = () => {
		setIsDeleting(true)
		authApi
			.post("/api/message/deleteMessage", {
				id: showDeleteMessage.message._id,
			})
			.then((response) => {
				if (response.data.success) {
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
					const lastMessage = loadedChats[
						showDeleteMessage.chatId
					].sort((a, b) => a.createdAt - b.createdAt)[
						loadedChats[showDeleteMessage.chatId].length - 1
					]
					const penultimateMessage = loadedChats[
						showDeleteMessage.chatId
					].sort((a, b) => a.createdAt - b.createdAt)[
						loadedChats[showDeleteMessage.chatId].length - 2
					]
					if (lastMessage._id === showDeleteMessage.message._id)
						setChats((chats) => {
							const allChatsExceptTheRelatedChat = chats.filter(
								(val) =>
									showDeleteMessage.chatId !== user._id
										? val.receiver_user[0]._id !==
												showDeleteMessage.chatId &&
										  val.sender_user[0]._id !==
												showDeleteMessage.chatId
										: val.receiver_user[0]._id !==
										  val.sender_user[0]._id
							)
							return penultimateMessage
								? [
										...allChatsExceptTheRelatedChat,
										{
											...penultimateMessage,
											sender_user: [
												{
													_id: penultimateMessage.sender,
												},
											],
											receiver_user: [
												{
													_id: penultimateMessage.receiver,
												},
											],
										},
								  ]
								: [...allChatsExceptTheRelatedChat]
						})
					setShowDeleteMessage(false)
				}
			})
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
