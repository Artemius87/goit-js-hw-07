const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const craeteRef = document.querySelector('[data-action="render"]');
const clearRef = document.querySelector('[data-action="destroy"]');

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divRef = document.createElement("div");
    divRef.classList.add("box-size");
    divRef.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;
    boxesRef.append(divRef);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

clearRef.addEventListener("click", destroyBoxes);

craeteRef.addEventListener("click", (event) => createBoxes(1));

// inputRef.addEventListener("input", (event) => {
//   let amount = event.target.value;
//   console.log(amount);
//   return amount;
// });
