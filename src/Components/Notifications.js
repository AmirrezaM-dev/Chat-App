import { Col, Modal, Row, Button, ListGroup } from "react-bootstrap"
import { useMain } from "./useMain"
import { Link } from "react-router-dom"
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
									<div className="btn btn-primary btn-icon rounded-circle text-light me-2">
										{/* Default :: Inline SVG */}
										<svg
											className="hw-24"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
											/>
										</svg>
										{/* Alternate :: External File link */}
										{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/user-add.svg" alt=""> */}
									</div>
									<div className="media-body">
										<h6>
											<Link>Catherine richardson</Link>
											send you a friend request
										</h6>
										<p className="text-muted mb-0">
											5 mins ago
										</p>
									</div>
								</div>
								<div className="d-flex justify-content-center mt-2">
									<button
										type="button"
										className="btn btn-outline-danger mx-1"
									>
										Reject
									</button>
									<button
										type="button"
										className="btn btn-primary mx-1"
									>
										Accept
									</button>
								</div>
							</ListGroup.Item>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<ListGroup.Item>
								<div className="media">
									<div className="btn btn-primary btn-icon rounded-circle text-light me-2">
										{/* Default :: Inline SVG */}
										<svg
											className="hw-24"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										{/* Alternate :: External File link */}
										{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/check-circle.svg" alt=""> */}
									</div>
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
							{/* List Group Item Start */}
							<ListGroup.Item>
								<div className="media">
									<div className="btn btn-primary btn-icon rounded-circle text-light me-2">
										{/* Default :: Inline SVG */}
										<svg
											className="hw-24"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										{/* Alternate :: External File link */}
										{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> */}
									</div>
									<div className="media-body">
										<h6>
											<Link>Eva Walker</Link> updated
											profile picture
										</h6>
										<p className="text-muted mb-0">
											5 mins ago
										</p>
									</div>
								</div>
							</ListGroup.Item>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<ListGroup.Item>
								<div className="media">
									<div className="btn btn-primary btn-icon rounded-circle text-light me-2">
										{/* Default :: Inline SVG */}
										<svg
											className="hw-24"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										{/* Alternate :: External File link */}
										{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/check-circle.svg" alt=""> */}
									</div>
									<div className="media-body">
										<h6>
											<Link>Bonnie Torres</Link> accepted
											your friend request
										</h6>
										<p className="text-muted mb-0">
											5 mins ago
										</p>
									</div>
								</div>
							</ListGroup.Item>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<ListGroup.Item>
								<div className="media">
									<div className="btn btn-primary btn-icon rounded-circle text-light me-2">
										{/* Default :: Inline SVG */}
										<svg
											className="hw-24"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										{/* Alternate :: External File link */}
										{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> */}
									</div>
									<div className="media-body">
										<h6>
											<Link>Christopher Garcia</Link>
											updated profile picture
										</h6>
										<p className="text-muted mb-0">
											5 mins ago
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
