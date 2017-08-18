import React from "react";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

import autoBind from "react-autobind";
import Login from "../components/log-in";
import HowTo from "../components/how-to.js";
import { Grid, Row } from "react-bootstrap";

class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            attemptLogin: false
        };
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({[key]: event.target.value});
    }
    handleSubmit(username, password) {
        this.props.login(username, password);
        this.setState({username: "", password: "", attemptLogin:true})
    }
    componentDidUpdate(){
        if(this.props.token !=="" && this.state.attemptLogin){
            this.props.history.push("/home");
            
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <HowTo/>
                    <Login
                        input={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(LoginContainer);