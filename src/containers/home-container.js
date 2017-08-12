import React from "react";
import SketchContainer from "../containers/sketch-game-container";
import MatchmakeContainer from "./matchmake-container";
import NavbarSketch from "../components/navbar.js";

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <NavbarSketch></NavbarSketch>

                <div className="container-fluid">

                    <MatchmakeContainer/>
                    <SketchContainer/>
                </div>
            </div>
        )
    }
}

export default HomeContainer;