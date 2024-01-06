import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Form, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import SideBarDropDownOptions from "./SideBarDropDownOptions"

const ContactsSidebar = () => {
	return (
		<div className="d-flex flex-column h-100">
			<div className="hide-scrollbar" id="friendsList">
				{/* Chat Header Start */}
				<div className="sidebar-header sticky-top p-2">
					<div className="d-flex justify-content-between align-items-center">
						{/* Chat Tab Pane Title Start */}
						<h5 className="font-weight-semibold mb-0">Contacts</h5>
						{/* Chat Tab Pane Title End */}
						<SideBarDropDownOptions />
					</div>
					{/* Sidebar Header Start */}
					<div className="sidebar-sub-header">
						{/* Sidebar Search Start */}
						<Form className="w-100">
							<InputGroup className="w-100 bg-transparent">
								<Form.Control
									placeholder="Search"
									className="bg-transparent border border-dark border-end-0 no-shadow-change"
								/>
								<InputGroup.Text className="border border-dark border-start-0 bg-transparent">
									<FontAwesomeIcon icon={faSearch} />
								</InputGroup.Text>
							</InputGroup>
						</Form>
						{/* Sidebar Search End */}
					</div>
					{/* Sidebar Header End */}
				</div>
				{/* Chat Header End */}
				{/* Friends Contact List Start */}
				<ul
					className="contacts-list"
					id="friendsTab"
					data-friends-list=""
				>
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							A
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item active">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Albert K. Johansen
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										San Fransisco, CA
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Alice R. Botello
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Brentwood, NY
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							b
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Brittany K. Williams
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Scranton, PA
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							C
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Christopher Garcia
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Riverside, CA
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Casey Mcbride
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Zephyr, NC
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							G
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Gemma Mendez
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Frederick, MD
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							k
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Katelyn Valdez
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Jackson, TN
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Katherine Schneider
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Saginaw, MI
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							m
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Maizie Edwards
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Greensboro, NC
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
					{/* Item Series Start */}
					<li>
						<small className="font-weight-medium text-uppercase text-muted">
							s
						</small>
					</li>
					{/* Item Series End */}
					{/* friends Item Start */}
					<li className="contacts-item">
						<Link className="contacts-link">
							<div className="avatar">
								<img
									src={require("../assets/media/avatar/3.png")}
									alt=""
								/>
							</div>
							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										Susan K. Taylor
									</h6>
								</div>
								<div className="contacts-texts">
									{/* Default :: Inline SVG */}
									<svg
										className="hw-16 text-muted me-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{/* Alternate :: External File link */}
									{/* <img class="injectable hw-16 text-muted me-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> */}
									<p className="text-muted mb-0">
										Centerville, VA
									</p>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item End */}
				</ul>
				{/* Friends Contact List End */}
			</div>
		</div>
	)
}

export default ContactsSidebar
