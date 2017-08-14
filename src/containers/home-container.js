import React from "react";
import SketchContainer from "../containers/sketch-game-container";
import MatchmakeContainer from "./matchmake-container";
import NavbarSketch from "../components/navbar.js";
import { Grid } from "react-bootstrap";

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <NavbarSketch/>
                <Grid fluid>
                    <MatchmakeContainer/>
                    <SketchContainer/>
                </Grid>
            </div>
        )
    }
}

export default HomeContainer;