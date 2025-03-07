// Exercise 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

const myAlphabetLength = () => {
  if (myAlphabet >= 5) {
    console.log("Array length is sufficient");
  } else {
    console.log("Array length is too short");
  }
};
myAlphabetLength();

// Exercise 2: Iterate over the planets array and log each planet with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
planets.forEach((planet, index) => {
  console.log("planet:", planet, "Index:", index);
});

// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];
mixedValues.forEach((item, index) => {
  console.log("Item", item, "Index", index, "Type", typeof item);
});

// Exercise 4: Log each item of myArr without using a loop
let myArr = [1, "Dog", 3.14, false];
console.log(myArr);

// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ["Fox", "Deer", "Owl", "Bear"];
let reserve2Animals = ["Bear", "Wolf", "Eagle", "Fox"];

const commonAnimals = reserve1Animals.filter((item) =>
  reserve2Animals.includes(item)
);
console.log(commonAnimals);

// Exercise 6: Log each letter of names from the animalNames array
let animalNames = ["Lion", "Tiger", "Panda"];
const secretMessage = animalNames.map((animalType) => {
  return animalType[0];
});

console.log(secretMessage);

// Exercise 7: Filter only positive temperatures from the temperatures array
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
let positiveTemperatures = [];

for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > 0) {
    positiveTemperatures.push(temperatures[i]);
  }
}

console.log(positiveTemperatures);

// Exercise 8: Find the index of "Fox" in the zooAnimals array
let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
let foxIndex = zooAnimals.indexOf("Fox");
console.log("Index of Fox: " + foxIndex);

console.log(zooAnimals);

// Exercise 9: Try to find the index of an animal not in zooAnimals
let penguinIndex = zooAnimals.indexOf("Penguin");
if (penguinIndex === -1) {
  console.log("Penguin is not in the zoo.");
} else {
  console.log("Index of Penguin: " + penguinIndex);
}

// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
let index = zooAnimals.indexOf("Giraffe");
zooAnimals[index] = "Cheetah";
console.log(zooAnimals);

// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ["Zebra", "Leopard", "Elephant", "Gazelle"];
safariAnimals.sort();
console.log(safariAnimals);

// Exercise 12: Reverse the order of the safariAnimals array
safariAnimals.reverse();
console.log(safariAnimals);

// Exercise 13: Check if "Tiger" is in zooAnimals
let tigerInZoo = zooAnimals.includes("Tiger");
console.log(tigerInZoo);

// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];
for (const [i, value] of attendees.entries()) {
  if (value === "John") console.log(i, value);
}

// Exercise 15: Convert all names in attendees array to uppercase
let upperCaseAttendees = attendees.map((f) => f.toUpperCase());
console.log(upperCaseAttendees);

// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ["Deer", "Bear", "Wolf"];
let farmAnimals = ["Cow", "Sheep", "Goat"];
let allAnimals = forestAnimals.concat(farmAnimals);
console.log(allAnimals);

// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ["Eagle", "Owl", "Hawk", "Sparrow", "Penguin"];
birdSpecies.shift();
birdSpecies.pop();
console.log(birdSpecies);

// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 25, 27);
console.log(numbers);

// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];
let newPrice = prices.map(function (price) {
  return price * 1.1; //same as increase calue by 10%
});
console.log(newPrice);

// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ["apple", "banana", "cherry", "kiwi", "strawberry"];
let longWords = words.filter(function (word) {
  return word.length > 5;
});

console.log(longWords);
