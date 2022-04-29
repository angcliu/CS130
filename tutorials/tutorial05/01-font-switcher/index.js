const makeBigger = () => {
   document.querySelector("p").style.fontSize = String(size + 1) + "px"
   document.querySelector("h1").style.fontSize = String(size + 3) + "px"
   size = size + 1;
};

const makeSmaller = () => {
   document.querySelector("p").style.fontSize = String(size - 1) + "px"
   document.querySelector("h1").style.fontSize = String(size - 3) + "px"
   size = size - 1;

};

var size = 12;

document.querySelector("p").style.fontSize = String(size) + "px"
document.querySelector("h1").style.fontSize = String(size) + "px"


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

