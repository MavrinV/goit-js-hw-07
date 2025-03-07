const categoriesList = document.querySelector("#categories"); 
const categoryItems = categoriesList.querySelectorAll(".item"); 

console.log(`Number of categories: ${categoryItems.length}`); 

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent; 
  const elementsCount = item.querySelectorAll("ul li").length; 
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});

categoriesList.style.listStyle = "none";
categoriesList.style.padding = "0";
categoriesList.style.maxWidth = "400px";
categoriesList.style.margin = "20px auto";
categoriesList.style.backgroundColor = "#F6F6FE";

categoryItems.forEach((item) => {
  item.style.backgroundColor = "#f8f9fa";
  item.style.padding = "15px";
  item.style.marginBottom = "10px";
  item.style.borderRadius = "8px";
  item.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
});

const titles = document.querySelectorAll(".item h2");
titles.forEach((title) => {
  title.style.color = "#2E2F42";
  title.style.marginBottom = "10px";
});