var Display_Output = document.querySelector("[data-display]");
var Subtract_BTN = document.querySelector("[data-down]");
var Addition_BTN = document.querySelector("[data-up]");
var Output = 0;
Subtract_BTN.addEventListener('click', function () {
    Output--;
    Display_Output.innerHTML = Output.toString();
});
Addition_BTN.addEventListener('click', function () {
    Output++;
    Display_Output.innerHTML = Output.toString();
});
