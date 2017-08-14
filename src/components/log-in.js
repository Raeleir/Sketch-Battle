import React from "react";
import {Link} from "react-router-dom";
class Login extends React.Component {
    render() {
        return (

            <div className="col-md-4">
                <div className="how-to-flex">
                    <h1>Login</h1>
                    <form
                        onSubmit={(event) => {
                        event.preventDefault();
                        this
                            .props
                            .handleSubmit(this.props.input.username, this.props.input.password)
                    }}className="form">

                        <input
                            value={this.props.input.username}
                            onChange={(event) => {
                            this
                                .props
                                .handleChange("username", event)
                        }}
                            type="text"
                            autoFocus="autoFocus"
                            className="login-inputs"
                            placeholder="username"/>

                        <input
                            value={this.props.input.password}
                            onChange={(event) => {
                            this
                                .props
                                .handleChange("password", event)
                        }}
                            type="password" placeholder="password"className="login-inputs"/>
                        <div className="row">
                            <div className="col-md-6 text-center">

                                <Link to="/signup">
                                    <p className="create-account-link pull-left">Create an Account</p>
                                </Link>

                            <div className="col-md-6">
                                <button type="submit" className="pull-right login-button">Login</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
}

export default Login;