import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Form, InputGroup } from "react-bootstrap"
import { useChat } from "./useChat"

const SearchChats = () => {
	const { chatsSearch, setChatsSearch } = useChat()
	return (
		<Form className="form-inline">
			<InputGroup className="w-100 bg-transparent">
				<Form.Control
					placeholder="Search"
					className="bg-transparent border border-dark border-end-0 no-shadow-change"
					onChange={({ target: { value } }) => {
						setChatsSearch(value)
					}}
					value={chatsSearch}
				/>
				<InputGroup.Text className="border border-dark border-start-0 bg-transparent">
					<FontAwesomeIcon icon={faSearch} />
				</InputGroup.Text>
			</InputGroup>
		</Form>
	)
}

export default SearchChats
