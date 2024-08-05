import * as monkey from "./monkey.js";
import MacacadaInfo from "./macacadaInfo.js";

var strokes = document.getElementById("strokes");
var plainText = document.getElementById("plaintext");
var monkeyIMG = document.getElementById("magago");




document.getElementById("macacar").addEventListener("click", (e) => {
    monkey.setElements(monkeyIMG, plainText, strokes);
    let amount = document.getElementById("amount").value;
    let rainbowMode = document.getElementById("rainbow-mode").checked;
    let interval = document.getElementById("interval-ms").value;

    let minCharCode = parseInt(document.getElementById("char-code-min").value, 10);
    let maxCharCode = parseInt(document.getElementById("char-code-max").value, 10);
    let monkeySettings = new MacacadaInfo(amount, rainbowMode, interval, minCharCode, maxCharCode);
    monkey.macacar(monkeySettings);
});
