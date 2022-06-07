const Display_Output:Element = document.querySelector("[data-display]")
const Subtract_BTN:Element = document.querySelector("[data-down]")
const Addition_BTN:Element = document.querySelector("[data-up]")

let Output:number = 0;

Subtract_BTN.addEventListener('click', ():void =>{
    Output--;
    Display_Output.innerHTML = Output.toString();
})
Addition_BTN.addEventListener('click', ():void =>{
    Output++;
    Display_Output.innerHTML = Output.toString();
})
