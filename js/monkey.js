import MacacadaInfo from "./macacadaInfo.js";
import * as colourUtils from "./colourUtils.js";

var monkeyIMG;
var plainText;
var strokes;

export function setElements(imageElement, textElement, strokesElement){
    monkeyIMG = imageElement;
    plainText = textElement;
    strokes = strokesElement;
}

function setMonkeyGif(typing){
    console.log("setting");
    console.log(monkeyIMG);
    if(typing){
        monkeyIMG.src = 'img/typing-monkey.gif';
    }
    else{
        monkeyIMG.src = 'img/idle-monkey.jpg';
    }
}

export function macacar(m){
    setMonkeyGif(true);
    
    new Audio("sound/magago.m4a").play();
    for(let i = 0; i < m.amount; i++)
    {
        setTimeout(() => {
            monkeyFinger(m);
            if(i == m.amount - 1){
                setMonkeyGif(false);
            }
        }, i * m.intervalMs);
    }
}

function monkeyFinger(m){
    
    let decimalCode = Math.floor(Math.random() * (m.maxCharCode-m.minCharCode) + m.minCharCode);
    let randomSign = String.fromCharCode(decimalCode);

    console.log(m);
    console.log(`${m.minCharCode}-${m.maxCharCode}`);
    console.log(decimalCode);
    console.log(randomSign);
    
    let strokeDiv = document.createElement("div");
    strokeDiv.textContent = randomSign;
    strokeDiv.classList.add("stroke");

    if(m.rainbowMode){
        let randomColourInt = Math.floor(Math.random() * colourUtils.COLOUR_INT);
        let colour = colourUtils.intToColour(randomColourInt);
        strokeDiv.style.backgroundColor = colour
        strokeDiv.style.color = colourUtils.invertColour(colour);
    }

    let strokeSound = new Audio("sound/keystroke.mp3");
    strokeSound.volume = 0.125;
    strokeSound.play();
    plainText.textContent += randomSign;
    strokes.appendChild(strokeDiv);
}

