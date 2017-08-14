import React from 'react';
import { Col } from "react-bootstrap";

class HowTo extends React.Component {
    render() {
        return (
            <div>
                <Col md={4} mdOffset={1}>
                    <div className="how-to-flex ">
                        <h1>Sketch Battle</h1>
                        <p>battle out the best of the guess vs the best of the pen</p>
                    </div>
                </Col>
                <Col md={2}>
                    <div className="line center-block"></div>
                </Col>
            </div>
        );
    }
}

export default HowTo;