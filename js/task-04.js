const counterValue = document.querySelector("#value");

let value = Number(counterValue.textContent);

const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');
decr.addEventListener("click", decrement);
incr.addEventListener("click", increment);

function increment() {
  counterValue.textContent = value += 1;
}
function decrement() {
  counterValue.textContent = value -= 1;
}
