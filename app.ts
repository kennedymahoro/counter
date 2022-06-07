export{}
const DisplayOutput:Element = document.querySelector("[data-display]")
const SubtractBTN:Element = document.querySelector("[data-down]")
const AdditionBTN:Element = document.querySelector("[data-up]")

let output:number = 0;

SubtractBTN.addEventListener('click', ():void =>{
    output--;
    DisplayOutput.innerHTML = output.toString();
})
AdditionBTN.addEventListener('click', ():void =>{
    output++;
    DisplayOutput.innerHTML = output.toString();
})
