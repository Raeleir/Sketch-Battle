import React from "react";

class Sketch extends React.Component {
    render() {
        return (

            <div className="col-md-12">
                <h1 className="sketch">Draw Battle</h1>
                <div className="sketch-pad-container">
                    <h3 className="prompt">PROMPT APPEARS HERE INSTEAD OF THIS</h3>
                    <div className="row">
                        <div className="col-md-12 sketchpad">

                        </div>
                          <div className="col-md-12 text-center" >
                             <input className="guess-input input-lg" placeholder="what is it?"/>
                        <span className="guess-button">Guess</span>
                        </div>
                       
                    </div>
                </div>
            </div>

        )
    }
}

export default Sketch;