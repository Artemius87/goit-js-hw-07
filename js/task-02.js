const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

console.log(ingredients);
const ingId = document.querySelector("#ingredients");
console.log(ingId);
// const ulRef = document.querySelector("ul");
// console.log(ulRef);
const liRef = document.createElement("li");
ingId.append(liRef);
