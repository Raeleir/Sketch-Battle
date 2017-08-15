import React from "react";

import MatchmakeContainer from "./matchmake-container";
import NavbarSketchCon from "./navbar-container.js";
import { Grid } from "react-bootstrap";

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <NavbarSketchCon/>
                <Grid fluid>
                    <MatchmakeContainer/>

                </Grid>
            </div>
        )
    }
}

export default HomeContainer;