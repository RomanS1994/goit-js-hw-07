const categoryList = document.querySelector("#categories");

const categoriesLength = categoryList.children.length;

console.log(`Number of categories: ${categoriesLength}`);

const categoryElements = [...categoryList.children];

categoryElements.forEach((el) => {
  console.log(`Categori: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
