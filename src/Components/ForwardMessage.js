import { Col, InputGroup, Modal, Row, Form, ListGroup } from "react-bootstrap"
import { useMain } from "./useMain"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"

const ForwardMessage = () => {
	const { showNewChat, setShowNewChat } = useMain()
	const navigate = useNavigate()
	return (
		<Modal
			show={showNewChat}
			onHide={() => {
				setShowNewChat(false)
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>New Chat</Modal.Title>
			</Modal.Header>
			<Modal.Body className="py-0">
				<Row>
					<Col sm={12}>
						{/* Search Start */}
						<Form className="form-inline w-100 p-2">
							<InputGroup className="w-100 bg-light">
								<Form.Control
									placeholder="Search"
									className="bg-light border border-end-0 no-shadow-change"
								/>
								<InputGroup.Text className="border border-start-0">
									<FontAwesomeIcon icon={faSearch} />
								</InputGroup.Text>
							</InputGroup>
						</Form>
						{/* Search End */}
					</Col>
					<Col sm={12}>
						{/* List Group Start */}
						<ListGroup variant="flush">
							<ListGroup.Item
								action
								onClick={() => {
									navigate("/chat/123456")
									setShowNewChat(false)
								}}
							>
								<div className="media">
									<div className="avatar avatar-online me-2">
										<img
											src={require("../assets/media/avatar/1.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Firstname Lastname
											</Link>
										</h6>
										<p className="text-muted mb-0">
											Online
										</p>
									</div>
								</div>
							</ListGroup.Item>
							<ListGroup.Item
								action
								onClick={() => {
									navigate("/chat/123456")
									setShowNewChat(false)
								}}
							>
								<div className="media">
									<div className="avatar avatar-away me-2">
										<img
											src={require("../assets/media/avatar/2.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Firstname Lastname
											</Link>
										</h6>
										<p className="text-muted mb-0">
											Online
										</p>
									</div>
								</div>
							</ListGroup.Item>
							<ListGroup.Item
								action
								onClick={() => {
									navigate("/chat/123456")
									setShowNewChat(false)
								}}
							>
								<div className="media">
									<div className="avatar avatar-offline me-2">
										<img
											src={require("../assets/media/avatar/3.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Firstname Lastname
											</Link>
										</h6>
										<p className="text-muted mb-0">
											Online
										</p>
									</div>
								</div>
							</ListGroup.Item>
							<ListGroup.Item
								action
								onClick={() => {
									navigate("/chat/123456")
									setShowNewChat(false)
								}}
							>
								<div className="media">
									<div className="avatar avatar-busy me-2">
										<img
											src={require("../assets/media/avatar/4.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Firstname Lastname
											</Link>
										</h6>
										<p className="text-muted mb-0">
											Online
										</p>
									</div>
								</div>
							</ListGroup.Item>
						</ListGroup>
						{/* List Group End */}
					</Col>
				</Row>
			</Modal.Body>
		</Modal>
	)
}

export default ForwardMessage
