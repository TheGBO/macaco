export const COLOUR_INT = 16777215;

export function intToColour(num){
    return "#"+num.toString(16);
}

export function colourToInt(colour){
    return parseInt(colour.substring(1), 16);
}

export function invertColour(colour){
    console.log(COLOUR_INT - colourToInt(colour));
    
    return intToColour(COLOUR_INT - colourToInt(colour));
}