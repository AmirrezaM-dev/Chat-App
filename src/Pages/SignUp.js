import React from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const SignUp = () => {
	return (
		<Container className="d-flex flex-column">
			<Row className="no-gutters text-center align-items-center justify-content-center min-vh-100">
				<Col sm={12} md={6} lg={5} xl={4}>
					<h1 className="font-weight-bold">Sign Up</h1>
					<p className="text-dark mb-3">
						We are Different, We Make You Different.
					</p>
					<Form className="mb-3">
						<Form.Group className="mb-3">
							<Form.Control
								type="text"
								placeholder="Enter your name"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="email"
								placeholder="Enter your email address"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control
								type="password"
								placeholder="Enter your password"
							/>
						</Form.Group>
						<Button
							variant="primary"
							size="lg"
							className="btn-block text-uppercase font-weight-semibold"
							type="submit"
						>
							Sign Up
						</Button>
					</Form>
					<p>
						Already have an account?&nbsp;
						<Link className="font-weight-semibold" to="/signin">
							Sign In
						</Link>
						.
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default SignUp
