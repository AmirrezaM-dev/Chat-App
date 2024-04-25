import { faAt, faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button, Form, InputGroup } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import SideBarDropDownOptions from "./SideBarDropDownOptions"
import { useChat } from "./useChat"
import { useMain } from "./useMain"
import { useState } from "react"

const ContactsSidebar = () => {
	const { setShowAddContact } = useMain()
	const { contacts } = useChat()
	const [search, setSearch] = useState("")
	const navigate = useNavigate()
	const { id } = useParams()
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
									onChange={({ target: { value } }) => {
										setSearch(value)
									}}
									value={search}
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
					{/* <li>
						<small className="font-weight-medium text-uppercase text-muted">
							A
						</small>
					</li> */}
					{/* Item Series End */}
					<li
						className={`contacts-item`}
						onClick={() => setShowAddContact(true)}
					>
						<Link className="contacts-link rounded-pill m-0 p-0 shadow">
							<Button
								variant="none"
								className="m-2 rounded-circle border-0"
							>
								<FontAwesomeIcon icon={faUserPlus} />
							</Button>

							<div className="contacts-content">
								<div className="contacts-info">
									<h6 className="chat-name text-truncate">
										New Contact
									</h6>
								</div>
							</div>
						</Link>
					</li>
					{/* friends Item Start */}
					{contacts
						.filter(
							(val) =>
								val.contactUser[0].fullname.indexOf(search) >
									-1 ||
								val.contactUser[0].username.indexOf(search) > -1
						)
						.map((val, i) => {
							const contact = val.contactUser[0]
							return (
								<li
									key={i}
									className={`contacts-item ${
										id === val._id ? "active" : ""
									}`}
									onClick={() => {
										navigate("/contacts/" + val._id)
									}}
								>
									<Link className="contacts-link">
										{contact.avatar ? (
											<div className="avatar">
												<img
													src={contact.avatar}
													alt=""
												/>
											</div>
										) : (
											<></>
										)}
										<div className="contacts-content">
											{contact?.fullname ? (
												<div className="contacts-info">
													<h6 className="chat-name text-truncate">
														{contact.fullname}
													</h6>
												</div>
											) : (
												<></>
											)}
											{contact.username ? (
												<div className="contacts-texts">
													<FontAwesomeIcon
														icon={faAt}
													/>
													<p className="text-muted ms-2 mb-0">
														{contact.username}
													</p>
												</div>
											) : (
												<></>
											)}
										</div>
									</Link>
								</li>
							)
						})}
					{/* friends Item End */}
				</ul>
				{/* Friends Contact List End */}
			</div>
		</div>
	)
}

export default ContactsSidebar
