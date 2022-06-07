"use strict";
var DisplayOutput = document.querySelector("[data-display]");
var SubtractBTN = document.querySelector("[data-down]");
var AdditionBTN = document.querySelector("[data-up]");
var output = 0;
SubtractBTN.addEventListener('click', function () {
    output--;
    DisplayOutput.innerHTML = output.toString();
});
AdditionBTN.addEventListener('click', function () {
    output++;
    DisplayOutput.innerHTML = output.toString();
});
