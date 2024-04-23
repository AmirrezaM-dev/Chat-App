import {
	faCog,
	faEllipsisVertical,
	faRightFromBracket,
	faSignature,
	faAt,
	faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button, Dropdown, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import SideBarDropDownOptions from "./SideBarDropDownOptions"
import { useAuth } from "./useAuth"

const ProfileSidebar = () => {
	const { user } = useAuth()
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
										<div className="avatar avatar-lg mb-3">
											<img
												className="avatar-img"
												src={require(user.avatar)}
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
									<Dropdown className="nav-link px-1 me-2 no-dropdown-after">
										<Dropdown.Toggle
											className="btn-icon btn-minimal btn-sm text-muted border-0 text-muted"
											variant=""
										>
											<FontAwesomeIcon
												icon={faEllipsisVertical}
											/>
										</Dropdown.Toggle>
										<Dropdown.Menu>
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
							{/* Card Start */}
							<div className="card my-3">
								{/* List Group Start */}
								<ul className="list-group list-group-flush">
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
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
									</ListGroup.Item>
									{/* List Group Item End */}
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
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
									</ListGroup.Item>
									{/* List Group Item End */}
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
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
									</ListGroup.Item>
									{/* List Group Item End */}
									{/* List Group Item Start */}
									<ListGroup.Item className="py-2">
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
												<circle cx={4} cy={4} r={2} />
											</svg>
											{/* Alternate :: External File link */}
											{/* <img class="injectable text-muted hw-20 ms-1" src="./../../assets/media/icons/linkedin.svg" alt=""> */}
										</div>
									</ListGroup.Item>
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
	)
}

export default ProfileSidebar
