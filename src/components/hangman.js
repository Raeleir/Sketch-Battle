import React from "react";
import { Col } from "react-bootstrap";

class Hangman extends React.Component {
    render() {
        return (
            <Col md={12}>
                <h1 className="sketch">Hangman</h1>
                <div className="sketch-pad-container">
                    <h3 className="prompt">{this.props.state.dashThing}</h3>
                    <div className="row">
                        <Col md={12} className="hangman-output">
                        </Col>
                        <Col md={12} className="text-center">

                            <input
                                value={this.props.state.guess}
                                onChange={(event) => {
                                    this.props.handleChange("guess", event);
                                }}
                                className="guess-input input-lg"
                                placeholder="Letter"
                            />

                            <span
                                onClick={() => {
                                    this.props.startGame();
                                }}
                                className="guess-button">
                                Start Game
                            </span>
                            <button  onClick={() => {
                                    this.props.handleGuess(this.props.state.gameWord, this.props.state.guess);
                                }}
                            >
                                Guess
                            </button>

                        </Col>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Hangman;


