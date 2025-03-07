function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const widget = document.querySelector(".widget");
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

widget.style.display = "flex";
widget.style.flexDirection = "column";
widget.style.alignItems = "center";

  
changeColorButton.style.backgroundColor = "#4E75FF";
changeColorButton.style.width = "148px";
changeColorButton.style.padding = "8px 16px";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.border = "none";
changeColorButton.style.color = "#FFFFFF";

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});