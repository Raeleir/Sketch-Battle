import React from "react";
import {Link} from "react-router-dom";

class Signup extends React.Component {
    render() {
        return (

            <div className="col-md-12">
                <div className="how-to-flex">
                    <h1>Create Login</h1>
                    <div className="form">
                        <input
                            autoFocus="autoFocus"
                            className="login-inputs"
                            placeholder="create username"/>
                        <input className="login-inputs" placeholder="create password"/>
                        <div className="row">

                            <div className="col-md-12">
                                <p className="text-center center-block signup-button btn-lg">Login</p>
                                <Link to="/login">
                                    <p className="text-center">Not ready? Return Home</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;