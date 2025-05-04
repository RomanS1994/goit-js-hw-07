function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function createMarkup(value) {
  let size = 30;
  let markup = "";
  for (let i = 1; i <= value; i++) {
    const color = getRandomHexColor();
    markup += `<div class="box" style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10;
  }
  return markup;
}

function handlerClickCreate() {
  const count = refs.input.value;
  if (count >= 1 && count < 100) {
    const markup = createMarkup(count);
    refs.boxes.insertAdjacentHTML("afterbegin", markup);
  } else {
    refs.input.value = "";
    alert("Enter correct value: 1 - 100");
  }
}

function handlerClickDestroy() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

refs.buttonDestroy.addEventListener("click", handlerClickDestroy);
refs.buttonCreate.addEventListener("click", handlerClickCreate);
