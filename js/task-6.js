function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", addBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size + "px";
    div.style.height = size + "px";
    elements.push(div);
    size += 10;
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function addBoxes() {
  const normalizedValue = Number(input.value);
  if (normalizedValue < 1 || normalizedValue > 100) {
    return alert("number is out of range");
  }
  destroyBoxes();
  createBoxes(normalizedValue);
  input.value = "";
}
