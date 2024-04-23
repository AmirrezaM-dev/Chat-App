import { Col, Modal, Row, Button, Form } from "react-bootstrap"
import { useMain } from "./useMain"
import { useState } from "react"
import { useAuth } from "./useAuth"
import { useChat } from "./useChat"

const AddContact = () => {
	const { showAddContact, setShowAddContact, Toast } = useMain()
	const [username, setUsername] = useState()
	const { setContacts } = useChat()
	const [usernameValidator, setUsernameValidator] = useState()
	const [isSending, setIsSending] = useState(false)
	const { authApi } = useAuth()
	const onSubmit = (e) => {
		e.preventDefault()
		if (!isSending) {
			if (username?.length) {
				setIsSending(true)
				authApi
					.post("/api/contact/add", { username })
					.then((response) => {
						setUsername("")
						setShowAddContact(false)
						setContacts((contacts) => {
							return [...contacts, { ...response.data }]
						})
						Toast.fire({
							icon: "success",
							title: "Successfully added",
							timer: 1000,
						})
					})
					.catch((e) => {
						setUsernameValidator(
							e?.response?.data?.error || "Something went wrong"
						)
					})
					.finally(() => {
						setIsSending(false)
					})
			} else {
				setUsernameValidator("Username can't be empty")
			}
		}
	}
	return (
		<Modal
			show={showAddContact}
			onHide={() => {
				setShowAddContact(false)
			}}
		>
			<Form noValidate onSubmit={onSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new contact</Modal.Title>
				</Modal.Header>
				<Modal.Body className="py-0">
					<Row
						className="pt-2"
						data-step={1}
						data-title="Create a New Group"
					>
						<Col sm={12}>
							<Form.Group className="mb-3">
								<label>Username</label>
								<Form.Control
									type="text"
									className="form-control form-control-md"
									placeholder="Type username here"
									value={username}
									disabled={isSending}
									onChange={({ target: { value } }) => {
										setUsernameValidator("")
										setUsername(value)
									}}
									isInvalid={usernameValidator?.length}
								/>
								<Form.Control.Feedback type="invalid">
									{usernameValidator}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="outline-secondary"
						className="me-auto"
						onClick={() => setShowAddContact(false)}
					>
						Cancel
					</Button>
					<Button type="submit" variant="primary">
						Add
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddContact
