function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Style для контейнера
controls.style.display = "flex";
controls.style.padding = "32px";
controls.style.borderRadius = "8px";
controls.style.backgroundColor = "#F6F6FE";
controls.style.width = "486px";
controls.style.gap = "16px"; 
controls.style.alignItems = "center";
controls.style.justifyContent = "center";
// Style для кнопок
input.style.width = "150px";
input.style.borderRadius = "8px";
input.style.border = "1px solid #808080";
input.style.height = "40px";
input.style.textAlign = "center";

createButton.style.width = "120px";
createButton.style.borderRadius = "8px";
createButton.style.backgroundColor = "#4E75FF";
createButton.style.border = "none";
createButton.style.color = "#FFFFFF";
createButton.style.height = "40px";

destroyButton.style.width = "120px";
destroyButton.style.borderRadius = "8px";
destroyButton.style.backgroundColor = "#FF4E4E";
destroyButton.style.border = "none";
destroyButton.style.color = "#FFFFFF";
destroyButton.style.height = "40px";



createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    box.style.borderRadius = "5px";
    box.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; 
}
