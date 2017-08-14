import React from "react";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

import autoBind from "react-autobind";
import Login from "../components/log-in";
import HowTo from "../components/how-to.js";

class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({[key]: event.target.value});
    }
    handleSubmit(username, password) {
        this
            .props
            .login(username, password);
        this.setState({username: "", password: ""})
    }
    componentDidUpdate(){
        if(this.props.token !==""){
            window.location.href="/home"
            console.log("here")
        }

    }
    render() {
        return (
            <div className="container">
                <div className="row">
<<<<<<< HEAD
                   <HowTo/>
                   <Login/>
=======
                    <HowTo></HowTo>
                    <Login
                        input={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}/>
>>>>>>> create-login
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(LoginContainer);