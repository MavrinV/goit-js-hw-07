const form = document.querySelector(".login-form");

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "10px";
form.style.maxWidth = "300px";
form.style.margin = "20px auto";
form.style.padding = "20px";
form.style.border = "1px solid #ccc";
form.style.borderRadius = "8px";
form.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";

const inputs = form.querySelectorAll("input");
inputs.forEach(input => {
  input.style.padding = "8px";
 input.style.border = "1px solid";
    input.style.width = "100%"; 
  input.style.borderRadius = "4px";
});

const button = form.querySelector("button");
button.style.padding = "10px";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.cursor = "pointer";
button.style.fontSize = "16px";
button.style.transition = "background-color 0.3s";

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0056b3";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#007bff";
});



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All fields must be filled!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
});
