const p = document.getElementById("content");
const button = document.getElementById("helloButton");

function toggleVisbility() {
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}

button.addEventListener("click", toggleVisbility);
