import { createContext, useContext, useState } from "react"

const MainContent = createContext()

export function useMain() {
	return useContext(MainContent)
}

const MainComponent = ({ children }) => {
	const [showNewChat, setShowNewChat] = useState(false)
	const [showCreateGroup, setShowCreateGroup] = useState(false)
	const [showNotifications, setShowNotifications] = useState(false)
	const [showInviteOthers, setShowInviteOthers] = useState(false)
	const [showPreloader, setShowPreloader] = useState(false)
	return (
		<MainContent.Provider
			value={{
				showNewChat,
				setShowNewChat,
				showNotifications,
				setShowNotifications,
				showCreateGroup,
				setShowCreateGroup,
				showInviteOthers,
				setShowInviteOthers,
				showPreloader,
				setShowPreloader,
			}}
		>
			{children}
		</MainContent.Provider>
	)
}

export default MainComponent
