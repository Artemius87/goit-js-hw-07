const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const createItems = (arr) => {
  const listArr = arr.map((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    return li;
  });
  listRef.append(...listArr);
};
createItems(ingredients);
