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
        this.state = {
            text: '',
            volume: 0.5
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.keyPressToButton = this.keyPressToButton.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.onChange = this.onChange.bind(this);
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

    playAudio(id, text) {
        document.getElementById(id).volume = this.state.volume;
        document.getElementById(id).currentTime = 0;
        document.getElementById(id).play();
        this.setState({
            text: text,
        });
    }

    onChange = (event) => {
       this.setState({
        volume: event.target.value
       });
    };


    render() {
        return (
            <div id="drum-machine">
                <div id="title">
                    <h1>Drum Machine</h1>
                </div>
                <div id="drumpad">
                <div id="display">
                    <h2>{this.state.text}</h2>
                </div>
                <div id="volume">
                    <input type="range" min="0" max="1" step="0.01" value={this.state.volume} onChange={this.onChange} id="volume" />
                </div>
                    <button className="drum-pad" id="a4" onClick={() => this.playAudio("Q", "TILE: A4")}><audio src={a4} className="clip" id="Q" />Q</button>
                    <button className="drum-pad" id="b4" onClick={() => this.playAudio("W", "TILE: B4")}><audio src={b4} className="clip" id="W" />W</button>
                    <button className="drum-pad" id="c4" onClick={() => this.playAudio("E", "TILE: C4")}><audio src={c4} className="clip" id="E" />E</button>
                    <button className="drum-pad" id="d4" onClick={() => this.playAudio("A", "TILE: D4")}><audio src={d4} className="clip" id="A" />A</button>
                    <button className="drum-pad" id="e4" onClick={() => this.playAudio("S", "TILE: E4")}><audio src={e4} className="clip" id="S" />S</button>
                    <button className="drum-pad" id="f4" onClick={() => this.playAudio("D", "TILE: F4")}><audio src={f4} className="clip" id="D" />D</button>
                    <button className="drum-pad" id="g4" onClick={() => this.playAudio("Z", "TILE: G4")}><audio src={g4} className="clip" id="Z" />Z</button>
                    <button className="drum-pad" id="g42" onClick={() => this.playAudio("X", "TILE: G42")}><audio src={g42} className="clip" id="X" />X</button>
                    <button className="drum-pad" id="a5" onClick={() => this.playAudio("C", "TILE: A5")}><audio src={a5} className="clip" id="C" />C</button>
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