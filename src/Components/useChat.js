import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./useAuth"
import { useMain } from "./useMain"

const ChatContent = createContext()

export function useChat() {
	return useContext(ChatContent)
}

const ChatComponent = ({ children }) => {
	const { authApi, loggedIn, Socket, user } = useAuth()
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
				// Set or update the chat list after a message is received.
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
				//Set or update the chat related to the received message.
				setLoadedChats((loadedChats) => {
					return {
						...loadedChats,
						[message.sender]: loadedChats[message.sender]
							? [...loadedChats[message.sender], message]
							: [message],
					}
				})
			})
			Socket.on("deleteMessage", (message) => {
				const OtherUserID =
					user._id === message.sender
						? message.receiver
						: message.sender
				//Remove the deleted message from loaded chats
				setLoadedChats((loadedChats) => {
					if (
						// If the loaded messages related to the chat are undefined, or (next line)
						!loadedChats[OtherUserID] ||
						// the reason that we have the setChats inside of setLoadedChats is, now we have access to old loadedChats so we can get required informations
						// if its the last message which is going to be deleted then we remove the chat from chat list since there is no more message left after delete.
						loadedChats[OtherUserID].sort(
							(a, b) => a.createdAt - b.createdAt
						).filter((val) => val._id !== message._id).length === 0
					) {
						setChats((chats) => {
							return [
								...chats.filter(
									(val) =>
										val.receiver_user[0]._id !==
											message.receiver &&
										val.sender_user[0]._id !==
											message.sender
								),
							]
						})
					} else {
						// if it wasn't the last message, find the last message after deletion and update the chat list
						setChats((chats) => {
							return [
								...chats.map((val) => {
									if (
										// if its related chat to the message
										val.receiver_user[0]._id ===
											message.receiver &&
										val.sender_user[0]._id ===
											message.sender
									) {
										const getLastMessageFromLoadedChats =
											loadedChats[OtherUserID].filter(
												// exclude the deleted message so we can get the last message
												(val) => val._id !== message._id
											)
										return {
											...getLastMessageFromLoadedChats[
												getLastMessageFromLoadedChats.length -
													1
											],
											receiver_user: [
												message.receiver_user,
											],
											sender_user: [message.sender_user],
										}
									} else {
										return val
									}
								}),
							]
						})
					}
					return {
						...loadedChats,
						[OtherUserID]: loadedChats[OtherUserID]
							? [
									...loadedChats[OtherUserID].filter(
										(val) => val._id !== message._id
									),
							  ]
							: [],
					}
				})
			})
			Socket.on("deleteAllMessages", (data) => {
				const { OtherUserID } = data
				setLoadedChats((loadedChats) => {
					return {
						...loadedChats,
						[OtherUserID]: [],
					}
				})
				setChats((chats) => {
					return chats.filter(
						(chat) =>
							chat.receiver_user[0]._id !== OtherUserID &&
							chat.sender_user[0]._id !== OtherUserID
					)
				})
			})
			Socket.on("editMessage", (message) => {
				const OtherUserID =
					user._id === message.sender
						? message.receiver
						: message.sender
				setLoadedChats((loadedChats) => {
					const lastMessage = loadedChats[OtherUserID].sort(
						(a, b) => a.createdAt - b.createdAt
					)[loadedChats[OtherUserID].length - 1]
					if (lastMessage._id === message._id)
						setChats((chats) => {
							return [
								...chats.map((val) =>
									val._id === message._id
										? {
												...val,
												text: message.text,
										  }
										: val
								),
							]
						})
					return {
						...loadedChats,
						[OtherUserID]: [
							...loadedChats[OtherUserID].map((val) =>
								val._id === message._id
									? {
											...val,
											text: message.text,
									  }
									: val
							),
						],
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
