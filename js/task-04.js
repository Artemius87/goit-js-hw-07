const counterValue = document.querySelector("#value");
const decrementRef = document.querySelector("[data-action='decrement']");
const incrementRef = document.querySelector("[data-action='increment']");

let num = Number(counterValue.textContent);
console.log(num);

function increment() {
  counterValue.textContent = num += 1;
}
function decrement() {
  counterValue.textContent = num -= 1;
}

incrementRef.addEventListener("click", increment);
decrementRef.addEventListener("click", decrement);
