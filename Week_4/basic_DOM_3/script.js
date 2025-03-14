const input = document.getElementById("typeHere");
const div = document.getElementById("displayText");

input.oninput = showResult;
function showResult() {
  div.textContent = this.value;
}

