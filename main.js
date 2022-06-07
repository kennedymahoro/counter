const DisplayOutput = document.querySelector("[data-display]")
const SubtractBTN = document.querySelector("[data-down]")
const AdditionBTN = document.querySelector("[data-up]")

let output = 0; // value that will be outputed

SubtractBTN.addEventListener('click',()=>{
    output--;
    DisplayOutput.innerHTML = output;
})
AdditionBTN.addEventListener('click',()=>{
    output++;
    DisplayOutput.innerHTML = output;
})