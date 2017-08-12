import React from "react";
import {Link} from "react-router-dom";
class Login extends React.Component {
    render() {
        return (

            <div className="col-md-6">
                <div className="how-to-flex">
                    <h1>Login</h1>
                    <div className="form">
                        <input placeholder="username"/>
                        <input placeholder="password"/>
                        <div className="row">
                            <div className="col-md-6 text-center">
                               <Link to="/signup "><p className="create-account-link pull-left">Create an Account</p></Link> 
                            </div>
                            <div className="col-md-6">
                                <p className="pull-right login-button">Login</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Login;