const inputRef = document.querySelector("#validation-input");
const dataLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", (event) => {
  let inputLength = event.target.value.length;
  if (inputLength !== dataLength) {
    inputRef.classList.add("invalid");
  } else inputRef.classList.remove("invalid"), inputRef.classList.add("valid");
});
