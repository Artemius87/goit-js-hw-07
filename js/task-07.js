const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

function changeSize() {
  textRef.style.fontSize = this.value + "px";
}

inputRef.addEventListener("input", changeSize);
