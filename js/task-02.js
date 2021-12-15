const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const createElement = (arr) => {
  const listArr = arr.map((el) => {
    const liRef = document.createElement("li");
    liRef.textContent = el;
    return liRef;
  });
  listRef.append(...listArr);
};

createElement(ingredients);
