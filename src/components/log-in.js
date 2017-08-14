import React from "react";
import {Link} from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Login extends React.Component {
    render() {
        return (
            <Col md={4}>
                <div className="how-to-flex">
                    <h1>Login</h1>

                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            this.props.handleSubmit(this.props.input.username, this.props.input.password);
                        }}
                        className="form"
                    >

                        <input
                            value={this.props.input.username}
                            onChange={(event) => {
                                this.props.handleChange("username", event)
                            }}
                            type="text"
                            autoFocus="autoFocus"
                            className="login-inputs"
                            placeholder="username"
                        />

                        <input
                            value={this.props.input.password}
                            onChange={(event) => {
                                this.props.handleChange("password", event)
                            }}
                            type="password"
                            placeholder="password"
                            className="login-inputs"
                        />
                        <Row>
                            <Col md={6} className="text-center">
                                <Link to="/signup">
                                    <p className="create-account-link pull-left">Create an Account</p>
                                </Link>
                            </Col>
                            <Col md={6}>
                                <button type="submit" className="pull-right login-button">Login</button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Col>
        )
    }
}

export default Login;