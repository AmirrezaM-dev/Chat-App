import { createContext, useContext, useState } from "react"

const MainContent = createContext()

export function useMain() {
	return useContext(MainContent)
}

const MainComponent = ({ children }) => {
	const [showNewChat, setShowNewChat] = useState(false)
	const [showCreateGroup, setShowCreateGroup] = useState(false)
	const [showInviteOthers, setShowInviteOthers] = useState(false)
	const [showNotification, setShowNotification] = useState(false)
	return (
		<MainContent.Provider
			value={{
				showNewChat,
				setShowNewChat,
				showNotification,
				setShowNotification,
				showCreateGroup,
				setShowCreateGroup,
				showInviteOthers,
				setShowInviteOthers,
			}}
		>
			{children}
		</MainContent.Provider>
	)
}

export default MainComponent
