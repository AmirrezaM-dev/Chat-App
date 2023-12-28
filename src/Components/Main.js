import { Button, Collapse, Dropdown } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCopy,
	faEllipsis,
	faEllipsisVertical,
	faPencil,
	faReply,
	faSearch,
	faShare,
	faX,
	faInfoCircle,
	faArrowLeft,
	faPaperclip,
} from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { useMain } from "./useMain"

const Main = () => {
	const { side, id } = useParams()
	const [showSearch, setShowSearch] = useState(false)
	const { setShowNewChat } = useMain()

	return (
		<main className={`main ${id ? "main-visible" : ""}`}>
			{/* Chats Page Start */}
			{!side || side === "chat" ? (
				<div className="chats d-flex">
					{id ? (
						<>
							<div className="chat-body">
								{/* Chat Header Start*/}
								<div className="chat-header">
									{/* Chat Back Button (Visible only in Small Devices) */}
									<Link
										to="/chat"
										className="text-muted d-xl-none me-2"
									>
										<FontAwesomeIcon icon={faArrowLeft} />
									</Link>
									{/* Chat participant's Name */}
									<div className="media chat-name align-items-center text-truncate">
										<div className="avatar avatar-online d-none d-sm-inline-block me-3">
											<img
												src={require("../assets/media/avatar/2.png")}
												alt=""
											/>
										</div>
										<div className="media-body align-self-center ">
											<h6 className="text-truncate mb-0">
												Catherine Richardson
											</h6>
											<small className="text-muted">
												Online
											</small>
										</div>
									</div>
									{/* Chat Options */}
									<ul className="nav flex-nowrap">
										<li
											className="nav-item list-inline-item d-none d-sm-block me-1"
											onClick={() =>
												setShowSearch(
													(showSearch) => !showSearch
												)
											}
										>
											<Link
												className="nav-link text-muted px-1"
												data-toggle="collapse"
												data-target="#searchCollapse"
												aria-expanded="false"
											>
												<FontAwesomeIcon
													icon={faSearch}
												/>
											</Link>
										</li>

										<li className="nav-item list-inline-item d-none d-sm-block me-0">
											<Dropdown className="nav-link px-1">
												<Dropdown.Toggle
													as={Link}
													className="dropdown"
												>
													<FontAwesomeIcon
														icon={
															faEllipsisVertical
														}
													/>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faInfoCircle}
															className="me-2"
														/>
														Select
													</Dropdown.Item>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faReply}
															className="me-2"
														/>
														Reply
													</Dropdown.Item>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faShare}
															className="me-2"
														/>
														Forward
													</Dropdown.Item>
													<Dropdown.Item className="text-info">
														<FontAwesomeIcon
															icon={faPencil}
															className="me-2"
														/>
														Edit
													</Dropdown.Item>
													<Dropdown.Item className="text-primary">
														<FontAwesomeIcon
															icon={faCopy}
															className="me-2"
														/>
														Copy
													</Dropdown.Item>
													<Dropdown.Item className="text-danger">
														<FontAwesomeIcon
															icon={faX}
															className="me-2"
														/>
														Delete
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</li>
										<li className="nav-item list-inline-item d-sm-none me-0"></li>
									</ul>
								</div>
								{/* Chat Header End*/}
								{/* Search Start */}
								<Collapse
									in={showSearch}
									className="border-bottom px-3"
								>
									<div className="container-xl py-2 px-0 px-md-3">
										<div className="input-group bg-light ">
											<input
												type="text"
												className="form-control form-control-md border-right-0 transparent-bg pe-0"
												placeholder="Search"
											/>
											<div className="input-group-append">
												<span className="input-group-text transparent-bg border-left-0">
													{/* Default :: Inline SVG */}
													<svg
														className="hw-20 text-muted"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
														/>
													</svg>
													{/* Alternate :: External File link */}
													{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt="Search icon"> */}
												</span>
											</div>
										</div>
									</div>
								</Collapse>
								{/* Search End */}
								{/* Chat Content Start*/}
								<div
									className="chat-content p-2"
									id="messageBody"
								>
									<div className="container">
										{/* Message Day Start */}
										<div className="message-day">
											<div
												className="message-divider sticky-top pb-2"
												data-label="Yesterday"
											>
												&nbsp;
											</div>
											{/* Received Message Start */}
											<div className="message">
												<div className="message-wrapper">
													<div className="message-content">
														<span>
															I have to give a
															presentation on
															global warming on
															Friday, and I am so
															nervous.
														</span>
													</div>
												</div>
												<div className="message-options">
													<div className="avatar avatar-sm">
														<img
															alt=""
															src={require("../assets/media/avatar/6.png")}
														/>
													</div>
													<span className="message-date">
														9:12am
													</span>
													<span className="message-status">
														Seen
													</span>
													<span className="message-status">
														Edited
													</span>
													<Dropdown>
														<Dropdown.Toggle
															as={Link}
															className="dropdown"
														>
															<FontAwesomeIcon
																icon={
																	faEllipsis
																}
															/>
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faSquareCheck
																	}
																	className="me-2"
																/>
																Select
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faReply
																	}
																	className="me-2"
																/>
																Reply
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faShare
																	}
																	className="me-2"
																/>
																Forward
															</Dropdown.Item>
															<Dropdown.Item className="text-info">
																<FontAwesomeIcon
																	icon={
																		faPencil
																	}
																	className="me-2"
																/>
																Edit
															</Dropdown.Item>
															<Dropdown.Item className="text-primary">
																<FontAwesomeIcon
																	icon={
																		faCopy
																	}
																	className="me-2"
																/>
																Copy
															</Dropdown.Item>
															<Dropdown.Item className="text-danger">
																<FontAwesomeIcon
																	icon={faX}
																	className="me-2"
																/>
																Delete
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											{/* Received Message End */}
											{/* Self Message Start */}
											<div className="message self">
												<div className="message-wrapper">
													<div className="message-content">
														<span>
															First of all, you
															need to understand
															the subject matter
															thoroughly. You need
															to know what is
															global warming, what
															causes global
															warming, and what
															people should do to
															abate the effects of
															global warming.
														</span>
													</div>
												</div>
												<div className="message-options">
													<div className="avatar avatar-sm">
														<img
															alt=""
															src={require("../assets/media/avatar/6.png")}
														/>
													</div>
													<span className="message-date">
														9:12am
													</span>
													<span className="message-status">
														Seen
													</span>
													<span className="message-status">
														Edited
													</span>
													<Dropdown>
														<Dropdown.Toggle
															as={Link}
															className="dropdown"
														>
															<FontAwesomeIcon
																icon={
																	faEllipsis
																}
															/>
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faSquareCheck
																	}
																	className="me-2"
																/>
																Select
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faReply
																	}
																	className="me-2"
																/>
																Reply
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faShare
																	}
																	className="me-2"
																/>
																Forward
															</Dropdown.Item>
															<Dropdown.Item className="text-info">
																<FontAwesomeIcon
																	icon={
																		faPencil
																	}
																	className="me-2"
																/>
																Edit
															</Dropdown.Item>
															<Dropdown.Item className="text-primary">
																<FontAwesomeIcon
																	icon={
																		faCopy
																	}
																	className="me-2"
																/>
																Copy
															</Dropdown.Item>
															<Dropdown.Item className="text-danger">
																<FontAwesomeIcon
																	icon={faX}
																	className="me-2"
																/>
																Delete
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											{/* Self Message End */}
											{/* Message Start */}
											<div className="message">
												<div className="message-wrapper">
													<div className="message-content">
														<div className="document">
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
																		strokeWidth={
																			2
																		}
																		d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
																	/>
																</svg>
																{/* Alternate :: External File link */}
																{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/document.svg" alt=""> */}
															</div>
															<div className="document-body">
																<h6>
																	<Link
																		className="text-reset"
																		title="global-warming-data-2020.xlxs"
																	>
																		global-warming-data-2020.xlxs
																	</Link>
																</h6>
																<ul className="list-inline small mb-0">
																	<li className="list-inline-item">
																		<span className="text-muted">
																			79.2
																			KB
																		</span>
																	</li>
																	<li className="list-inline-item">
																		<span className="text-muted text-uppercase">
																			xlxs
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div className="message-options">
													<div className="avatar avatar-sm">
														<img
															alt=""
															src={require("../assets/media/avatar/6.png")}
														/>
													</div>
													<span className="message-date">
														9:12am
													</span>
													<Dropdown>
														<Dropdown.Toggle
															as={Link}
															className="dropdown"
														>
															<FontAwesomeIcon
																icon={
																	faEllipsis
																}
															/>
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faSquareCheck
																	}
																	className="me-2"
																/>
																Select
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faReply
																	}
																	className="me-2"
																/>
																Reply
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faShare
																	}
																	className="me-2"
																/>
																Forward
															</Dropdown.Item>
															<Dropdown.Item className="text-info">
																<FontAwesomeIcon
																	icon={
																		faPencil
																	}
																	className="me-2"
																/>
																Edit
															</Dropdown.Item>
															<Dropdown.Item className="text-primary">
																<FontAwesomeIcon
																	icon={
																		faCopy
																	}
																	className="me-2"
																/>
																Copy
															</Dropdown.Item>
															<Dropdown.Item className="text-danger">
																<FontAwesomeIcon
																	icon={faX}
																	className="me-2"
																/>
																Delete
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											{/* Message End */}
										</div>
										{/* Message Day End */}
										{/* Message Day Start */}
										<div className="message-day">
											<div
												className="message-divider sticky-top pb-2"
												data-label="Today"
											>
												&nbsp;
											</div>
											{/* Self Message Start */}
											<div className="message self">
												<div className="message-wrapper">
													<div className="message-content">
														<span>
															Good idea! By the
															way, do you have any
															facts to back you
															up? For example,
															change of climate,
															yearly disasters…
														</span>
													</div>
												</div>
												<div className="message-options">
													<div className="avatar avatar-sm">
														<img
															alt=""
															src={require("../assets/media/avatar/6.png")}
														/>
													</div>
													<span className="message-date">
														9:12am
													</span>
													<span className="message-status">
														Edited
													</span>
													<Dropdown>
														<Dropdown.Toggle
															as={Link}
															className="dropdown"
														>
															<FontAwesomeIcon
																icon={
																	faEllipsis
																}
															/>
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faSquareCheck
																	}
																	className="me-2"
																/>
																Select
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faReply
																	}
																	className="me-2"
																/>
																Reply
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faShare
																	}
																	className="me-2"
																/>
																Forward
															</Dropdown.Item>
															<Dropdown.Item className="text-info">
																<FontAwesomeIcon
																	icon={
																		faPencil
																	}
																	className="me-2"
																/>
																Edit
															</Dropdown.Item>
															<Dropdown.Item className="text-primary">
																<FontAwesomeIcon
																	icon={
																		faCopy
																	}
																	className="me-2"
																/>
																Copy
															</Dropdown.Item>
															<Dropdown.Item className="text-danger">
																<FontAwesomeIcon
																	icon={faX}
																	className="me-2"
																/>
																Delete
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											{/* Self Message End */}
											{/* Received Message Start */}
											<div className="message">
												<div className="message-wrapper">
													<div className="message-content">
														<h6>
															I have shared some
															photos, Please have
															a look.
														</h6>
														<div className="form-row">
															<div className="col">
																<Link
																	className="popup-media"
																	href="../../assets/media/shared-photos/01.jpg"
																>
																	<img
																		className="img-fluid rounded"
																		src="../../assets/media/shared-photos/01.jpg"
																		alt=""
																	/>
																</Link>
															</div>
															<div className="col">
																<Link
																	className="popup-media"
																	href="../../assets/media/shared-photos/02.jpg"
																>
																	<img
																		className="img-fluid rounded"
																		src="../../assets/media/shared-photos/02.jpg"
																		alt=""
																	/>
																</Link>
															</div>
															<div className="col">
																<Link
																	className="popup-media"
																	href="../../assets/media/shared-photos/03.jpg"
																>
																	<img
																		className="img-fluid rounded"
																		src="../../assets/media/shared-photos/03.jpg"
																		alt=""
																	/>
																</Link>
															</div>
														</div>
													</div>
												</div>
												<div className="message-options">
													<div className="avatar avatar-sm">
														<img
															alt=""
															src={require("../assets/media/avatar/6.png")}
														/>
													</div>
													<span className="message-date">
														9:12am
													</span>
													<Dropdown>
														<Dropdown.Toggle
															as={Link}
															className="dropdown"
														>
															<FontAwesomeIcon
																icon={
																	faEllipsis
																}
															/>
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faSquareCheck
																	}
																	className="me-2"
																/>
																Select
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faReply
																	}
																	className="me-2"
																/>
																Reply
															</Dropdown.Item>
															<Dropdown.Item>
																<FontAwesomeIcon
																	icon={
																		faShare
																	}
																	className="me-2"
																/>
																Forward
															</Dropdown.Item>
															<Dropdown.Item className="text-info">
																<FontAwesomeIcon
																	icon={
																		faPencil
																	}
																	className="me-2"
																/>
																Edit
															</Dropdown.Item>
															<Dropdown.Item className="text-primary">
																<FontAwesomeIcon
																	icon={
																		faCopy
																	}
																	className="me-2"
																/>
																Copy
															</Dropdown.Item>
															<Dropdown.Item className="text-danger">
																<FontAwesomeIcon
																	icon={faX}
																	className="me-2"
																/>
																Delete
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
											{/* Received Message End */}
										</div>
										{/* Message Day End */}
									</div>
									{/* Scroll to finish */}
									<div
										className="chat-finished"
										id="chat-finished"
									/>
								</div>
								{/* Chat Content End*/}
								{/* Chat Footer Start*/}
								<div className="chat-footer">
									<div className="attachment">
										<Dropdown className="nav-link px-1">
											<Dropdown.Toggle
												as={Link}
												className="dropdown text-secondary"
											>
												<FontAwesomeIcon
													className="m-2 py-1"
													size="2x"
													icon={faPaperclip}
												/>
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item>
													<FontAwesomeIcon
														icon={faInfoCircle}
														className="me-2"
													/>
													Select
												</Dropdown.Item>
												<Dropdown.Item>
													<FontAwesomeIcon
														icon={faReply}
														className="me-2"
													/>
													Reply
												</Dropdown.Item>
												<Dropdown.Item>
													<FontAwesomeIcon
														icon={faShare}
														className="me-2"
													/>
													Forward
												</Dropdown.Item>
												<Dropdown.Item className="text-info">
													<FontAwesomeIcon
														icon={faPencil}
														className="me-2"
													/>
													Edit
												</Dropdown.Item>
												<Dropdown.Item className="text-primary">
													<FontAwesomeIcon
														icon={faCopy}
														className="me-2"
													/>
													Copy
												</Dropdown.Item>
												<Dropdown.Item className="text-danger">
													<FontAwesomeIcon
														icon={faX}
														className="me-2"
													/>
													Delete
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<textarea
										className="form-control"
										rows={1}
										placeholder="Type your message here..."
									/>
									<div
										className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
										role="button"
									>
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
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
										{/* <img src="./../../assets/media/heroicons/outline/arrow-right.svg" alt="" class="injectable"> */}
									</div>
								</div>
								{/* Chat Footer End*/}
							</div>
							<div className="chat-info">
								<div className="d-flex h-100 flex-column">
									{/* Chat Info Header Start */}
									<div className="chat-info-header px-2">
										<div className="container-fluid">
											<ul className="nav justify-content-between align-items-center">
												{/* Sidebar Title Start */}
												<li className="text-center">
													<h5 className="text-truncate mb-0">
														Profile Details
													</h5>
												</li>
												{/* Sidebar Title End */}
												{/* Close Sidebar Start */}
												<li className="nav-item list-inline-item">
													<Link
														className="nav-link text-muted px-0"
														data-chat-info-close=""
													>
														{/* Default :: Inline SVG */}
														<svg
															className="hw-22"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M6 18L18 6M6 6l12 12"
															/>
														</svg>
														{/* Alternate :: External File link */}
														{/* <img class="injectable hw-22" src="./../../assets/media/heroicons/outline/x.svg" alt=""> */}
													</Link>
												</li>
												{/* Close Sidebar End */}
											</ul>
										</div>
									</div>
									{/* Chat Info Header End  */}
									{/* Chat Info Body Start  */}
									<div className="hide-scrollbar flex-fill">
										{/* User Profile Start */}
										<div className="text-center p-3">
											{/* User Profile Picture */}
											<div className="avatar avatar-xl mx-5 mb-3">
												<img
													className="avatar-img"
													src={require("../assets/media/avatar/2.png")}
													alt=""
												/>
											</div>
											{/* User Info */}
											<h5 className="mb-1">
												Catherine Richardson
											</h5>
											<p className="text-muted d-flex align-items-center justify-content-center">
												{/* Default :: Inline SVG */}
												<svg
													className="hw-18 me-1"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable me-1 hw-18" src="./../../assets/media/heroicons/outline/location-marker.svg" alt=""> */}
												<span>San Fransisco, CA</span>
											</p>
											{/* User Quick Options */}
											<div className="d-flex align-items-center justify-content-center">
												<div className="btn btn-outline-default btn-icon rounded-circle mx-1">
													{/* Default :: Inline SVG */}
													<svg
														className="hw-20"
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
													{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/user-add.svg" alt=""> */}
												</div>
												<div className="btn btn-primary btn-icon rounded-circle text-light mx-1">
													{/* Default :: Inline SVG */}
													<svg
														className="hw-20"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
														/>
													</svg>
													{/* Alternate :: External File link */}
													{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/heart.svg" alt=""> */}
												</div>
												<div className="btn btn-danger btn-icon rounded-circle text-light mx-1">
													{/* Default :: Inline SVG */}
													<svg
														className="hw-20"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
														/>
													</svg>
													{/* Alternate :: External File link */}
													{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/ban.svg" alt=""> */}
												</div>
											</div>
										</div>
										{/* User Profile End */}
										{/* User Information Start */}
										<div className="chat-info-group">
											<Link
												className="chat-info-group-header"
												data-toggle="collapse"
												href="#profile-info"
												role="button"
												aria-expanded="true"
												aria-controls="profile-info"
											>
												<h6 className="mb-0">
													User Information
												</h6>
												{/* Default :: Inline SVG */}
												<svg
													className="hw-20 text-muted"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/information-circle.svg" alt=""> */}
											</Link>
											<div
												className="chat-info-group-body collapse show"
												id="profile-info"
											>
												<div className="chat-info-group-content list-item-has-padding">
													{/* List Group Start */}
													<ul className="list-group list-group-flush ">
														{/* List Group Item Start */}
														<li className="list-group-item border-0">
															<p className="small text-muted mb-0">
																Phone
															</p>
															<p className="mb-0">
																+01-222-364522
															</p>
														</li>
														{/* List Group Item End */}
														{/* List Group Item Start */}
														<li className="list-group-item border-0">
															<p className="small text-muted mb-0">
																Email
															</p>
															<p className="mb-0">
																catherine.richardson@gmail.com
															</p>
														</li>
														{/* List Group Item End */}
														{/* List Group Item Start */}
														<li className="list-group-item border-0">
															<p className="small text-muted mb-0">
																Address
															</p>
															<p className="mb-0">
																1134 Ridder Park
																Road, San
																Fransisco, CA
																94851
															</p>
														</li>
														{/* List Group Item End */}
													</ul>
													{/* List Group End */}
												</div>
											</div>
										</div>
										{/* User Information End */}
										{/* Shared Media Start */}
										<div className="chat-info-group">
											<Link
												className="chat-info-group-header"
												data-toggle="collapse"
												href="#shared-media"
												role="button"
												aria-expanded="true"
												aria-controls="shared-media"
											>
												<h6 className="mb-0">
													Last Media
												</h6>
												{/* Default :: Inline SVG */}
												<svg
													className="hw-20 text-muted"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> */}
											</Link>
											<div
												className="chat-info-group-body collapse show"
												id="shared-media"
											>
												<div className="chat-info-group-content">
													{/* Shared Media */}
													<div className="form-row">
														<div className="col-4 col-md-2 col-xl-4">
															<Link>
																<img
																	src="../../assets/media/shared-photos/01.jpg"
																	className="img-fluid rounded border"
																	alt=""
																/>
															</Link>
														</div>
														<div className="col-4 col-md-2 col-xl-4">
															<Link>
																<img
																	src="../../assets/media/shared-photos/02.jpg"
																	className="img-fluid rounded border"
																	alt=""
																/>
															</Link>
														</div>
														<div className="col-4 col-md-2 col-xl-4">
															<Link>
																<img
																	src="../../assets/media/shared-photos/03.jpg"
																	className="img-fluid rounded border"
																	alt=""
																/>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* Shared Media End */}
										{/* Shared Files Start */}
										<div className="chat-info-group">
											<Link
												className="chat-info-group-header"
												data-toggle="collapse"
												href="#shared-files"
												role="button"
												aria-expanded="true"
												aria-controls="shared-files"
											>
												<h6 className="mb-0">
													Documents
												</h6>
												{/* Default :: Inline SVG */}
												<svg
													className="hw-20 text-muted"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
													/>
												</svg>
												{/* Alternate :: External File link */}
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/document.svg" alt=""> */}
											</Link>
											<div
												className="chat-info-group-body collapse show"
												id="shared-files"
											>
												<div className="chat-info-group-content list-item-has-padding">
													{/* List Group Start */}
													<ul className="list-group list-group-flush">
														{/* List Group Item Start */}
														<li className="list-group-item">
															<div className="document">
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
																			strokeWidth={
																				2
																			}
																			d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
																		/>
																	</svg>
																	{/* Alternate :: External File link */}
																	{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/document.svg" alt=""> */}
																</div>
																<div className="document-body">
																	<h6 className="text-truncate">
																		<Link
																			className="text-reset"
																			title="effects-of-global-warming.docs"
																		>
																			Effects-of-global-warming.docs
																		</Link>
																	</h6>
																	<ul className="list-inline small mb-0">
																		<li className="list-inline-item">
																			<span className="text-muted">
																				79.2
																				KB
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="text-muted text-uppercase">
																				docs
																			</span>
																		</li>
																	</ul>
																</div>
																<div className="document-options ms-1">
																	<div className="dropdown">
																		<button
																			className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
																			type="button"
																			data-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																		>
																			{/* Default :: Inline SVG */}
																			<svg
																				className="hw-20"
																				fill="none"
																				viewBox="0 0 24 24"
																				stroke="currentColor"
																			>
																				<path
																					strokeLinecap="round"
																					strokeLinejoin="round"
																					strokeWidth={
																						2
																					}
																					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
																				/>
																			</svg>
																			{/* Alternate :: External File link */}
																			{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> */}
																		</button>
																		<div className="dropdown-menu">
																			<Link className="dropdown-item">
																				Download
																			</Link>
																			<Link className="dropdown-item">
																				Share
																			</Link>
																			<Link className="dropdown-item">
																				Delete
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
														{/* List Group Item End */}
														{/* List Group Item Start */}
														<li className="list-group-item">
															<div className="document">
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
																			strokeWidth={
																				2
																			}
																			d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
																		/>
																	</svg>
																	{/* Alternate :: External File link */}
																	{/* <img class="injectable hw-24" src="./../../assets/media/icons/excel-file.svg" alt=""> */}
																</div>
																<div className="document-body">
																	<h6 className="text-truncate">
																		<Link
																			className="text-reset"
																			title="global-warming-data-2020.xlxs"
																		>
																			Global-warming-data-2020.xlxs
																		</Link>
																	</h6>
																	<ul className="list-inline small mb-0">
																		<li className="list-inline-item">
																			<span className="text-muted">
																				79.2
																				KB
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="text-muted text-uppercase">
																				xlxs
																			</span>
																		</li>
																	</ul>
																</div>
																<div className="document-options ms-1">
																	<div className="dropdown">
																		<button
																			className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
																			type="button"
																			data-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																		>
																			{/* Default :: Inline SVG */}
																			<svg
																				className="hw-20"
																				fill="none"
																				viewBox="0 0 24 24"
																				stroke="currentColor"
																			>
																				<path
																					strokeLinecap="round"
																					strokeLinejoin="round"
																					strokeWidth={
																						2
																					}
																					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
																				/>
																			</svg>
																			{/* Alternate :: External File link */}
																			{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> */}
																		</button>
																		<div className="dropdown-menu">
																			<Link className="dropdown-item">
																				View
																			</Link>
																			<Link className="dropdown-item">
																				Share
																			</Link>
																			<Link className="dropdown-item">
																				Delete
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
														{/* List Group Item End */}
														{/* List Group Item Start */}
														<li className="list-group-item">
															<div className="document">
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
																			strokeWidth={
																				2
																			}
																			d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
																		/>
																	</svg>
																	{/* Alternate :: External File link */}
																	{/* <img class="injectable hw-24" src="./../../assets/media/icons/powerpoint-file.svg" alt=""> */}
																</div>
																<div className="document-body">
																	<h6 className="text-truncate">
																		<Link
																			className="text-reset"
																			title="great-presentation-on global-warming-2020.ppt"
																		>
																			Great-presentation-on
																			global-warming-2020.ppt
																		</Link>
																	</h6>
																	<ul className="list-inline small mb-0">
																		<li className="list-inline-item">
																			<span className="text-muted">
																				79.2
																				KB
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="text-muted text-uppercase">
																				ppt
																			</span>
																		</li>
																	</ul>
																</div>
																<div className="document-options ms-1">
																	<div className="dropdown">
																		<button
																			className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
																			type="button"
																			data-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																		>
																			{/* Default :: Inline SVG */}
																			<svg
																				className="hw-20"
																				fill="none"
																				viewBox="0 0 24 24"
																				stroke="currentColor"
																			>
																				<path
																					strokeLinecap="round"
																					strokeLinejoin="round"
																					strokeWidth={
																						2
																					}
																					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
																				/>
																			</svg>
																			{/* Alternate :: External File link */}
																			{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> */}
																		</button>
																		<div className="dropdown-menu">
																			<Link className="dropdown-item">
																				Download
																			</Link>
																			<Link className="dropdown-item">
																				Share
																			</Link>
																			<Link className="dropdown-item">
																				Delete
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
														{/* List Group Item End */}
													</ul>
													{/* List Group End */}
												</div>
											</div>
										</div>
										{/* Shared Files End */}
									</div>
									{/* Chat Info Body Start  */}
								</div>
							</div>
						</>
					) : (
						<div className="d-flex flex-column justify-content-center text-center h-100 w-100">
							<div className="container">
								<div className="avatar avatar-lg mb-2">
									<img
										className="avatar-img"
										src={require("../assets/media/avatar/4.png")}
										alt=""
									/>
								</div>
								<h5>Welcome, Christina!</h5>
								<p className="text-muted">
									Please select a chat to Start messaging.
								</p>
								<Button
									variant="outline-primary"
									onClick={() => setShowNewChat(true)}
								>
									Start a conversation
								</Button>
							</div>
						</div>
					)}
				</div>
			) : (
				<></>
			)}
			{/* Chats Page End */}
			{/* Friends Page Start */}
			{side === "contacts" ? (
				<div className="friends px-0 py-2 p-xl-3 d-block">
					<div className="container-xl">
						<div className="row">
							<div className="col">
								<div className="card card-body card-bg-1 mb-3">
									<div className="d-flex flex-column align-items-center">
										<div className="avatar avatar-lg mb-3">
											<img
												className="avatar-img"
												src={require("../assets/media/avatar/3.png")}
												alt=""
											/>
										</div>
										<div className="d-flex flex-column align-items-center">
											<h5 className="mb-1">
												Catherine Richardson
											</h5>
											{/* <p class="text-white rounded px-2 bg-primary">+01-202-265462</p> */}
											<div className="d-flex mt-2">
												<div className="btn btn-primary btn-icon rounded-circle text-light mx-2">
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
															d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
														/>
													</svg>
													{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/chat.svg" alt=""> */}
												</div>
												<div className="btn btn-success btn-icon rounded-circle text-light mx-2">
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
															d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
														/>
													</svg>
													{/* <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> */}
												</div>
											</div>
										</div>
									</div>
									<div className="card-options">
										<div className="dropdown">
											<button
												className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
												type="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<svg
													className="hw-20"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
													/>
												</svg>
												{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> */}
											</button>
											<div className="dropdown-menu dropdown-menu-right">
												<Link className="dropdown-item">
													Remove
												</Link>
												<Link className="dropdown-item">
													Block
												</Link>
											</div>
										</div>
									</div>
									<div className="chat-closer d-xl-none">
										{/* Chat Back Button (Visible only in Small Devices) */}
										<button
											className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted"
											type="button"
											data-close=""
										>
											<svg
												className="hw-20"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 19l-7-7m0 0l7-7m-7 7h18"
												/>
											</svg>
											{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/arrow-left.svg" alt=""> */}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row friends-info">
							<div className="col">
								<div className="card">
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Local Time
													</p>
													<p className="mb-0">
														10:25 PM
													</p>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/clock.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Birthdate
													</p>
													<p className="mb-0">
														20/11/1992
													</p>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/calendar.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Phone
													</p>
													<p className="mb-0">
														+01-222-364522
													</p>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Email
													</p>
													<p className="mb-0">
														catherine.richardson@gmail.com
													</p>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/mail.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Website
													</p>
													<p className="mb-0">
														www.catherichardson.com
													</p>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/globe.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Address
													</p>
													<p className="mb-0">
														1134 Ridder Park Road,
														San Fransisco, CA 94851
													</p>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/home.svg" alt=""> */}
											</div>
										</li>
									</ul>
								</div>
								<div className="card">
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Facebook
													</p>
													<Link className="font-size-sm font-weight-medium">
														@cathe.richardson
													</Link>
												</div>
												<svg
													className="text-muted hw-20"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
												</svg>
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/icons/facebook.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Twitter
													</p>
													<Link className="font-size-sm font-weight-medium">
														@cathe.richardson
													</Link>
												</div>
												<svg
													className="text-muted hw-20"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
												</svg>
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/icons/twitter.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Instagram
													</p>
													<Link className="font-size-sm font-weight-medium">
														@cathe.richardson
													</Link>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/icons/instagram.svg" alt=""> */}
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="media-body">
													<p className="small text-muted mb-0">
														Linkedin
													</p>
													<Link className="font-size-sm font-weight-medium">
														@cathe.richardson
													</Link>
												</div>
												<svg
													className="text-muted hw-20"
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
												{/* <img class="injectable text-muted hw-20" src="./../../assets/media/icons/linkedin.svg" alt=""> */}
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			{/* Friends Page End */}
			{/* Profile Settings Start */}
			{side === "profile" ? (
				<div className="profile d-block">
					<div className="page-main-heading sticky-top py-2 px-3 mb-3">
						{/* Chat Back Button (Visible only in Small Devices) */}
						<button
							className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none"
							type="button"
							data-close=""
						>
							<svg
								className="hw-20"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
							{/* <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/arrow-left.svg" alt=""> */}
						</button>
						<div className="ps-2 ps-xl-0">
							<h5 className="font-weight-semibold">Settings</h5>
							<p className="text-muted mb-0">
								Update Personal Information &amp; Settings
							</p>
						</div>
					</div>
					<div className="container-xl px-2 px-sm-3">
						<div className="row">
							<div className="col">
								<div className="card mb-3">
									<div className="card-header">
										<h6 className="mb-1">Account</h6>
										<p className="mb-0 text-muted small">
											Update personal &amp; contact
											information
										</p>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="firstName">
														First Name
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="firstName"
														placeholder="Type your first name"
														defaultValue="Catherine"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="lastName">
														Last Name
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="lastName"
														placeholder="Type your last name"
														defaultValue="Richardson"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="mobileNumber">
														Mobile number
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="mobileNumber"
														placeholder="Type your mobile number"
														defaultValue="+01-222-364522"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="birthDate">
														Birth date
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="birthDate"
														placeholder="dd/mm/yyyy"
														defaultValue="20/11/1992"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="emailAddress">
														Email address
													</label>
													<input
														type="email"
														className="form-control form-control-md"
														id="emailAddress"
														placeholder="Type your email address"
														defaultValue="catherine.richardson@gmail.com"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="webSite">
														Website
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="webSite"
														placeholder="Type your website"
														defaultValue="www.catherichardson.com"
													/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<label htmlFor="Address">
														Address
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="Address"
														placeholder="Type your address"
														defaultValue="1134 Ridder Park Road, San Fransisco, CA 94851"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="card-footer d-flex justify-content-end">
										<button
											type="button"
											className="btn btn-link text-muted mx-1"
										>
											Reset
										</button>
										<button
											type="button"
											className="btn btn-primary"
										>
											Save Changes
										</button>
									</div>
								</div>
								<div className="card mb-3">
									<div className="card-header">
										<h6 className="mb-1">
											Social network profiles
										</h6>
										<p className="mb-0 text-muted small">
											Update personal &amp; contact
											information
										</p>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="facebookId">
														Facebook
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="facebookId"
														placeholder="Username"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="twitterId">
														Twitter
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="twitterId"
														placeholder="Username"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="instagramId">
														Instagram
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="instagramId"
														placeholder="Username"
													/>
												</div>
											</div>
											<div className="col-md-6 col-12">
												<div className="form-group">
													<label htmlFor="linkedinId">
														Linkedin
													</label>
													<input
														type="text"
														className="form-control form-control-md"
														id="linkedinId"
														placeholder="Username"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="card-footer d-flex justify-content-end">
										<button
											type="button"
											className="btn btn-link text-muted mx-1"
										>
											Reset
										</button>
										<button
											type="button"
											className="btn btn-primary"
										>
											Save Changes
										</button>
									</div>
								</div>
								<div className="card mb-3">
									<div className="card-header">
										<h6 className="mb-1">Password</h6>
										<p className="mb-0 text-muted small">
											Update personal &amp; contact
											information
										</p>
									</div>
									<div className="card-body">
										<form>
											<div className="row">
												<div className="col-md-6 col-12">
													<div className="form-group">
														<label htmlFor="current-password">
															Current Password
														</label>
														<input
															type="password"
															className="form-control form-control-md"
															id="current-password"
															placeholder="Current password"
															autoComplete="on"
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6 col-12">
													<div className="form-group">
														<label htmlFor="new-password">
															New Password
														</label>
														<input
															type="password"
															className="form-control form-control-md"
															id="new-password"
															placeholder="New password"
															autoComplete="off"
														/>
													</div>
												</div>
												<div className="col-md-6 col-12">
													<div className="form-group">
														<label htmlFor="repeat-password">
															Repeat Password
														</label>
														<input
															type="password"
															className="form-control form-control-md"
															id="repeat-password"
															placeholder="Repeat password"
															autoComplete="off"
														/>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div className="card-footer d-flex justify-content-end">
										<button
											type="button"
											className="btn btn-link text-muted mx-1"
										>
											Reset
										</button>
										<button
											type="button"
											className="btn btn-primary"
										>
											Save Changes
										</button>
									</div>
								</div>
								<div className="card mb-3">
									<div className="card-header">
										<h6 className="mb-1">Privacy</h6>
										<p className="mb-0 text-muted small">
											Update personal &amp; contact
											information
										</p>
									</div>
									<div className="card-body p-0">
										<ul className="list-group list-group-flush list-group-sm-column">
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Profile Picture
														</p>
														<p className="small text-muted mb-0">
															Select who can see
															my profile picture
														</p>
													</div>
													<div className="dropdown me-2">
														<button
															className="btn btn-outline-default dropdown-toggle"
															type="button"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															Public
														</button>
														<div className="dropdown-menu">
															<Link className="dropdown-item">
																Public
															</Link>
															<Link className="dropdown-item">
																Friends
															</Link>
															<Link className="dropdown-item">
																Selected Friends
															</Link>
														</div>
													</div>
												</div>
											</li>
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Last Seen
														</p>
														<p className="small text-muted mb-0">
															Select who can see
															my last seen
														</p>
													</div>
													<div className="dropdown me-2">
														<button
															className="btn btn-outline-default dropdown-toggle"
															type="button"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															Public
														</button>
														<div className="dropdown-menu">
															<Link className="dropdown-item">
																Public
															</Link>
															<Link className="dropdown-item">
																Friends
															</Link>
															<Link className="dropdown-item">
																Selected Friends
															</Link>
														</div>
													</div>
												</div>
											</li>
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Groups
														</p>
														<p className="small text-muted mb-0">
															Select who can add
															you in groups
														</p>
													</div>
													<div className="dropdown me-2">
														<button
															className="btn btn-outline-default dropdown-toggle"
															type="button"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															Public
														</button>
														<div className="dropdown-menu">
															<Link className="dropdown-item">
																Public
															</Link>
															<Link className="dropdown-item">
																Friends
															</Link>
															<Link className="dropdown-item">
																Selected Friends
															</Link>
														</div>
													</div>
												</div>
											</li>
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Status
														</p>
														<p className="small text-muted mb-0">
															Select who can see
															my status updates
														</p>
													</div>
													<div className="dropdown me-2">
														<button
															className="btn btn-outline-default dropdown-toggle"
															type="button"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															Public
														</button>
														<div className="dropdown-menu">
															<Link className="dropdown-item">
																Public
															</Link>
															<Link className="dropdown-item">
																Friends
															</Link>
															<Link className="dropdown-item">
																Selected Friends
															</Link>
														</div>
													</div>
												</div>
											</li>
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Read receipts
														</p>
														<p className="small text-muted mb-0">
															If turn off this
															option you won't be
															able to see read
															recipts
														</p>
													</div>
													<div className="custom-control custom-switch me-2">
														<input
															type="checkbox"
															className="custom-control-input"
															id="readReceiptsSwitch"
															defaultChecked=""
														/>
														<label
															className="custom-control-label"
															htmlFor="readReceiptsSwitch"
														>
															&nbsp;
														</label>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div className="card-footer d-flex justify-content-end">
										<button
											type="button"
											className="btn btn-link text-muted mx-1"
										>
											Reset
										</button>
										<button
											type="button"
											className="btn btn-primary"
										>
											Save Changes
										</button>
									</div>
								</div>
								<div className="card mb-3">
									<div className="card-header">
										<h6 className="mb-1">Security</h6>
										<p className="mb-0 text-muted small">
											Update personal &amp; contact
											information
										</p>
									</div>
									<div className="card-body p-0">
										<ul className="list-group list-group-flush list-group-sm-column">
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Use two-factor
															authentication
														</p>
														<p className="small text-muted mb-0">
															Ask for a code if
															attempted login from
															an unrecognised
															device or browser.
														</p>
													</div>
													<div className="custom-control custom-switch me-2">
														<input
															type="checkbox"
															className="custom-control-input"
															id="twoFactorSwitch"
															defaultChecked=""
														/>
														<label
															className="custom-control-label"
															htmlFor="twoFactorSwitch"
														>
															&nbsp;
														</label>
													</div>
												</div>
											</li>
											<li className="list-group-item py-2">
												<div className="media align-items-center">
													<div className="media-body">
														<p className="mb-0">
															Get alerts about
															unrecognised logins
														</p>
														<p className="small text-muted mb-0">
															You will be notified
															if anyone logs in
															from a device or
															browser you don't
															usually use
														</p>
													</div>
													<div className="custom-control custom-switch me-2">
														<input
															type="checkbox"
															className="custom-control-input"
															id="unrecognisedSwitch"
															defaultChecked=""
														/>
														<label
															className="custom-control-label"
															htmlFor="unrecognisedSwitch"
														>
															&nbsp;
														</label>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div className="card-footer d-flex justify-content-end">
										<button className="btn btn-link text-muted mx-1">
											Reset
										</button>
										<button
											className="btn btn-primary"
											type="button"
										>
											Save Changes
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			{/* Profile Settings End */}
		</main>
	)
}

export default Main
