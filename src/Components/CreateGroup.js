import { Col, Modal, Row, Form, Button, InputGroup } from "react-bootstrap"
import { useMain } from "./useMain"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const CreateGroup = () => {
	const { showCreateGroup, setShowCreateGroup } = useMain()
	return (
		<Modal
			show={showCreateGroup}
			onHide={() => {
				// setShowCreateGroup(false)
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Create a New Group</Modal.Title>
				{/* <Modal.Title>Add Group Members</Modal.Title>
				<Modal.Title>Finished</Modal.Title> */}
			</Modal.Header>
			<Modal.Body className="py-0">
				<Row
					className="pt-2"
					data-step={1}
					data-title="Create a New Group"
				>
					<Col sm={12}>
						<div className="form-group">
							<label htmlFor="groupName">Group name</label>
							<input
								type="text"
								className="form-control form-control-md"
								id="groupName"
								placeholder="Type group name here"
							/>
						</div>
					</Col>
					<Col sm={12}>
						<div className="form-group">
							<label>Choose profile picture</label>
							<div className="custom-file">
								<input
									type="file"
									className="custom-file-input"
									id="profilePictureInput"
									accept="image/*"
								/>
								<label
									className="custom-file-label"
									htmlFor="profilePictureInput"
								>
									Choose file
								</label>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="row">
							<Col sm={12}>
								<div className="form-group mb-0">
									<label>Group privacy</label>
								</div>
							</Col>
							<div className="col">
								<div className="form-group rounded p-2 border">
									<div className="custom-control custom-radio">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											defaultValue="option1"
											defaultChecked=""
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1"
										>
											Public group
										</label>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-group rounded p-2 border">
									<div className="custom-control custom-radio">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios2"
											defaultValue="option2"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios2"
										>
											Private group
										</label>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row
					className="d-block pt-2"
					data-step={2}
					data-title="Add Group Members"
				>
					<Col sm={12} className="px-0">
						{/* Search Start */}
						<Form className="form-inline w-100 px-2 pb-2 border-bottom">
							<InputGroup className="bg-light w-100">
								<Form.Control
									type="text"
									className="form-control form-control-md border-end-0 bg-transparent pe-0"
									placeholder="Search"
								/>
								<InputGroup.Text className="bg-transparent border-start-0">
									<FontAwesomeIcon icon={faSearch} />
								</InputGroup.Text>
							</InputGroup>
						</Form>
						{/* Search End */}
					</Col>
					<Col sm={12} className="px-0">
						{/* List Group Start */}
						<ul className="list-group list-group-flush">
							{/* List Group Item Start */}
							<li className="list-group-item">
								<div className="media">
									<div className="avatar /*avatar-online*/ me-2">
										<img
											src={require("../assets/media/avatar/1.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Catherine Richardson
											</Link>
										</h6>
										{/* <p className="text-muted mb-0">
											Online
										</p> */}
									</div>
									<div className="media-options">
										<div className="custom-control custom-checkbox">
											<input
												className="custom-control-input"
												type="checkbox"
												defaultValue=""
												id="chx-user-1"
												defaultChecked=""
											/>
											<label
												className="custom-control-label"
												htmlFor="chx-user-1"
											/>
										</div>
									</div>
								</div>
								<label
									className="media-label"
									htmlFor="chx-user-1"
								/>
							</li>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<li className="list-group-item">
								<div className="media">
									<div className="avatar /*avatar-online*/ me-2">
										<img
											src={require("../assets/media/avatar/2.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Katherine Schneider
											</Link>
										</h6>
										{/* <p className="text-muted mb-0">
											Online
										</p> */}
									</div>
									<div className="media-options">
										<div className="custom-control custom-checkbox">
											<input
												className="custom-control-input"
												type="checkbox"
												defaultValue=""
												id="chx-user-2"
												defaultChecked=""
											/>
											<label
												className="custom-control-label"
												htmlFor="chx-user-2"
											/>
										</div>
									</div>
								</div>
								<label
									className="media-label"
									htmlFor="chx-user-2"
								/>
							</li>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<li className="list-group-item">
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
												Brittany K. Williams
											</Link>
										</h6>
										<p className="text-muted mb-0">
											Offline
										</p>
									</div>
									<div className="media-options">
										<div className="custom-control custom-checkbox">
											<input
												className="custom-control-input"
												type="checkbox"
												defaultValue=""
												id="chx-user-3"
											/>
											<label
												className="custom-control-label"
												htmlFor="chx-user-3"
											/>
										</div>
									</div>
								</div>
								<label
									className="media-label"
									htmlFor="chx-user-3"
								/>
							</li>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<li className="list-group-item">
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
												Christina Turner
											</Link>
										</h6>
										<p className="text-muted mb-0">Busy</p>
									</div>
									<div className="media-options">
										<div className="custom-control custom-checkbox">
											<input
												className="custom-control-input"
												type="checkbox"
												defaultValue=""
												id="chx-user-4"
												defaultChecked=""
											/>
											<label
												className="custom-control-label"
												htmlFor="chx-user-4"
											/>
										</div>
									</div>
								</div>
								<label
									className="media-label"
									htmlFor="chx-user-4"
								/>
							</li>
							{/* List Group Item End */}
							{/* List Group Item Start */}
							<li className="list-group-item">
								<div className="media">
									<div className="avatar avatar-away me-2">
										<img
											src={require("../assets/media/avatar/5.png")}
											alt=""
										/>
									</div>
									<div className="media-body">
										<h6 className="text-truncate">
											<Link className="text-reset">
												Annie Richardson
											</Link>
										</h6>
										<p className="text-muted mb-0">Away</p>
									</div>
									<div className="media-options">
										<div className="custom-control custom-checkbox">
											<input
												className="custom-control-input"
												type="checkbox"
												defaultValue=""
												id="chx-user-5"
											/>
											<label
												className="custom-control-label"
												htmlFor="chx-user-5"
											/>
										</div>
									</div>
								</div>
								<label
									className="media-label"
									htmlFor="chx-user-5"
								/>
							</li>
							{/* List Group Item End */}
						</ul>
						{/* List Group End */}
					</Col>
				</Row>
				<Row
					className="pt-2 h-100 d-block"
					data-step={3}
					data-title="Finished"
				>
					<Col sm={12}>
						<div className="d-flex justify-content-center align-items-center flex-column h-100">
							<Button
								disabled
								variant="success"
								className="btn-icon rounded-circle text-light mb-3 opacity-100"
							>
								<FontAwesomeIcon icon={faCheck} />
							</Button>
							<h6>Group Created Successfully</h6>
							<p className="text-muted text-center">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dolores cumque laborum fugiat
								vero pariatur provident!
							</p>
						</div>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					className="me-auto"
					onClick={() => setShowCreateGroup(false)}
				>
					Cancel
				</Button>
				<Button variant="secondary" className="ms-auto" disabled>
					Previous
				</Button>
				<Button variant="primary">Next</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateGroup
