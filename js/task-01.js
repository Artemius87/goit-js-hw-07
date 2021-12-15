const liRef = document.querySelectorAll(".item");
console.log(`В списке ${liRef.length} категории.`);
liRef.forEach((item) => {
  const h2Ref = item.querySelector("h2");
  const liRef = item.querySelectorAll("li");
  console.log(
    `Категория: ${h2Ref.textContent}, Количество элементов: ${liRef.length}`
  );
});
