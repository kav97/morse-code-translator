import {morseCodeMap} from "./data/morse-object.js";

// query selectors
const text = document.querySelector("#text");
const translateButton = document.querySelector("#button");
const morseDisplayed = document.querySelector(".translator-presented");

// functions needed to carry out the whole test
// string enetered needs to be lowercase and split into an array of its letters
const splitTextIntoArray = (string) => {
  return string.toLowerCase().split("");
};

// each letter of the seperated string needs to be mapped to the object keys  
const mapMorseOntoArray = (seperatedString) => {
  let morseArray = seperatedString.map((letter) => morseCodeMap[letter]);
  return morseArray.join(" ");
};

// call string split array inside map morse array
export const translateToMorse = (string) => {
  return mapMorseOntoArray(splitTextIntoArray(string));
};

// event listener waits for the translate button to be fired before running the code
translateButton.addEventListener("click", () => {
    morseDisplayed.innerHTML = translateToMorse(text.value);
});