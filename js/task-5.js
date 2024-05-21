"use strict";
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
function changeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    const span = document.querySelector(".color");
    span.innerText = getRandomHexColor();
}
const button = document.querySelector(".change-color");
button.addEventListener("click", changeBgColor);
