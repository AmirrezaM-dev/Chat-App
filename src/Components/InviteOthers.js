import { Col, Modal, Row, Form, Button } from "react-bootstrap"
import { useMain } from "./useMain"
const InviteOthers = () => {
	const { showInviteOthers, setShowInviteOthers } = useMain()
	return (
		<Modal
			show={showInviteOthers}
			onHide={() => {
				setShowInviteOthers(false)
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Invite Others</Modal.Title>
			</Modal.Header>
			<Modal.Body className="py-0">
				<Form>
					<Row>
						<Col sm={12}>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="name@example.com"
								/>
							</Form.Group>
						</Col>
						<Col sm={12}>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Example textarea</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="me-auto"
					onClick={() => setShowInviteOthers(false)}
				>
					Cancel
				</Button>
				<Button variant="primary" className="ms-auto">
					Send Invitation
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default InviteOthers
