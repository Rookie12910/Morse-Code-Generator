import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const MORSE_CODE_DICT = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ", ": "--..--",
    ".": ".-.-.-",
    "?": "..--..",
    "/": "-..-.",
    "-": "-....-",
    "(": "-.--.",
    ")": "-.--.-",
  };

  const MORSE_CODE_REVERSE_DICT = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "--..--": ", ",
    ".-.-.-": ".",
    "..--..": "?",
    "-..-.": "/",
    "-....-": "-",
    "-.--.": "(",
    "-.--.-": ")"
  };
  
  
  const getOutput = () => {
    let Output = "";
    if(input[0] === "." || input[0] === "-") {
      Output = morseToText(input);
    }
    else {
    let upperCaseInput = input.toUpperCase();
    for (let char of upperCaseInput) {
      if(MORSE_CODE_DICT[char]) Output += MORSE_CODE_DICT[char]+" ";
      else Output += char;
    }
  }
    setOutput(Output.trim())
  };

  const morseToText = (morseCode) => {
    return morseCode.split(' ')  
        .map(symbol => MORSE_CODE_REVERSE_DICT[symbol]) 
        .join('').toLowerCase(); 
  }

  return (
    <div>
      <div>
        <p className="welcomeText">TextToMorse & MorseToText!</p>
        <input className="input" placeholder="Enter text/Morse-Code here..." onChange={(e) => {setInput(e.target.value);}}  />
        <button className = "button1" onClick={getOutput}>Translate</button>
      </div>
      <div className='box'>
          <p className="outputText"> {output} </p>
      </div>
    </div>
  );
}

export default App;
