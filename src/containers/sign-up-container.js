import React from "react";
import Signup from "../components/sign-up";


class SignupContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>SignupContainer connected</h1>
                <Signup/>
            </div>
        )
    }
}

export default SignupContainer;