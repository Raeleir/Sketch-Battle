import React from "react";
import Login from "../components/log-in";


class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>LoginContainer connected</h1>
                <Login/>
            </div>
        )
    }
}

export default LoginContainer;