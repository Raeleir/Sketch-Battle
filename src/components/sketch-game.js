import React from "react";
import { Col } from "react-bootstrap";

class Sketch extends React.Component {
    render() {
        return (
            <Col md={12}>
                <h1 className="sketch">Draw Battle</h1>
                <div className="sketch-pad-container">
                    <h3 className="prompt">PROMPT APPEARS HERE INSTEAD OF THIS</h3>
                    <div className="row">

                        <Col md={12} className="sketchpad">
                        </Col>

                        <Col md={12} className="text-center">
                            <input className="guess-input input-lg" placeholder="what is it?"/>
                            <span className="guess-button">Guess</span>
                        </Col>

                    </div>
                </div>
            </Col>
        )
    }
}

export default Sketch;