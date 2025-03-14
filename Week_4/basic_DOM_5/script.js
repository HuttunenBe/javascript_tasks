const button = document.getElementById("button");
const paragraph = document.getElementById("colorChanger");
const input = document.getElementById("colorInput");

input.addEventListener("input", () => {
  paragraph.style.color = input.value;
});

function random(max) {
  return Math.floor(Math.random() * max);
}
function background() {
  const randomColor =
    "rgb(" + random(256) + "," + random(256) + "," + random(256) + ")";
  document.body.style.backgroundColor = randomColor;
}

function textColor() {
  const Color = input;
}

button.addEventListener("click", background);
