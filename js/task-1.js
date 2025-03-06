const categoriesList = document.querySelector("#categories"); // Находим ul#categories
const categoryItems = categoriesList.querySelectorAll(".item"); // Получаем все li.item

console.log(`Number of categories: ${categoryItems.length}`); // Выводим количество категорий

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent; // Получаем текст заголовка <h2>
  const elementsCount = item.querySelectorAll("ul li").length; // Подсчитываем количество <li> внутри категории
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
