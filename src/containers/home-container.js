import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
// import MatchmakeContainer from "./matchmake-container";
import NavbarSketchCon from "./navbar-container.js";
import { Grid } from "react-bootstrap";
import HangmanContainer from "./hangman-container";

class HomeContainer extends React.Component {
     componentDidUpdate(){
         console.log(this.props)
        if(this.props.token==""){
            this.props.history.push("/");

        }
    }
    render() {
        return (
            <div>
                <NavbarSketchCon/>
                <Grid fluid>
                    {/*<MatchmakeContainer/>*/}
                    <HangmanContainer/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(HomeContainer);