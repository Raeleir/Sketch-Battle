import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">LOGO/BRAND</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/signup">SIGNUP</Link>
                <h4>Username: Wins / Losses</h4>
                <button>Logout</button>
            </div>
        )
    }
}

export default Navbar;