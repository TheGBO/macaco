import * as monkey from "./monkey.js";
import MacacadaInfo from "./macacadaInfo.js";


//outputs
var strokes = document.getElementById("strokes");
var plainText = document.getElementById("plaintext");
var monkeyIMG = document.getElementById("magago");

//inputs
var amount = document.getElementById("amount");
var rainbowMode = document.getElementById("rainbow-mode");
var intervalMs = document.getElementById("interval-ms");
var minCharCode = document.getElementById("char-code-min");
var maxCharCode = document.getElementById("char-code-max");
var spaceRate = document.getElementById("space-rate");

document.getElementById("macacar").addEventListener("click", (e) => {
    monkey.setElements(monkeyIMG, plainText, strokes);

    let config = {
        amount: amount.value,
        rainbowMode: rainbowMode.checked,
        intervalMs: intervalMs.value,
        minCharCode: parseInt(minCharCode.value, 10),
        maxCharCode: parseInt(maxCharCode.value, 10),
        spaceRate: Math.abs(spaceRate.value/100)
    };

    let monkeySettings = new MacacadaInfo(config);
    monkey.macacar(monkeySettings);
});
