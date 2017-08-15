import React from "react";
import autoBind from "react-autobind";
import Hangman from "../components/hangman";


class HangmanContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            dashThing: "",
            gameWord: "",
            guess: ""
        };
        autoBind(this);
    }
    startGame() {
        let hangmanArr = ["flower", "lamp","tiger", "sheep", "candle", "puppy","cactus","painting","lightning","phone",
                        "hospital","coffee","tea","zoo","baseball","koala","dress","headphones","turtle", "computer",
                        "typewriter", "paris","checkers","chess", "sunglasses", "door", "submarine", "army", "dragon", "kayak"];
        let gameWord = hangmanArr[(Math.floor(Math.random() * hangmanArr.length))];
        let dashes = "";
        for(let i=0;i<gameWord.length;i++){
            dashes += "_ ";
        }
        this.setState({
            ...this.state,
            dashThing: dashes,
            gameWord: gameWord
        });
        console.log(dashes);
        console.log(gameWord);
    };
    handleGuess(word, guess) {
        let modWord = word;
        let go = false;
        modWord.includes(guess) ? go = true : go = false;
        while(go === true) {
            let index = (modWord.indexOf(guess)) * 2;
            let dash = this.state.dashThing;
            let newDash = dash.substr(0, index) + guess + dash.substr(index + 1);
            this.setState({
                dashThing: newDash
            });
            modWord = modWord.substr(0, index/2) + " " + modWord.substr(index/2 + 1);
            go = modWord.includes(guess);
        }
    }
    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }
    render() {
        return (
            <div>
                <Hangman state={this.state} startGame={this.startGame} handleGuess={this.handleGuess} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default HangmanContainer;