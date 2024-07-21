const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(e) {
  const trimedValue = e.target.value.trim();
  if (trimedValue !== "") {
    output.textContent = trimedValue;
  } else {
    output.textContent = "Anonymous";
  }
}
