// Select tags and store in variable
const fill = document.querySelector(".filling")
const input = document.querySelector("input")
const output = document.querySelector("output")

// Add eventListener to read value from input 
input.addEventListener("input" , (event) => {
    setValue(event.target.value)
});

// define setvalue function 
function setValue(val){

    // Change number insie box according to input 
    output.value = val;

    // Add style to fill the glass according to input 
    fill.setAttribute("style" , `--filling:  ${val}%;`);
}