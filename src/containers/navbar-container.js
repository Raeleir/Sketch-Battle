import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import SketchNavbar from "../components/navbar.js";

class SketchNavbarCon extends React.Component {
   
        componentWillMount(){
        if(localStorage.getItem("token")){
            this.props.setToken(localStorage.getItem("token"));
        }
        if(localStorage.getItem("user")){
            this.props.loadUserInfo(localStorage.getItem("user"));
        }
    } 
   
    render() {

        console.log(this.props)
        return (
            <SketchNavbar user={this.props.user} handleLogout={this.props.logout} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SketchNavbarCon);
