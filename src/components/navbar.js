import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import {Link} from "react-router-dom";
import {Navbar, NavItem, Nav} from "react-bootstrap";
class SketchNavbar extends React.Component {

    render() {
       
        return (
            <Navbar collapseOnSelect className="nav-custom navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Sketch Battle</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>UserName: </NavItem>
                        <NavItem>Wins:</NavItem>
                        <NavItem>Losses: </NavItem>
                        <NavItem>Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SketchNavbar);
