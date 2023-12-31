import {
	faCog,
	faEllipsisVertical,
	faRightFromBracket,
	faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"
import SideBarDropDownOptions from "./SideBarDropDownOptions"

const Sidebar = () => {
	const { loggedIn } = useAuth()
	const navigate = useNavigate()
	const pathname = useLocation().pathname
	return loggedIn ? (
		<aside className="sidebar">
			{/* Tab Content Start */}
			<div className="tab-content">
				{/* Chat Tab Content Start */}
				<div
					className={`tab-pane ${
						pathname === "/" || pathname.indexOf("chat") !== -1
							? "active"
							: ""
					}`}
				>
					<div className="d-flex flex-column h-100">
						<div className="hide-scrollbar h-100">
							{/* Chat Header Start */}
							<div className={`sidebar-header sticky-top p-2`}>
								<div className="d-flex justify-content-between align-items-center">
									{/* Chat Tab Pane Title Start */}
									<h5 className="font-weight-semibold mb-0">
										Chats
									</h5>
									{/* Chat Tab Pane Title End */}
									<SideBarDropDownOptions />
								</div>
								{/* Sidebar Header Start */}
								<div className="sidebar-sub-header">
									{/* Sidebar Header Dropdown Start */}
									<Dropdown className="nav-link px-1 me-2">
										<Dropdown.Toggle
											variant="outline-mute"
											className="text-dark border border-dark"
										>
											All Chats
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item>
												Select
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									{/* Sidebar Header Dropdown End */}
									{/* Sidebar Search Start */}
									<Form className="form-inline">
										<InputGroup className="w-100 bg-transparent">
											<Form.Control
												placeholder="Search"
												className="bg-transparent border border-dark border-end-0 no-shadow-change"
											/>
											<InputGroup.Text className="border border-dark border-start-0 bg-transparent">
												<FontAwesomeIcon
													icon={faSearch}
												/>
											</InputGroup.Text>
										</InputGroup>
									</Form>
									{/* Sidebar Search End */}
								</div>
								{/* Sidebar Header End */}
							</div>
							{/* Chat Header End */}
							{/* Chat Contact List Start */}
							<ul className="contacts-list">
								{/* Chat Item Start */}
								<li
									className="contacts-item friends active"
									onClick={() => navigate("/chat/123456")}
								>
									<Link className="contacts-link">
										<div className="avatar avatar-online">
											<img
												src={require("../assets/media/avatar/2.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name text-truncate">
													Catherine Richardson
												</h6>
												<div className="chat-time">
													Just now
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													I’m sorry, I didn’t catch
													that. Could you please
													repeat?
												</p>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item groups">
									<Link className="contacts-link">
										<div className="avatar bg-success text-light">
											<span>
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
														d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
													/>
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> */}
											</span>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Themeforest Group
												</h6>
												<div className="chat-time">
													<span>10:20 pm</span>
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													<span>Jeny: </span>
													That’s pretty common. I
													heard that a lot of people
													had the same experience.
												</p>
												<div className="d-inline-flex align-items-center ms-1">
													{/* Default :: Inline SVG */}
													<svg
														className="hw-16 text-muted"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
															clipRule="evenodd"
														/>
													</svg>
													{/* Alternate :: External File link */}
													{/* <img class="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/lock-closed.svg" alt=""> */}
												</div>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item friends unread">
									<Link className="contacts-link">
										<div className="avatar avatar-offline bg-info text-light">
											<span>EW</span>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Eva Walker
												</h6>
												<div className="chat-time">
													09:36 am
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													You’re kidding! I drive a
													motorcycle as well. What
													type of bike do you have?
												</p>
												<div className="badge badge-rounded badge-primary ms-1">
													2
												</div>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item friends">
									<Link className="contacts-link">
										<div className="avatar avatar-busy">
											<img
												src={require("../assets/media/avatar/3.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Christopher Garcia
												</h6>
												<div className="chat-time">
													<span>Yesterday</span>
												</div>
											</div>
											<div className="contacts-texts">
												{/* Default :: Inline SVG */}
												<svg
													className="hw-20 text-muted"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
														clipRule="evenodd"
													/>
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable text-muted" src="./../../assets/media/heroicons/solid/photograph.svg" alt=""> */}
												<p className="text-truncate">
													Photo
												</p>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item unread">
									<Link className="contacts-link">
										<div className="avatar avatar-online">
											<img
												src={require("../assets/media/avatar/4.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Christina Turner
												</h6>
												<div className="chat-time">
													<span>31/05/20</span>
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													I’m working hard in Maths,
													Physics and Chemistry. I
													have planning to appear in
													I.I.T. after XII.
												</p>
												<div className="badge badge-rounded badge-primary ms-1">
													10
												</div>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item friends">
									<Link className="contacts-link">
										<div className="avatar avatar-offline">
											<img
												src={require("../assets/media/avatar/5.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Tammy Martinez
												</h6>
												<div className="chat-time">
													<span>24/04/20</span>
												</div>
											</div>
											<div className="contacts-texts">
												{/* Default :: Inline SVG */}
												<svg
													className="hw-20 text-muted"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
														clipRule="evenodd"
													/>
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable text-muted" src="./../../assets/media/heroicons/solid/document-report.svg" alt=""> */}
												<p className="text-truncate">
													project_guidelines.docs
												</p>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item friends">
									<Link className="contacts-link">
										<div className="avatar avatar-online">
											<img
												src={require("../assets/media/avatar/6.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Bonnie Torres
												</h6>
												<div className="chat-time">
													<span>20/04/20</span>
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													Catch you later! Bye-bye!
												</p>
												<div className="d-inline-flex align-items-center ms-1">
													{/* Default :: Inline SVG */}
													<svg
														className="hw-16 text-muted"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
													{/* Alternate :: External File link */}
													{/* <img class="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/volume-off.svg" alt=""> */}
												</div>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item friends">
									<Link className="contacts-link">
										<div className="avatar avatar-offline">
											<img
												src={require("../assets/media/avatar/7.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Jacqueline James
												</h6>
												<div className="chat-time">
													<span>15/02/20</span>
												</div>
											</div>
											<div className="contacts-texts">
												{/* Default :: Inline SVG */}
												<svg
													className="hw-16 text-muted"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
													<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/phone-incoming.svg" alt=""> */}
												<p className="text-truncate">
													Missed call
												</p>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
								{/* Chat Item Start */}
								<li className="contacts-item archived">
									<Link className="contacts-link">
										<div className="avatar avatar-away">
											<img
												src={require("../assets/media/avatar/8.png")}
												alt=""
											/>
										</div>
										<div className="contacts-content">
											<div className="contacts-info">
												<h6 className="chat-name">
													Annie Richardson
												</h6>
												<div className="chat-time">
													<span>26/12/19</span>
												</div>
											</div>
											<div className="contacts-texts">
												<p className="text-truncate">
													I think I have everything I
													need, thank you!
												</p>
											</div>
										</div>
									</Link>
								</li>
								{/* Chat Item End */}
							</ul>
							{/* Chat Contact List End */}
						</div>
					</div>
				</div>
				{/* Chats Tab Content End */}
				{/* Friends Tab Content Start */}
				<div
					className={`tab-pane ${
						pathname.indexOf("contacts") !== -1 ? "active" : ""
					}`}
				>
					<div className="d-flex flex-column h-100">
						<div className="hide-scrollbar" id="friendsList">
							{/* Chat Header Start */}
							<div className="sidebar-header sticky-top p-2">
								<div className="d-flex justify-content-between align-items-center">
									{/* Chat Tab Pane Title Start */}
									<h5 className="font-weight-semibold mb-0">
										Friends
									</h5>
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
												<FontAwesomeIcon
													icon={faSearch}
												/>
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
				</div>
				{/* Friends Tab Content End */}
				{/* Profile Tab Content Start */}
				<div
					className={`tab-pane ${
						pathname.indexOf("profile") !== -1 ? "active" : ""
					}`}
				>
					<div className="d-flex flex-column h-100">
						<div className="hide-scrollbar">
							{/* Sidebar Header Start */}
							<div className="sidebar-header sticky-top p-2 mb-3">
								<div className="d-flex justify-content-between align-items-center">
									<h5 className="font-weight-semibold">
										Profile
									</h5>
									<SideBarDropDownOptions />
								</div>
								<p className="text-muted mb-0">
									Personal Information &amp; Settings
								</p>
							</div>
							{/* Sidebar Header end */}
							{/* Sidebar Content Start */}
							<div className="container-xl">
								<div className="row">
									<div className="col">
										{/* Card Start */}
										<div className="card card-body card-bg-5">
											{/* Card Details Start */}
											<div className="d-flex flex-column align-items-center">
												<div className="avatar avatar-lg mb-3">
													<img
														className="avatar-img"
														src={require("../assets/media/avatar/3.png")}
														alt=""
													/>
												</div>
												<div className="d-flex flex-column align-items-center">
													<h5>
														Catherine Richardson
													</h5>
												</div>
												<div className="d-flex">
													<Button
														variant=""
														className="mx-1 border border-dark"
													>
														<FontAwesomeIcon
															icon={
																faRightFromBracket
															}
														/>
														<span className="ms-1">
															Logout
														</span>
													</Button>
													<Button
														variant=""
														className="border border-dark mx-1 d-xl-none"
													>
														<FontAwesomeIcon
															icon={faCog}
														/>
														<span className="ms-1">
															Settings
														</span>
													</Button>
												</div>
											</div>
											{/* Card Details End */}
											{/* Card Options Start */}
											<div className="card-options">
												<Dropdown className="nav-link px-1 me-2 no-dropdown-after">
													<Dropdown.Toggle
														className="btn-icon btn-minimal btn-sm text-muted border-0 text-muted"
														as={Link}
													>
														<FontAwesomeIcon
															icon={
																faEllipsisVertical
															}
														/>
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item>
															Change Profile
															picture
														</Dropdown.Item>
														<Dropdown.Item>
															Change Number
														</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
											{/* Card Options End */}
										</div>
										{/* Card End */}
										{/* Card Start */}
										<div className="card mt-3">
											{/* List Group Start */}
											<ul className="list-group list-group-flush">
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Local Time
															</p>
															<p className="mb-0">
																10:25 PM
															</p>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/heroicons/outline/clock.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Birthdate
															</p>
															<p className="mb-0">
																20/11/1992
															</p>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/heroicons/outline/calendar.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Phone
															</p>
															<p className="mb-0">
																+01-222-364522
															</p>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Email
															</p>
															<p className="mb-0">
																catherine.richardson@gmail.com
															</p>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/heroicons/outline/mail.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Website
															</p>
															<p className="mb-0">
																www.catherichardson.com
															</p>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/heroicons/outline/globe.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item pt-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Address
															</p>
															<p className="mb-0">
																1134 Ridder Park
																Road, San
																Fransisco, CA
																94851
															</p>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/heroicons/outline/home.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
											</ul>
											{/* List Group End */}
										</div>
										{/* Card End */}
										{/* Card Start */}
										<div className="card my-3">
											{/* List Group Start */}
											<ul className="list-group list-group-flush">
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Facebook
															</p>
															<Link className="font-size-sm font-weight-medium">
																@cathe.richardson
															</Link>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/icons/facebook.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Twitter
															</p>
															<Link className="font-size-sm font-weight-medium">
																@cathe.richardson
															</Link>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/icons/twitter.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Instagram
															</p>
															<Link className="font-size-sm font-weight-medium">
																@cathe.richardson
															</Link>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<rect
																x={2}
																y={2}
																width={20}
																height={20}
																rx={5}
																ry={5}
															/>
															<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
															<line
																x1="17.5"
																y1="6.5"
																x2="17.51"
																y2="6.5"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/icons/instagram.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<li className="list-group-item py-2">
													<div className="media align-items-center">
														<div className="media-body">
															<p className="small text-muted mb-0">
																Linkedin
															</p>
															<Link className="font-size-sm font-weight-medium">
																@cathe.richardson
															</Link>
														</div>
														{/* Default :: Inline SVG */}
														<svg
															className="text-muted hw-20 ms-1"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
															<rect
																x={2}
																y={9}
																width={4}
																height={12}
															/>
															<circle
																cx={4}
																cy={4}
																r={2}
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/icons/linkedin.svg" alt=""> */}
													</div>
												</li>
												{/* List Group Item End */}
											</ul>
											{/* List Group End */}
										</div>
										{/* Card End */}
									</div>
								</div>
							</div>
							{/* Sidebar Content End */}
						</div>
					</div>
				</div>
				{/* Profile Tab Content End */}
			</div>
			{/* Tab Content End */}
		</aside>
	) : (
		<></>
	)
}

export default Sidebar
