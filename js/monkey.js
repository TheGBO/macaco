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

export function macacar(config){
    setMonkeyGif(true);
    
    new Audio("sound/magago.m4a").play();
    for(let i = 0; i < config.amount; i++)
    {
        setTimeout(() => {
            monkeyFinger(config);
            if(i == config.amount - 1){
                setMonkeyGif(false);
            }
        }, i * config.intervalMs);
    }
}

function monkeyFinger(config){

    let decimalCode = Math.floor(Math.random() * (config.maxCharCode-config.minCharCode) + config.minCharCode);
    let randomSign = String.fromCharCode(decimalCode);

    //insert sign
    insertSign(randomSign, config);
    if(config.spaceRate > Math.random()){
        insertSign(" ", config);
    }

    //play keystroke audio
    let strokeSound = new Audio("sound/keystroke.mp3");
    strokeSound.volume = 0.125;
    strokeSound.play();
    
}

//sign means any unicode character in this context
function insertSign(randomSign, config){
    //create strokeDiv
    let strokeDiv = document.createElement("div");
    strokeDiv.classList.add("stroke");
    //set strokeDiv colour
    if(config.rainbowMode){
        let randomColourInt = Math.floor(Math.random() * colourUtils.COLOUR_INT);
        let colour = colourUtils.intToColour(randomColourInt);
        strokeDiv.style.backgroundColor = colour
        strokeDiv.style.color = colourUtils.invertColour(colour);
    }
    //assign text content to the plainText and strokeDiv
    strokeDiv.textContent = randomSign;
    plainText.textContent += randomSign;
    strokes.appendChild(strokeDiv);
}

