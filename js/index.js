var strokes = document.getElementById("strokes");
var plainText = document.getElementById("plaintext");
var magago = document.getElementById("magago");

const COLOUR_INT = 16777215;

function intToColour(num){
    return "#"+num.toString(16);;
}

function setMonkeyGif(typing){
    console.log("setting");
    if(typing){
        magago.src = 'img/typing-monkey.gif';
    }
    else{
        magago.src = 'img/idle-monkey.jpg';
    }
}

function monkeyFinger(rainbowMode, minCharCode, maxCharCode){
    
    let decimalCode = Math.floor(Math.random() * (maxCharCode-minCharCode) + minCharCode);
    let randomSign = String.fromCharCode(decimalCode);

    console.log(`${minCharCode}-${maxCharCode}`);
    console.log(decimalCode);
    console.log(randomSign);

    
    let button = document.createElement("button");
    button.textContent = randomSign;
    button.classList.add("stroke-btn");

    if(rainbowMode){
        let randomColourInt = Math.floor(Math.random() * COLOUR_INT);
        let invertRandColour = COLOUR_INT - randomColourInt;
        button.style.backgroundColor = intToColour(randomColourInt);
        button.style.color = intToColour(invertRandColour);
    }

    let strokeSound = new Audio("sound/keystroke.mp3");
    strokeSound.volume = 0.125
    strokeSound.play();
    plainText.textContent += randomSign;
    strokes.appendChild(button);
}

function macacar(){
    setMonkeyGif(true);
    let strokes = document.getElementById("amount").value;
    let rainbowMode = document.getElementById("rainbow-mode").checked;
    let interval = document.getElementById("interval-slider").value;

    let minCharCode = parseInt(document.getElementById("char-code-min").value, 10);
    let maxCharCode = parseInt(document.getElementById("char-code-max").value, 10);
    
    new Audio("sound/magago.m4a").play();
    for(let i = 0; i < strokes; i++)
    {
        setTimeout(() => {
            monkeyFinger(rainbowMode, minCharCode, maxCharCode);
            if(i == strokes - 1){
                setMonkeyGif(false);
            }
        }, i * interval);
    }
}

document.getElementById("macacar").addEventListener("click", (e) => {
    macacar();
    
});
