const animalList = ["pig", "cat", "horse", "fish", "guinea pig"];
const input = document.getElementById("animalInput");
const button = document.getElementById("sortAnimals");
const addNewAnimal = document.getElementsByClassName("add-animal");
[0];

function displayAnimals() { 
  addNewAnimal.innerHTML = "";
  for (let i in animalList) {
    const newItem = document.createElement("li");
    newItem.textContent = animalList[i];
    addNewAnimal.appendChild(newItem);
  }
}

function updateAnimalList() {
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  list.appendChild(newItem);
  input.value = "";
}

button.addEventListener("click", updateAnimalList);

displayAnimals();
