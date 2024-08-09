//equivalent of #ffffff
export const COLOUR_INT = 16777215;

//turn an integer into a hexadecimal colour code
export function intToColour(num){
    return "#"+num.toString(16).padStart(6, '0').toUpperCase();
}

//turn hexadecimal code into an integer
export function colourToInt(colour){
    return parseInt(colour.substring(1), 16);
}

//invert colour
export function invertColour(colour){
    console.log(COLOUR_INT - colourToInt(colour));
    
    return intToColour(COLOUR_INT - colourToInt(colour));
}