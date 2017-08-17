import React from "react";

import MatchmakeContainer from "./matchmake-container";
import NavbarSketchCon from "./navbar-container.js";
import { Grid } from "react-bootstrap";
import HangmanContainer from "./hangman-container";

class HomeContainer extends React.Component {
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

export default HomeContainer;