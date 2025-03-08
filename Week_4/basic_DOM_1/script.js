const text = document.getElementById("content");
const button = document.getElementById("first_button");
const button2 = document.getElementById("button2");

console.log(text.textContent);
console.log(button.textContent);

function changeText() {
  console.log("Button was clicked");
  text.textContent = "Hello World";
  button.textContent = "I was clicked";
}
function changeBack() {
  console.log("changing back");
  text.textContent = "This is a pppparagraph.";
  button.textContent = "Back again";
}

button.addEventListener("click", changeText);
button2.addEventListener("click", changeBack);
