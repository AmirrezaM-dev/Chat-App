import React from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const SignIn = () => {
	return (
		<Container className="d-flex flex-column">
			<Row className="no-gutters text-center align-items-center justify-content-center min-vh-100">
				<Col sm={12} md={6} lg={5} xl={4}>
					<h1 className="font-weight-bold">Sign In</h1>
					<p className="text-dark mb-3">
						We are Different, We Make You Different.
					</p>
					<Form className="mb-3">
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
						<Form.Group className="mb-3">
							<Form.Check
								className="text-start"
								type={"checkbox"}
								label={`Remember me`}
							/>
							<Link className="font-size-sm" to="/forgot">
								Reset credentials
							</Link>
						</Form.Group>
						<Button
							variant="primary"
							size="lg"
							className="btn-block text-uppercase font-weight-semibold"
							type="submit"
						>
							Sign In
						</Button>
					</Form>
					<p>
						Don't have an account?&nbsp;
						<Link className="font-weight-semibold" to="/signup">
							Sign Up
						</Link>
						.
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default SignIn
