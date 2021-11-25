const items = document.querySelectorAll(".item");
console.log(`в списке - ${items.length} категории.`);
items.forEach((item) => {
  const h2Ref = item.querySelector("h2");
  const liRef = item.querySelectorAll("li");
  console.log(
    `Категория: ${h2Ref.textContent}, Количество элементов: ${liRef.length}`
  );
});
