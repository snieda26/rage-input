const body = document.querySelector("body");
const emoji = document.querySelector(".slide-emoji");
const input = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");



input.oninput = () => {
    let sliderValue = input.value;
    thumb.style.left = sliderValue * 10 + '%';
    bar.style.width = sliderValue * 10 + '%';
}