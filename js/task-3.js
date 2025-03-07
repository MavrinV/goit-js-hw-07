const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const name = event.target.value.trim();
  output.textContent = name === "" ? "Anonymous" : name;
});


input.style.width = "360px";
input.style.height = "40px";
input.style.borderRadius = "8px";
input.style.border = "1px solid #2E2F42";
