import React from "react";
import Matchmake from "../components/matchmake";


class MatchmakeContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>MatchmakeContainer connected</h1>
                <Matchmake/>
            </div>
        )
    }
}

export default MatchmakeContainer;