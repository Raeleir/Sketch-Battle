import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import SketchNavbar from "../components/navbar.js";

class SketchNavbarCon extends React.Component {
    render() {
        return (
            <SketchNavbar user={this.props.user} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SketchNavbarCon);
