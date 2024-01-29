// import { LightBoxGallery, GalleryItem } from "react-magnific-popup"
import {
	Button,
	Collapse,
	Dropdown,
	Form,
	InputGroup,
	ListGroup,
	Nav,
} from "react-bootstrap"
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
	faFile,
	faMailForward,
	faBan,
	faLocation,
	faUserPlus,
	faCircleInfo,
	faImage,
	faFileExcel,
	faFilePowerpoint,
} from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"
import { useAuth } from "../Components/useAuth"
import Preloader from "./Preloader"
import ChatOptions from "../Components/ChatOptions"
import MessageOptions from "../Components/MessageOptions"
import { useChat } from "../Components/useChat"
const Chat = () => {
	// const config = {
	// 	delegate: "a",
	// 	type: "image",
	// 	tLoading: "Loading image #%curr%...",
	// 	mainClass: "mfp-img-mobile",
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 		titleSrc: function (item) {
	// 			return (
	// 				item.el.attr("title") +
	// 				"<small>by Marsel Van Oosten</small>"
	// 			)
	// 		},
	// 	},
	// }

	const { id } = useParams()
	const { authApi, user } = useAuth()
	const { loadedChats, setLoadedChats } = useChat()
	const [showSearch, setShowSearch] = useState(false)
	const [showInfo, setShowInfo] = useState(false)
	useEffect(() => {
		authApi.post("/api/message/getMessages", { id }).then((response) => {
			setLoadedChats((loadedChats) => {
				return {
					...loadedChats,
					// messages
					[id]: response.data.Messages,
					// chat info (name, avatar, ...)
					["info-" + id]: {
						...loadedChats["info-" + id],
						fullname: response.data.OtherUser.fullname,
					},
				}
			})
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	return (
		<div className="chats d-flex">
			{id && loadedChats?.[id] ? (
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
								<div className="avatar /*avatar-online*/ d-none d-sm-inline-block me-3">
									<img
										src={require("../assets/media/avatar/2.png")}
										alt=""
									/>
								</div>
								<div className="media-body align-self-center ">
									<h6 className="text-truncate mb-0">
										{loadedChats["info-" + id].fullname}
									</h6>
									{/* <small className="text-muted">Online</small> */}
								</div>
							</div>
							{/* Chat Options */}
							<ChatOptions
								setShowSearch={setShowSearch}
								setShowInfo={setShowInfo}
							/>
							{/* Chat Options */}
						</div>
						{/* Chat Header End*/}
						{/* Search Start */}
						<Collapse
							in={showSearch}
							className="border-bottom px-3"
						>
							<div className="container-xl py-2 px-0 px-md-3">
								<InputGroup>
									<Form.Control
										type="text"
										className="form-control form-control-md border-end-0 bg-transparent pe-0"
										placeholder="Search"
									/>
									<InputGroup.Text className="bg-transparent border-start-0">
										<FontAwesomeIcon icon={faSearch} />
									</InputGroup.Text>
								</InputGroup>
							</div>
						</Collapse>
						{/* Search End */}
						{/* Chat Content Start*/}
						<div className="chat-content p-2">
							<div className="container">
								<div
									className="message-divider sticky-top pb-2"
									data-label="Freaking Date bla bla 99/99/99"
								>
									&nbsp;
								</div>
								{/* Message Day Start */}
								<div className="message-day">
									{loadedChats[id].map((chat, i) => {
										return (
											<div
												key={i}
												className={`message ${
													user._id === chat.sender
														? "self"
														: ""
												}`}
											>
												<div className="message-wrapper">
													<div className="message-content">
														<span>{chat.text}</span>
													</div>
												</div>
												<MessageOptions chat={chat} />
											</div>
										)
									})}
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
													presentation on global
													warming on Friday, and I am
													so nervous.
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
												<Dropdown.Toggle as={Link}>
													<FontAwesomeIcon
														icon={faEllipsis}
													/>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faSquareCheck}
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
									</div>
									{/* Received Message End */}
									{/* Self Message Start */}
									<div className="message self">
										<div className="message-wrapper">
											<div className="message-content">
												<span>
													First of all, you need to
													understand the subject
													matter thoroughly. You need
													to know what is global
													warming, what causes global
													warming, and what people
													should do to abate the
													effects of global warming.
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
												<Dropdown.Toggle as={Link}>
													<FontAwesomeIcon
														icon={faEllipsis}
													/>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faSquareCheck}
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
									</div>
									{/* Self Message End */}
									{/* Message Start */}
									<div className="message">
										<div className="message-wrapper">
											<div className="message-content">
												<div className="document">
													<Button
														disabled
														className="btn-icon rounded-circle text-light me-2 opacity-100"
													>
														<FontAwesomeIcon
															className="hw-24"
															icon={faFile}
														/>
													</Button>
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
																	79.2 KB
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
												<Dropdown.Toggle as={Link}>
													<FontAwesomeIcon
														icon={faEllipsis}
													/>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faSquareCheck}
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
													Good idea! By the way, do
													you have any facts to back
													you up? For example, change
													of climate, yearly
													disasters…
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
												<Dropdown.Toggle as={Link}>
													<FontAwesomeIcon
														icon={faEllipsis}
													/>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faSquareCheck}
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
									</div>
									{/* Self Message End */}
									{/* Received Message Start */}
									<div className="message">
										<div className="message-wrapper">
											<div className="message-content">
												<h6>
													I have shared some photos,
													Please have a look.
												</h6>
												<div className="form-row">
													<div className="col">
														{/* <LightBoxGallery
															className="popup-gallery"
															config={config}
														>
															<GalleryItem
																href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg"
																title="The Cleaner"
															>
																<img
																	src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg"
																	width="75"
																	height="75"
																	alt=""
																/>
															</GalleryItem>
															<GalleryItem
																href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg"
																title="The Cleaner"
															>
																<img
																	src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg"
																	width="75"
																	height="75"
																	alt=""
																/>
															</GalleryItem>
														</LightBoxGallery> */}
														<Link
															className="popup-media"
															href="../../assets/media/shared-photos/01.jpg"
														>
															<img
																className="img-fluid rounded"
																src={require("../assets/media/shared-photos/01.jpg")}
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
																src={require("../assets/media/shared-photos/02.jpg")}
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
																src={require("../assets/media/shared-photos/03.jpg")}
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
												<Dropdown.Toggle as={Link}>
													<FontAwesomeIcon
														icon={faEllipsis}
													/>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item>
														<FontAwesomeIcon
															icon={faSquareCheck}
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
									</div>
									{/* Received Message End */}
								</div>
								{/* Message Day End */}
							</div>
							{/* Scroll to finish */}
							<div className="chat-finished" id="chat-finished" />
						</div>
						{/* Chat Content End*/}
						{/* Chat Footer Start*/}
						<div className="chat-footer">
							<div className="attachment">
								<Dropdown className="nav-link px-1">
									<Dropdown.Toggle
										as={Link}
										className="text-secondary"
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
							<Button
								disabled
								className="btn-icon send-icon rounded-circle text-light mb-1 opacity-100"
							>
								<FontAwesomeIcon
									className="hw-24"
									icon={faMailForward}
								/>
							</Button>
						</div>
						{/* Chat Footer End*/}
					</div>
					<div
						className={`chat-info ${
							showInfo ? "chat-info-visible" : ""
						}`}
					>
						<div className="d-flex h-100 flex-column">
							{/* Chat Info Header Start */}
							<div className="chat-info-header px-2">
								<div className="container-fluid">
									<Nav className="justify-content-between align-items-center">
										{/* Sidebar Title Start */}
										<li className="text-center">
											<h5 className="text-truncate mb-0">
												Profile Details
											</h5>
										</li>
										{/* Sidebar Title End */}
										{/* Close Sidebar Start */}
										<li
											className="nav-item list-inline-item"
											onClick={() => setShowInfo(false)}
										>
											<Link className="nav-link text-muted px-0">
												<FontAwesomeIcon icon={faX} />
											</Link>
										</li>
										{/* Close Sidebar End */}
									</Nav>
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
										<FontAwesomeIcon icon={faLocation} />
										<span>San Fransisco, CA</span>
									</p>
									{/* User Quick Options */}
									<div className="d-flex align-items-center justify-content-center">
										<Button
											variant="outline-dark"
											className="btn-icon rounded-circle mx-1"
										>
											<FontAwesomeIcon
												icon={faUserPlus}
											/>
										</Button>
										<Button
											variant="danger"
											className="btn-icon rounded-circle text-light mx-1"
										>
											<FontAwesomeIcon icon={faBan} />
										</Button>
									</div>
								</div>
								{/* User Profile End */}
								{/* User Information Start */}
								<div className="chat-info-group">
									<Link className="chat-info-group-header">
										<h6 className="mb-0">
											User Information
										</h6>
										<FontAwesomeIcon icon={faCircleInfo} />
									</Link>
									<div
										className="chat-info-group-body collapse show"
										id="profile-info"
									>
										<div className="chat-info-group-content list-item-has-padding">
											{/* List Group Start */}
											<ListGroup variant="flush">
												{/* List Group Item Start */}
												<ListGroup.Item className="list-group-item border-0">
													<p className="small text-muted mb-0">
														Phone
													</p>
													<p className="mb-0">
														+01-222-364522
													</p>
												</ListGroup.Item>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<ListGroup.Item className="list-group-item border-0">
													<p className="small text-muted mb-0">
														Email
													</p>
													<p className="mb-0">
														catherine.richardson@gmail.com
													</p>
												</ListGroup.Item>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<ListGroup.Item className="list-group-item border-0">
													<p className="small text-muted mb-0">
														Address
													</p>
													<p className="mb-0">
														1134 Ridder Park Road,
														San Fransisco, CA 94851
													</p>
												</ListGroup.Item>
												{/* List Group Item End */}
											</ListGroup>
											{/* List Group End */}
										</div>
									</div>
								</div>
								{/* User Information End */}
								{/* Shared Media Start */}
								<div className="chat-info-group">
									<Link className="chat-info-group-header">
										<h6 className="mb-0">Last Media</h6>
										<FontAwesomeIcon icon={faImage} />
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
															src={require("../assets/media/shared-photos/01.jpg")}
															className="img-fluid rounded border"
															alt=""
														/>
													</Link>
												</div>
												<div className="col-4 col-md-2 col-xl-4">
													<Link>
														<img
															src={require("../assets/media/shared-photos/02.jpg")}
															className="img-fluid rounded border"
															alt=""
														/>
													</Link>
												</div>
												<div className="col-4 col-md-2 col-xl-4">
													<Link>
														<img
															src={require("../assets/media/shared-photos/03.jpg")}
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
									<Link className="chat-info-group-header">
										<h6 className="mb-0">Documents</h6>
										<FontAwesomeIcon icon={faFile} />
									</Link>
									<div
										className="chat-info-group-body collapse show"
										id="shared-files"
									>
										<div className="chat-info-group-content list-item-has-padding">
											{/* List Group Start */}
											<ListGroup
												variant="flush"
												className="py-2"
											>
												{/* List Group Item Start */}
												<ListGroup.Item>
													<div className="document">
														<Button
															disabled
															className="btn-icon rounded-circle text-light me-2 opacity-100"
														>
															<FontAwesomeIcon
																icon={faFile}
															/>
														</Button>
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
																		79.2 KB
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
															<Dropdown
																className="nav-link px-1"
																// drop="start"
															>
																<Dropdown.Toggle
																	as={Link}
																	className="text-secondary"
																>
																	<FontAwesomeIcon
																		icon={
																			faEllipsisVertical
																		}
																	/>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item>
																		Download
																	</Dropdown.Item>
																	<Dropdown.Item>
																		Share
																	</Dropdown.Item>
																	<Dropdown.Item>
																		Delete
																	</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</div>
													</div>
												</ListGroup.Item>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<ListGroup.Item>
													<div className="document">
														<Button
															disabled
															className="btn-icon rounded-circle text-light me-2 opacity-100"
														>
															<FontAwesomeIcon
																icon={
																	faFileExcel
																}
															/>
														</Button>
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
																		79.2 KB
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
															<Dropdown
																className="nav-link px-1"
																// drop="start"
															>
																<Dropdown.Toggle
																	as={Link}
																	className="text-secondary"
																>
																	<FontAwesomeIcon
																		icon={
																			faEllipsisVertical
																		}
																	/>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item>
																		Download
																	</Dropdown.Item>
																	<Dropdown.Item>
																		Share
																	</Dropdown.Item>
																	<Dropdown.Item>
																		Delete
																	</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</div>
													</div>
												</ListGroup.Item>
												{/* List Group Item End */}
												{/* List Group Item Start */}
												<ListGroup.Item>
													<div className="document">
														<Button
															disabled
															className="btn-icon rounded-circle text-light me-2 opacity-100"
														>
															<FontAwesomeIcon
																icon={
																	faFilePowerpoint
																}
															/>
														</Button>
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
																		79.2 KB
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
															<Dropdown
																className="nav-link px-1"
																// drop="start"
															>
																<Dropdown.Toggle
																	as={Link}
																	className="text-secondary"
																>
																	<FontAwesomeIcon
																		icon={
																			faEllipsisVertical
																		}
																	/>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item>
																		Download
																	</Dropdown.Item>
																	<Dropdown.Item>
																		Share
																	</Dropdown.Item>
																	<Dropdown.Item>
																		Delete
																	</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</div>
													</div>
												</ListGroup.Item>
												{/* List Group Item End */}
											</ListGroup>
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
				<Preloader />
			)}
		</div>
	)
}

export default Chat
