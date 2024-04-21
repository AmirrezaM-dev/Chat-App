import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./useAuth"
import { useMain } from "./useMain"

const ChatContent = createContext()

export function useChat() {
	return useContext(ChatContent)
}

const ChatComponent = ({ children }) => {
	const { authApi, loggedIn, Socket } = useAuth()
	const { setShowPreloader } = useMain()
	const [chats, setChats] = useState([])
	const [contacts, setContacts] = useState([])
	const [filterChats, setFilterChats] = useState("All Chats")
	const [loadedChats, setLoadedChats] = useState({})
	useEffect(() => {
		if (loggedIn && Socket) {
			Socket.connect()
			authApi
				.get("/api/message/getChatsAndContacts")
				.then((response) => {
					setChats(response.data.Chats)
					setContacts(response.data.Contacts)
				})
				.finally(() => {
					setShowPreloader(false)
				})
			Socket.on("connect", () => {})
			Socket.on("disconnect", () => {
				setLoadedChats({})
			})
			Socket.on("receiveMessage", (message) => {
				console.log(message)
				setChats((chats) => {
					return [
						...chats.filter(
							(val) =>
								val.receiver_user[0]._id !== message.sender &&
								val.sender_user[0]._id !== message.sender
						),
						{
							...message,
							receiver_user: [message.receiver_user],
							sender_user: [message.sender_user],
						},
					]
				})
				setLoadedChats((loadedChats) => {
					return {
						...loadedChats,
						[message.sender]: loadedChats[message.sender]
							? [...loadedChats[message.sender], message]
							: [message],
					}
				})
			})
			const CurrentSocket = Socket
			return () => {
				CurrentSocket.off("connect", () => {})
				CurrentSocket.off("disconnect", () => {})
				CurrentSocket.off("receiveMessage", () => {})
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Socket])
	return (
		<ChatContent.Provider
			value={{
				chats,
				setChats,
				contacts,
				setContacts,
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
