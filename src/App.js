import React, { useEffect } from "react";

// On button press : Play audio from child audio tag
// Child has an id to get element by

const App = () => {
    const PlayAudio = (id) => {
        const Audio = document.getElementById(id)
        Audio.play();
    };

    useEffect( () => {
        document.addEventListener("keydown", (e) => {
            console.log(e)
        })
        console.log("Hello from useEffect");
    }, [])

    return (
        <div id="drum-machine">
            <h1>The Druminator 9000</h1>
            <div id="display">
                <h2>Hi, I'm a display</h2>
            </div>
            <button className="drum-pad" id="Heater-one" onClick={() => PlayAudio("Q")}>
                Q
                <audio  className="clip" id="Q">
                    <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></source>
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="Heater-two" onClick={() => PlayAudio("W")}>
                W
                <audio 
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" 
                    className="clip" 
                    id="W"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="Heater-three" onClick={() => PlayAudio("E")}>
                E
                <audio 
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" 
                    className="clip" 
                    id="E"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="Heater-four" onClick={() => PlayAudio("A")}>
                A
                <audio 
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" 
                    className="clip" 
                    id="A"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="ADUIO" onClick={() => PlayAudio("S")}>
                S
                <audio 
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" 
                    className="clip" 
                    id="S"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="ADUIO" onClick={() => PlayAudio("D")}>
                D
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" 
                    className="clip" 
                    id="D"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="ADUIO" onClick={() => PlayAudio("Z")}>
                Z
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" 
                    className="clip" 
                    id="Z"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="ADUIO" onClick={() => PlayAudio("X")}>
                X
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" 
                    className="clip" 
                    id="X"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
            <button className="drum-pad" id="ADUIO" onClick={() => PlayAudio("C")}>
                C
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" 
                    className="clip" 
                    id="C"
                >
                    Your browser does not support html audio tags
                </audio>
            </button>
        </div>
    )
}

export default App