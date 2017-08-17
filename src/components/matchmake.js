import React from "react";
import { Col } from "react-bootstrap";

class Matchmake extends React.Component {
    render() {
        return (
            <Col md={12}>
                <div className="how-to-flex">
                    <h1 className="findplayer">Find a Player!</h1>
                    <p>Battle it out pictionary-style</p>
                    <p className="text-center center-block findplayer-button">Play!</p>
                </div>
            </Col>
        )
    }
}

export default Matchmake;