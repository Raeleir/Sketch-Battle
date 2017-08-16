import React from "react";
import autoBind from "react-autobind";
import Hangman from "../components/hangman";
import { Col } from "react-bootstrap";


class HangmanContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            playerWord: "",
            gameWord: "",
            guess: "",
            strikes: 0
        };
        autoBind(this);
    }

    componentDidUpdate() {
        //win condition code
        if(!this.state.playerWord.includes("_")) {
            console.log("YOU WIN");
        }

        //loss condition code
        if(this.state.strikes === 6) {
            console.log("YOU LOSE: ", this.state.strikes);
        }
    }

    startGame() {
        let context = this.refs.canvas.getContext('2d');
        //gallow tall piece
        context.beginPath();
        context.moveTo(100,10);
        context.lineTo(100,130);
        context.stroke();
        //gallow bottom
        context.beginPath();
        context.moveTo(70,130);
        context.lineTo(150,130);
        context.stroke();
        //gallow top
        context.beginPath();
        context.moveTo(100,10);
        context.lineTo(150,10);
        context.stroke();
        //hang
        context.beginPath();
        context.moveTo(150,10);
        context.lineTo(150,40);
        context.stroke();

        //
        //hardcoded word list...
        //switch to a dictionary api??
        //
        let gameWords = ["flower", "lamp","tiger", "sheep", "candle", "puppy","cactus","painting","lightning","phone",
                        "hospital","coffee","tea","zoo","baseball","koala","dress","headphones","turtle", "computer",
                        "typewriter", "paris","checkers","chess", "sunglasses", "door", "submarine", "army", "dragon",
                        "kayak"],
        //pick gameWord
            gameWord = gameWords[(Math.floor(Math.random() * gameWords.length))],
        //create playerWord
            playerWord = "";
        for(let i=0;i<gameWord.length;i++){
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
        if(word.includes(guess)) {
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
                i > 0 ? newPlayerWord = newPlayerWord.substr(0, playerWordIs[i]) + guess + newPlayerWord.substr(playerWordIs[i] + 1)
                      : newPlayerWord = playerWord.substr(0, playerWordIs[i]) + guess + playerWord.substr(playerWordIs[i] + 1);
            }
            this.setState({
                ...this.state,
                playerWord: newPlayerWord,
                guess: ""
            });

        //handle wrong guess
        } else {
            //add a strike
            console.log(this.state.strikes);
            let strikes = this.state.strikes;
            strikes++;
            this.setState({
                ...this.state,
                strikes: strikes
            });
            //draw a piece of the hangman
            let context = this.refs.canvas.getContext('2d');
            if(this.state.strikes === 0) {
                //HEAD
                context.beginPath();
                context.arc(150,50,10,0, Math.PI*2, false);
                context.stroke();
            } else if (this.state.strikes === 1) {
                //BODY
                context.beginPath();
                context.moveTo(150, 60);
                context.lineTo(150, 95);
                context.stroke();
            } else if (this.state.strikes === 2) {
                //LEFT ARM
                context.beginPath();
                context.moveTo(150, 67);
                context.lineTo(135, 80);
                context.stroke();
            } else if (this.state.strikes === 3) {
                //RIGHT ARM
                context.beginPath();
                context.moveTo(150, 67);
                context.lineTo(165, 80);
                context.stroke();
            } else if (this.state.strikes === 4) {
                //LEFT LEG
                context.beginPath();
                context.moveTo(150, 95);
                context.lineTo(135, 110);
                context.stroke();
            } else {
                //RIGHT LEG
                context.beginPath();
                context.moveTo(150, 95);
                context.lineTo(165, 110);
                context.stroke();
            }
        }
    }
    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }
    render() {
        return (
               <Col md={12}>
                <h1 className="sketch">Hangman</h1>
                <div className="sketch-pad-container">


                        <Col md={12} ref="test" className="hangman-output">
                            <canvas ref="canvas" id="hangman" height={160}/>
                    </Col>
                         <Hangman state={this.state}
                         startGame={this.startGame}
                         handleGuess={this.handleGuess}
                         handleChange={this.handleChange}
                    />
            </div>
           </Col>
        )
    }
}

export default HangmanContainer;