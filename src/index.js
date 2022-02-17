import React from "react";
import ReactDOM from "react-dom";
import './styles.scss';
import a4 from './assets/a4.mp3';
import b4 from './assets/b4.mp3';
import c4 from './assets/c4.mp3';
import d4 from './assets/d4.mp3';
import e4 from './assets/e4.mp3';
import f4 from './assets/f4.mp3';
import g4 from './assets/g4.mp3';
import g42 from './assets/g-4.mp3';
import a5 from './assets/a-5.mp3';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.keyPressToButton = this.keyPressToButton.bind(this);
        this.playAudio = this.playAudio.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    keyPressToButton(key) {
        document.getElementById(key).click();
    }

    handleKeyPress(event) {
        switch (event.keyCode) {
            case 81: 
                event.preventDefault();
                this.keyPressToButton("Q");
                break;

            case 87:
                event.preventDefault();
                this.keyPressToButton("W");
                break;

            case 69:
                event.preventDefault();
                this.keyPressToButton("E");
                break;

            case 65:
                event.preventDefault();
                this.keyPressToButton("A");
                break;

            case 83:
                event.preventDefault();
                this.keyPressToButton("S");
                break;

            case 68:
                event.preventDefault();
                this.keyPressToButton("D");
                break;

            case 90:
                event.preventDefault();
                this.keyPressToButton("Z");
                break;

            case 88:
                event.preventDefault();
                this.keyPressToButton("X");
                break;

            case 67:
                event.preventDefault();
                this.keyPressToButton("C");
                break;

            default:
                break;
        }
    }

    playAudio(audio) {
        const audios = [a4, b4, c4, d4, e4, f4, g4, g42, a5];
        new Audio(audios[audio]).play();
    }

    render() {
        return (
            <div id="drum-machine">
                <div id="display">

                </div>
                <div id="drumpad">
                    <button className="drum-pad" id="Q" onClick={() => this.playAudio(0)}>Q</button>
                    <button className="drum-pad" id="W" onClick={() => this.playAudio(1)}>W</button>
                    <button className="drum-pad" id="E" onClick={() => this.playAudio(2)}>E</button>
                    <button className="drum-pad" id="A" onClick={() => this.playAudio(3)}>A</button>
                    <button className="drum-pad" id="S" onClick={() => this.playAudio(4)}>S</button>
                    <button className="drum-pad" id="D" onClick={() => this.playAudio(5)}>D</button>
                    <button className="drum-pad" id="Z" onClick={() => this.playAudio(6)}>Z</button>
                    <button className="drum-pad" id="X" onClick={() => this.playAudio(7)}>X</button>
                    <button className="drum-pad" id="C" onClick={() => this.playAudio(8)}>C</button>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="app">
                <DrumMachine />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById("root")
)