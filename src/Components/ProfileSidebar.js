import {
	faCog,
	faEllipsisVertical,
	faRightFromBracket,
	faSignature,
	faAt,
	faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button, Dropdown, Form, ListGroup } from "react-bootstrap"
import SideBarDropDownOptions from "./SideBarDropDownOptions"
import { useAuth } from "./useAuth"
import { useRef } from "react"

const ProfileSidebar = () => {
	const { setUser, user, logout, authApi } = useAuth()
	const uploadAvatarRef = useRef(null)
	const uploadAvatar = (e) => {
		const formData = new FormData()
		formData.append("file", e.target.files[0])
		authApi
			.post("/api/users/changeAvatar", formData)
			.then((response) => {
				if (response?.data?.avatar)
					setUser((user) => {
						return { ...user, avatar: response.data.avatar }
					})
			})
			.finally(() => {
				uploadAvatarRef.current.value = ""
			})
	}

	return (
		<div className="d-flex flex-column h-100">
			<div className="hide-scrollbar">
				{/* Sidebar Header Start */}
				<div className="sidebar-header sticky-top p-2 mb-3">
					<div className="d-flex justify-content-between align-items-center">
						<h5 className="font-weight-semibold">Profile</h5>
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
									{user.avatar ? (
										<div
											className="avatar avatar-lg mb-3 cursor-pointer"
											onClick={() => {
												uploadAvatarRef.current.click()
											}}
										>
											<img
												className="avatar-img"
												src={user.avatar}
												alt=""
											/>
										</div>
									) : (
										<></>
									)}
									<div className="d-flex flex-column align-items-center">
										<h5>{user.fullname}</h5>
									</div>
									<div className="d-flex">
										<Button
											variant=""
											className="mx-1 border border-dark"
											onClick={logout}
										>
											<FontAwesomeIcon
												icon={faRightFromBracket}
											/>
											<span className="ms-1">Logout</span>
										</Button>
										<Button
											variant=""
											className="border border-dark mx-1 d-xl-none"
										>
											<FontAwesomeIcon icon={faCog} />
											<span className="ms-1">
												Settings
											</span>
										</Button>
									</div>
								</div>
								{/* Card Details End */}
								{/* Card Options Start */}
								<div className="card-options">
									<Form.Control
										ref={uploadAvatarRef}
										type="file"
										className="d-none"
										placeholder="Type username here"
										onChange={uploadAvatar}
									/>
									<Dropdown className="nav-link px-1 me-2 no-dropdown-after">
										<Dropdown.Toggle
											className="btn-icon btn-minimal btn-sm text-muted border-0 text-muted"
											variant=""
										>
											<FontAwesomeIcon
												icon={faEllipsisVertical}
											/>
										</Dropdown.Toggle>
										<Dropdown.Menu
											onClick={() =>
												uploadAvatarRef.current.click()
											}
										>
											<Dropdown.Item>
												Change Profile picture
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
								<ListGroup variant="flush">
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
										<div className="media align-items-center">
											<div className="media-body">
												<p className="small text-muted mb-0">
													Full Name
												</p>
												<p className="mb-0">
													{user.fullname}
												</p>
											</div>
											<FontAwesomeIcon
												icon={faSignature}
											/>
										</div>
									</ListGroup.Item>
									{/* List Group Item End */}
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
										<div className="media align-items-center">
											<div className="media-body">
												<p className="small text-muted mb-0">
													Username
												</p>
												<p className="mb-0">
													{user.username}
												</p>
											</div>
											<FontAwesomeIcon icon={faUserAlt} />
										</div>
									</ListGroup.Item>
									{/* List Group Item End */}
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
										<div className="media align-items-center">
											<div className="media-body">
												<p className="small text-muted mb-0">
													Email Address
												</p>
												<p className="mb-0">
													{user.email}
												</p>
											</div>
											<FontAwesomeIcon icon={faAt} />
										</div>
									</ListGroup.Item>
									{/* List Group Item End */}
								</ListGroup>
								{/* List Group End */}
							</div>
							{/* Card End */}
						</div>
					</div>
				</div>
				{/* Sidebar Content End */}
			</div>
		</div>
	)
}

export default ProfileSidebar
