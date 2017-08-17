import React from "react";
import autoBind from "react-autobind";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index";
import Hangman from "../components/hangman";
import {Col} from "react-bootstrap";
class HangmanContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            playerWord: "_",
            gameWord: "",
            guess: "",
            strikes: 0
        };
        autoBind(this);
    }
    componentDidMount() {
        let context = this
            .refs
            .canvas
            .getContext('2d');
        //gallow tall piece
        context.beginPath();
        context.moveTo(100, 40);
        context.lineTo(100, 260);
        context.stroke();
        //gallow bottom
        context.beginPath();
        context.moveTo(70, 160);
        context.lineTo(150, 160);
        context.stroke();
        //gallow top
        context.beginPath();
        context.moveTo(100, 40);
        context.lineTo(150, 40);
        context.stroke();
        //hang
        context.beginPath();
        context.moveTo(150, 40);
        context.lineTo(150, 70);
        context.stroke();
    }
    componentDidUpdate() {
        let context = this
            .refs
            .canvas
            .getContext('2d');
        //win condition code
        if (!this.state.playerWord.includes("_")) {
            this
                .props
                .upWins(this.props.user.username);
            context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
            alert("YOU WIN");
            this.setState({playerWord: "_", gameWord: "", guess: "", strikes: 0})

        }
        //loss condition code
        if (this.state.strikes === 6) {
               context.beginPath();
                context.moveTo(150, 125);
                context.lineTo(165, 140);
                context.stroke();
            this
                .props
                .upLosses(this.props.user.username);
           
            alert("YOU LOSE");
 
            this.setState({playerWord: "_", gameWord: "", guess: "", strikes: 0})
        }
    }
    startGame() {
         let context = this
            .refs
            .canvas
            .getContext('2d');
         context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        this.setState({
            ...this.state,
            strikes: 0
        });
       
        //gallow tall piece
        context.beginPath();
        context.moveTo(100, 40);
        context.lineTo(100, 260);
        context.stroke();
        //gallow bottom
        context.beginPath();
        context.moveTo(70, 160);
        context.lineTo(150, 160);
        context.stroke();
        //gallow top
        context.beginPath();
        context.moveTo(100, 40);
        context.lineTo(150, 40);
        context.stroke();
        //hang
        context.beginPath();
        context.moveTo(150, 40);
        context.lineTo(150, 70);
        context.stroke();
        //hardcoded word list... switch to a dictionary api??
        //
        let gameWords = [
                "flower",
                "lamp",
                "tiger",
                "sheep",
                "candle",
                "puppy",
                "cactus",
                "painting",
                "lightning",
                "phone",
                "hospital",
                "coffee",
                "tea",
                "zoo",
                "baseball",
                "koala",
                "dress",
                "headphones",
                "turtle",
                "computer",
                "typewriter",
                "paris",
                "checkers",
                "chess",
                "sunglasses",
                "door",
                "submarine",
                "army",
                "dragon",
                "kayak"
            ],
            //pick gameWord
            gameWord = gameWords[(Math.floor(Math.random() * gameWords.length))],
            //create playerWord
            playerWord = "";
        for (let i = 0; i < gameWord.length; i++) {
            playerWord += "_ ";
        }
        this.setState({
            ...this.state,
            playerWord: playerWord,
            gameWord: gameWord
        });
        //
        //temporary production log
        console.log(gameWord);
        //
    };
    handleGuess(word, letter) {
        let guess = letter.toLowerCase(),
            editWord = word;
        //handle right guess
        if (word.includes(guess) && guess != "") {
            let exists = true,
                playerWordIs = [];
            //handle multiples of a letter
            while (exists === true) {
                let editWordI = editWord.indexOf(guess);
                playerWordIs.push(editWordI * 2);
                editWord = editWord.substr(0, editWordI) + " " + editWord.substr(editWordI + 1);
                exists = editWord.includes(guess);
            }
            //handle playerWord update
            let playerWord = this.state.playerWord,
                newPlayerWord = "";
            for (let i = 0; i < playerWordIs.length; i++) {
                i > 0
                    ? newPlayerWord = newPlayerWord.substr(0, playerWordIs[i]) + guess + newPlayerWord.substr(playerWordIs[i] + 1)
                    : newPlayerWord = playerWord.substr(0, playerWordIs[i]) + guess + playerWord.substr(playerWordIs[i] + 1);
            }
            this.setState({
                ...this.state,
                playerWord: newPlayerWord,
                guess: ""
            });
            //handle wrong guess
        } else if (!word.includes(guess) && guess != "") {
            //add a strike
            console.log(this.state.strikes);
            let strikes = this.state.strikes;
            strikes++;
            this.setState({
                ...this.state,
                guess: "",
                strikes: strikes
            });
            //draw a piece of the hangman
            let context = this
                .refs
                .canvas
                .getContext('2d');
            if (this.state.strikes === 0) {
                //HEAD
                context.beginPath();
                context.arc(150, 80, 10, 0, Math.PI * 2, false);
                context.stroke();
            } else if (this.state.strikes === 1) {
                //BODY
                context.beginPath();
                context.moveTo(150, 90);
                context.lineTo(150, 125);
                context.stroke();
            } else if (this.state.strikes === 2) {
                //LEFT ARM
                context.beginPath();
                context.moveTo(150, 97);
                context.lineTo(135, 110);
                context.stroke();
            } else if (this.state.strikes === 3) {
                //RIGHT ARM
                context.beginPath();
                context.moveTo(150, 97);
                context.lineTo(165, 110);
                context.stroke();
            } else if (this.state.strikes === 4) {
                //LEFT LEG
                context.beginPath();
                context.moveTo(150, 125);
                context.lineTo(135, 140);
                context.stroke();
            } else if (this.state.strikes === 5) {
                //RIGHT LEG
                context.beginPath();
                context.moveTo(150, 125);
                context.lineTo(165, 140);
                context.stroke();

            } else {
                console.log("hello")
            }
        }
    }
    handleChange(key, event) {
        this.setState({[key]: event.target.value})
    }
    render() {
        return (
            <Col md={12}>
                <h1 className="sketch">Hangman</h1>
                <div className="sketch-pad-container">
                    <Col md={12} ref="test" className="hangman-output">
                        <canvas ref="canvas" id="hangman" height={160}/>
                    </Col>
                    <Hangman
                        state={this.state}
                        startGame={this.startGame}
                        handleGuess={this.handleGuess}
                        handleChange={this.handleChange}/>
                </div>
            </Col>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, actionCreators)(HangmanContainer);