import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./useAuth"
import { useMain } from "./useMain"
import { io } from "socket.io-client"

const ChatContent = createContext()

export function useChat() {
	return useContext(ChatContent)
}

const ChatComponent = ({ children }) => {
	const Socket = io(process.env.REACT_APP_ENV_SERVER_URL, {
		autoConnect: false,
		withCredentials: true,
	})
	const { authApi, loggedIn } = useAuth()
	const { setShowPreloader } = useMain()
	const [chats, setChats] = useState([])
	const [filterChats, setFilterChats] = useState("All Chats")
	const [loadedChats, setLoadedChats] = useState({})
	useEffect(() => {
		if (loggedIn) {
			Socket.connect()
			authApi
				.get("/api/message/getChats")
				.then((response) => {
					setChats(response.data.Chats)
				})
				.finally(() => {
					setShowPreloader(false)
				})
			Socket.on("connect", () => {
				// on connect
			})
			Socket.on("disconnect", () => {
				// on disconnect
			})
			Socket.on("getFrontend", (value) => {
				// on getFrontend event
			})

			return () => {
				Socket.off("connect", () => {
					// clean up
				})
				Socket.off("disconnect", () => {
					// clean up
				})
				Socket.off("getFrontend", () => {
					// clean up
				})
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loggedIn])
	return (
		<ChatContent.Provider
			value={{
				chats,
				setChats,
				filterChats,
				setFilterChats,
				loadedChats,
				setLoadedChats,
			}}
		>
			{children}
		</ChatContent.Provider>
	)
}

export default ChatComponent
