const button = document.getElementById("buttonCounter");
const paragraph = document.getElementById("counterDisplay");

let clicks = 0;

function countInput() {
  clicks++;
  paragraph.textContent = clicks;
}

button.addEventListener("click", countInput);
