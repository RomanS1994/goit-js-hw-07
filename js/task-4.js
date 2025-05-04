const form = document.querySelector(".login-form");
const obj = {};
function handlerSubmit(event) {
  event.preventDefault();

  obj[event.target.elements.email.name] =
    event.target.elements.email.value.trim();
  obj[event.target.elements.password.name] =
    event.target.elements.password.value.trim();

  if (
    event.target.elements.email.value.trim() &&
    event.target.elements.password.value.trim()
  ) {
    console.log(obj);
  } else {
    alert("All form fields must be filled in");
  }
  form.reset();
}

form.addEventListener("submit", handlerSubmit);
