import { Col, Modal, Row, Form, Button } from "react-bootstrap"
import { useMain } from "./useMain"
import { useEffect, useState } from "react"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const EditMessage = () => {
	const { showEditMessage, setShowEditMessage } = useMain()
	const { Socket } = useAuth()
	const { loadedChats, setLoadedChats, setChats } = useChat()
	const [isEditing, setIsEditing] = useState(false)
	const editMessage = () => {
		setIsEditing(true)
		Socket.emit(
			"editMessage",
			{
				id: showEditMessage.message._id,
				text: showEditMessage.message.text,
			},
			(response) => {
				if (response.success) {
					setLoadedChats((loadedChats) => {
						return {
							...loadedChats,
							[showEditMessage.chatId]: [
								...loadedChats[showEditMessage.chatId].map(
									(val) =>
										val._id === showEditMessage.message._id
											? {
													...val,
													text: showEditMessage
														.message.text,
											  }
											: val
								),
							],
						}
					})
					const lastMessage = loadedChats[
						showEditMessage.chatId
					].sort((a, b) => a.createdAt - b.createdAt)[
						loadedChats[showEditMessage.chatId].length - 1
					]
					if (lastMessage._id === showEditMessage.message._id)
						setChats((chats) => {
							return [
								...chats.map((val) =>
									val._id === showEditMessage.message._id
										? {
												...val,
												text: showEditMessage.message
													.text,
										  }
										: val
								),
							]
						})
					setShowEditMessage(false)
				}
			}
		)
	}
	useEffect(() => {
		setIsEditing(false)
	}, [showEditMessage])
	return (
		<Modal
			show={showEditMessage}
			onHide={() => {
				setShowEditMessage(false)
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Edit message</Modal.Title>
			</Modal.Header>
			<Modal.Body className="py-0">
				<Form>
					<Row>
						<Col sm={12}>
							<Form.Group
								className="m-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Control
									as="textarea"
									rows={3}
									value={showEditMessage?.message?.text}
									onChange={(e) =>
										setShowEditMessage((editMessage) => {
											return {
												...editMessage,
												message: {
													...editMessage.message,
													text: e.target.value,
												},
											}
										})
									}
								/>
							</Form.Group>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="me-auto"
					onClick={() => setShowEditMessage(false)}
					disabled={isEditing}
				>
					Cancel
				</Button>
				<Button
					variant="primary"
					className="ms-auto"
					onClick={editMessage}
					disabled={isEditing}
				>
					{isEditing ? (
						<FontAwesomeIcon icon={faSpinner} spin />
					) : (
						"Edit"
					)}
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default EditMessage
