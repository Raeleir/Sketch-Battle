import React from "react";
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
                            {/*<Link to="/login ">Login</Link>
                      
                            <Link to="/signup ">Signup</Link>*/}
                         
                           <Nav pullRight>
                
                     <NavItem>UserName: Charlie</NavItem>
         
                     <NavItem>Wins: </NavItem>
                 
                     <NavItem>Loses: </NavItem>
                  
                      <NavItem>Logout</NavItem>
                    
                         
                       
                        </Nav>

                        </Navbar.Collapse>
                    </Navbar>
        )
    }
}

export default SketchNavbar;