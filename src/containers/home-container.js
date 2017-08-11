import React from "react";
import SketchContainer from "../containers/sketch-game-container";
import MatchmakeContainer from "./matchmake-container";


class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>HomeContainer connected</h1>
                <MatchmakeContainer/>
                <SketchContainer/>
            </div>
        )
    }
}

export default HomeContainer;