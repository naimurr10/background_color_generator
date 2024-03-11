let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let rgbBtn = document.getElementById("rgb-btn");
let hexBtn = document.getElementById("hex-btn");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}



function displayRGBValues() {
    let rgb1 = hexToRGB(color1.value);
    let rgb2 = hexToRGB(color2.value);
    css.textContent = `linear-gradient from right to left, rgb1(${rgb1}), rgb2(${rgb2}));`;
}

function displayHexValues() {
    css.textContent = `linear-gradient from right to left, hex1${color1.value}, hex2${color2.value});`;
}

function hexToRGB(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

rgbBtn.addEventListener("click", displayRGBValues);
hexBtn.addEventListener("click", displayHexValues);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
