import React from "react";
import Sketch from "../components/sketch-game";


class SketchContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>SketchContainer connected</h1>
                <Sketch/>
            </div>
        )
    }
}

export default SketchContainer;