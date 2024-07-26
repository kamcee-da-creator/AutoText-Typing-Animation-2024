const bodyElement = document.querySelector("body");
const container = document.querySelector(".container");
const career = [
  "youtuber",
  "webdeveloper",
  "Graphics Designer",
  "Social Media Manager",
];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText(){
    container.innerHTML = ` <h1>I am a ${career[careerIndex].slice(0,characterIndex)}</h1>`;
characterIndex ++
if (characterIndex === career[careerIndex].length){
    careerIndex++
    characterIndex = 0;
    if(careerIndex === career.length){
        careerIndex = 0;
    }
}
setTimeout(updateText,400);
}

// this works using arrays so i am putting the arrays in the h1 elemets
