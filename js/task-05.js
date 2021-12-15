const outputRef = document.querySelector("#name-output");
const inputRef = document.querySelector("#name-input");

inputRef.addEventListener("input", (event) => {
  let text = event.target.value;
  if (text === "") {
    text = "незнакомец";
  }

  outputRef.textContent = text;
});
