// import { LightBoxGallery, GalleryItem } from "react-magnific-popup"
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
	faFile,
	faMailForward,
} from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
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
	const [showSearch, setShowSearch] = useState(false)
	return (
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
									<small className="text-muted">Online</small>
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
										<FontAwesomeIcon icon={faSearch} />
									</Link>
								</li>

								<li className="nav-item list-inline-item d-none d-sm-block me-0">
									<Dropdown
										className="nav-link px-1"
										drop="start"
									>
										<Dropdown.Toggle
											as={Link}
											className="text-secondary"
										>
											<FontAwesomeIcon
												icon={faEllipsisVertical}
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
						<div className="chat-content p-2" id="messageBody">
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
					<div className="chat-info chat-info-visible">
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
														1134 Ridder Park Road,
														San Fransisco, CA 94851
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
										<h6 className="mb-0">Last Media</h6>
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
										<h6 className="mb-0">Documents</h6>
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
															<div>
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
															<div>
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
															<div>
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
				<></>
			)}
		</div>
	)
}

export default Chat
