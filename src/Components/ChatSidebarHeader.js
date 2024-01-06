import SideBarDropDownOptions from "./SideBarDropDownOptions"
import FilterChats from "./FilterChats"
import SearchChats from "./SearchChats"

const ChatSidebarHeader = () => {
	return (
		<div className={`sidebar-header sticky-top p-2`}>
			<div className="d-flex justify-content-between align-items-center">
				{/* Chat Tab Pane Title Start */}
				<h5 className="font-weight-semibold mb-0">Chats</h5>
				{/* Chat Tab Pane Title End */}
				<SideBarDropDownOptions />
			</div>
			{/* Sidebar Header Start */}
			<div className="sidebar-sub-header">
				{/* Sidebar Header Dropdown Start */}
				<FilterChats />
				{/* Sidebar Header Dropdown End */}
				{/* Sidebar Search Start */}
				<SearchChats />
				{/* Sidebar Search End */}
			</div>
			{/* Sidebar Header End */}
		</div>
	)
}

export default ChatSidebarHeader
