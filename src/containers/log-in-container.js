import React from "react";
import Login from "../components/log-in";
import HowTo from "../components/how-to.js";

class LoginContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                   <HowTo/>
                   <Login/>
                </div>
            </div>
        )
    }
}

export default LoginContainer;