import React from "react";
import SketchContainer from "../containers/sketch-game-container";


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home connected</h1>
                <SketchContainer/>
            </div>
        )
    }
}

export default Home;