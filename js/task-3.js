const input = document.querySelector("input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value.trim()) {
    nameOutput.textContent = input.value.trim();
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
