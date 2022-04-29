const makeDesert = () => {
   var string = "." + current_selection
   document.querySelector(string).className = "desert"
   current_selection = "desert"
};

const makeOcean = () => {
   var string = "." + current_selection
   document.querySelector(string).className = "ocean"
   current_selection = "ocean"
};

const makeHighContrast = () => {
   var string = "." + current_selection
   document.querySelector(string).className = "high-contrast"
   current_selection = "high-contrast"
};

const makeDefault = () => {
   var string = "." + current_selection
   document.querySelector(string).className = "container"
   current_selection = "container"
   
};



var current_selection = "container"

document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHighContrast);


