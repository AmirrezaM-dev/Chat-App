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
	const timeSince = (date) => {
		const second = Math.floor((new Date() - new Date(date)) / 1000)
		const days = second / 86400
		const hours = second / 3600
		const seconds = second / 60
		if (days > 1) {
			return new Date(date).toLocaleString("en-US", {
				year: "2-digit",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			})
		} else if (hours > 1) {
			return (
				Math.floor(hours) +
				` hour${Math.floor(hours) === 1 ? "" : "s"} ago`
			)
		} else if (seconds > 1) {
			return (
				Math.floor(seconds) +
				` minute${Math.floor(seconds) === 1 ? "" : "s"} ago`
			)
		}
		return "Just now"
	}
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
				timeSince,
			}}
		>
			{children}
		</MainContent.Provider>
	)
}

export default MainComponent
