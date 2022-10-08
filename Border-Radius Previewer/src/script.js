//DOM
const shape = document.getElementById("shape");

const topLeft = document.getElementById("topleft");
const topRight = document.getElementById("topright");
const bottomLeft = document.getElementById("bottomleft");
const bottomRight = document.getElementById("bottomright");

const copyText = document.getElementById("copy-text");

//Variables
let topLeftValue;
let topRightValue;
let bottomLeftValue;
let bottomRightValue;

//Functions
function updateShape () {
    topLeftValue = topLeft.value;
    topRightValue = topRight.value;
    bottomLeftValue = bottomLeft.value;
    bottomRightValue = bottomRight.value;

    shape.style.borderTopLeftRadius = `${topLeftValue}px`;
    shape.style.borderTopRightRadius = `${topRightValue}px`;
    shape.style.borderBottomLeftRadius = `${bottomLeftValue}px`;
    shape.style.borderBottomRightRadius = `${bottomRightValue}px`;

    if (topLeftValue == topRightValue && topLeftValue == bottomRightValue && topLeftValue == bottomLeftValue) {
        copyText.value = `border-radius: ${topLeftValue}px;`;
    } else {
        copyText.value = `border-radius: ${topLeftValue}px ${topRightValue}px ${bottomRightValue}px ${bottomLeftValue}px;`;
    }
}

function copyToClipboard () {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

document.addEventListener("change", updateShape);