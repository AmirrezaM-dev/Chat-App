import { Col, Modal, Row, Button, ListGroup } from "react-bootstrap"
import { useMain } from "./useMain"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons"
const Notifications = () => {
	const { showNotifications, setShowNotifications } = useMain()
	return (
		<Modal
			show={showNotifications}
			onHide={() => {
				setShowNotifications(false)
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Notifications</Modal.Title>
			</Modal.Header>
			<Modal.Body className="py-0">
				<Row>
					<Col sm={12}>
						{/* List Group Start */}
						<ListGroup variant="flush" className="py-2">
							{/* List Group Item Start */}
							<ListGroup.Item>
								<div className="media">
									<Button
										disabled
										className="btn-icon rounded-circle text-light me-2 opacity-100"
									>
										<FontAwesomeIcon
											className="hw-24"
											icon={faUserPlus}
										/>
									</Button>
									<div className="media-body">
										<h6>
											<Link>Catherine richardson</Link>
											&nbsp;send you a friend request
										</h6>
										<p className="text-muted mb-0">
											5 mins ago
										</p>
									</div>
								</div>
								<div className="d-flex justify-content-center mt-2">
									<Button
										variant="outline-danger"
										className="mx-1"
									>
										Reject
									</Button>
									<Button className="mx-1">Accept</Button>
								</div>
							</ListGroup.Item>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<ListGroup.Item>
								<div className="media">
									<Button
										disabled
										className="btn-icon rounded-circle text-light me-2 opacity-100"
									>
										<FontAwesomeIcon icon={faUserCheck} />
									</Button>
									<div className="media-body">
										<h6>
											<Link>Katelyn Valdez</Link> accepted
											your friend request
										</h6>
										<p className="text-muted mb-0">
											25 mins ago
										</p>
									</div>
								</div>
							</ListGroup.Item>
							{/* List Group Item End */}
						</ListGroup>
						{/* List Group End */}
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="mx-auto"
					onClick={() => setShowNotifications(false)}
				>
					Clear All
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default Notifications
