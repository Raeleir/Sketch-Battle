import React from "react";
import {Link} from "react-router-dom";

class Signup extends React.Component {
    render() {
        return (

            <div className="col-md-12">
                <div className="how-to-flex">
                    <h1>Create Login</h1>
                    <form onSubmit={(event)=>{
    event.preventDefault();
    this.props.handleSubmit(this.props.input.username, this.props.input.password);
    
    }} className="form"> 
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
                            placeholder="create username"/>
                        <input
                            value={this.props.input.password}
                            onChange={(event) => {
                            this
                                .props
                                .handleChange("password", event)
                        }}
                            className="login-inputs"
                            placeholder="create password"type="password"/>
                        <div className="row">

                            <div className="col-md-12">
                                <button type="submit" className="text-center center-block signup-button btn-lg">Signup</button>
                                <Link to="/login ">
                                    <p className="text-center">Not ready? Return Home</p>
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
}

export default Signup;