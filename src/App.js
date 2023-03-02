import React, { useEffect, useState } from "react";
import "../public/stylesheet.css";

// On button press : Play audio from child audio tag
// Child has an id to get element by

const App = () => {
    const [display, setDisplay] = useState("Hi, I'm a display")

    const PlayAudio = (id) => {
        const Audio = document.getElementById(id);
        Audio.play();
    };

    const handleAudio = (id) => {
        const button = document.getElementById(id).parentElement;
        const text = button.id;
        setDisplay(text);
        PlayAudio(id);
    }

    useEffect( () => {
        document.addEventListener("keydown", (e) => {
            let key = e.key.toUpperCase();
            const VALID_KEYS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
            if (VALID_KEYS.includes(key))
                handleAudio(key);
        })
        console.log("Hello from useEffect");
        return () => {
            document.removeEventListener("keydown");
            console.log("Goodbye eventListener!")
        }
    }, [])

    return (
        <div id="drum-machine">
            <h1>The Druminator 9000</h1>
            <div id="display">
                <h2>{display}</h2>
            </div>
            <div id="pad-container">
                <button className="drum-pad" id="Heater-one" onClick={() => handleAudio("Q")}>
                    Q
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                        className="clip"
                        id="Q"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Heater-two" onClick={() => handleAudio("W")}>
                    W
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                        className="clip"
                        id="W"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Heater-three" onClick={() => handleAudio("E")}>
                    E
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                        className="clip"
                        id="E"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Heater-four" onClick={() => handleAudio("A")}>
                    A
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                        className="clip"
                        id="A"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Clap" onClick={() => handleAudio("S")}>
                    S
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                        className="clip"
                        id="S"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Open-HH" onClick={() => handleAudio("D")}>
                    D
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                        className="clip"
                        id="D"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Kick-n'-Hat" onClick={() => handleAudio("Z")}>
                    Z
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                        className="clip"
                        id="Z"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Kick" onClick={() => handleAudio("X")}>
                    X
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                        className="clip"
                        id="X"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
                <button className="drum-pad" id="Closed-HH" onClick={() => handleAudio("C")}>
                    C
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                        className="clip"
                        id="C"
                    >
                        Your browser does not support html audio tags
                    </audio>
                </button>
            </div>
        </div>
    )
}

export default App