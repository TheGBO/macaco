var mainDiv = document.getElementById("main-div");
var plainText = document.getElementById("plaintext");
var maxASCII = 127;
var minASCII = 33;
const COLOUR_INT = 16777215;

function intToColour(num){
    return "#"+num.toString(16);;
}

function monkeyFinger(rainbowMode){
    let button = document.createElement("button");

    let randomSign = String.fromCharCode(Math.floor(Math.random() * (maxASCII-minASCII) + minASCII));
    button.textContent = randomSign;
    plainText.textContent += randomSign;

    if(rainbowMode){
        let randomColourInt = Math.floor(Math.random() * COLOUR_INT);
        let invertRandColour = COLOUR_INT - randomColourInt;
        button.style.backgroundColor = intToColour(randomColourInt);
        button.style.color = intToColour(invertRandColour);
    }
    new Audio("sound/keystroke.mp3").play();
    mainDiv.appendChild(button);
}

function macacar(){
    let macacadas = document.getElementById("amount").value;
    let rainbowMode = document.getElementById("rainbow-mode").checked;
    let interval = document.getElementById("interval-slider").value;
    console.log(rainbowMode)
    
    new Audio("sound/magago.m4a").play();
    for(let i = 0; i < macacadas; i++)
    {
        setTimeout(() => {
            monkeyFinger(rainbowMode);
        }, i * interval);
    }
}

document.getElementById("macacar").addEventListener("click", (e) => {
    macacar();
});