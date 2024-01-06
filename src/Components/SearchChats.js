import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Form, InputGroup } from "react-bootstrap"

const SearchChats = () => {
	return (
		<Form className="form-inline">
			<InputGroup className="w-100 bg-transparent">
				<Form.Control
					placeholder="Search"
					className="bg-transparent border border-dark border-end-0 no-shadow-change"
				/>
				<InputGroup.Text className="border border-dark border-start-0 bg-transparent">
					<FontAwesomeIcon icon={faSearch} />
				</InputGroup.Text>
			</InputGroup>
		</Form>
	)
}

export default SearchChats
