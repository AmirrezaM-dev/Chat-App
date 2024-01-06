import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Forgot = () => {
	return (
		<Container className="d-flex flex-column">
			<Row className="no-gutters text-center align-items-center justify-content-center min-vh-100">
				<Col sm={12} md={6} lg={5} xl={4}>
					<h1 className="font-weight-bold">Reset credentials</h1>
					<p className="text-dark mb-3">
						Enter your email address to reset credentials.
					</p>
					<Form className="mb-3">
						<Form.Group className="mb-3">
							<Form.Control
								type="email"
								placeholder="Enter your email address"
							/>
						</Form.Group>
						<Button
							variant="primary"
							size="lg"
							className="btn-block text-uppercase font-weight-semibold"
							type="submit"
						>
							Send reset link
						</Button>
					</Form>
					<p>
						<Link className="font-weight-semibold" to="/signin">
							Sign In
						</Link>
						&nbsp;
						<Link className="font-weight-semibold" to="/signup">
							Sign Up
						</Link>
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Forgot
