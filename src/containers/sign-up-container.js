import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

import autoBind from "react-autobind";
import Signup from "../components/sign-up";


class SignupContainer extends React.Component {
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
             this.props.signup(username,password);
        this.setState({username: "", password: ""})
    }

    render() {
        return (
         
              
                <Signup input={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(SignupContainer);