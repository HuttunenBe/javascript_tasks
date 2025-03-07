/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

function User(username, email) {
  this.username = username; 
  this.email = email;
 
  this.showInfo = function () {
    console.log(`username: ${this.username}, email = ${this.email}`);
  };
}
const user1 = new User("Huttube", "sdsd");
user1.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(this.email);
  }
}

const user = new User("Hanna", "Hanna@email.com");
console.log(user.email);

user.changeEmail("huttube@luukku.com");
console.log(user);

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const buttonToggle = document.getElementById("buttonToggle");

let theme = {
  name: "light",
  isActive: true,
};

buttonToggle.addEventListener("click", function () {
  if (theme.name === "light") {
    theme.name = "dark";
    theme.isActive = false;
    document.body.className = "dark";
  } else {
    theme.name = "light";
    theme.isActive = true;
    document.body.className = "light";
  }
  console.log(theme);
});

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

let counter = {
  value: 0,
};

const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const total = document.querySelector("#total");
console.log(button2);
console.log(button3);

const addAndSubtract = () => (total.textContent = counter.value);

button2.addEventListener("click", () => {
  counter.value++;
  addAndSubtract();
});

button3.addEventListener("click", () => {
  counter.value--;
  addAndSubtract();
});

console.log(button3);

addAndSubtract();

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

let product = {
  name: "Coffee machine",
  price: 20,
  quantity: 1,
};

const quantityInput = document.querySelector("#quantity");
const updateButton = document.querySelector("#update");
const totalPrice = document.querySelector("#totalPrice");

const updateTotalPrice = () => {
  const quantity = Number(quantityInput.value);

  const total = product.price * quantity;
  totalPrice.textContent = total;
};

updateButton.addEventListener("click", updateTotalPrice);

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const addButton2 = document.querySelector("#addButton2");
const taskList = document.querySelector("#taskList");

addButton2.addEventListener("click", function () {
  const taskTitle = document.querySelector("#taskTitle").value;
  const taskDescription = document.querySelector("#taskDescription").value;
  const taskCompleted = document.querySelector("#taskCompleted").checked;

  const newTask = new Task(taskTitle, taskDescription, taskCompleted);

  const itemList = document.createElement("li");
  const itemText = document.createElement("span");

  itemText.textContent = `${newTask.title}: ${
    newTask.description
  } - Completed: ${newTask.completed ? "Yes" : "No"}`;

  itemList.appendChild(itemText);
  taskList.appendChild(itemList);

  document.querySelector("#taskTitle").value = "";
  document.querySelector("#taskDescription").value = "";
  document.querySelector("#taskCompleted").checked = false;
});

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

const weatherBtn = document.querySelector("#weatherBtn");

const weatherApp = {
  fetchWeather(city) {
    const apiKey = "6742fad531c14cbba7e195200250303";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })

      .then((data) => {
        const tempCelsius = data.current.temp_c;
        const weatherDescription = data.current.condition.text;
        const humidity = data.current.humidity;

        displayWeather({
          name: city,
          temp: tempCelsius,
          description: weatherDescription,
          humidity: humidity,
        });
      })
      .catch((error) => console.error("Fetching weather data failed:", error));
  },
};

function displayWeather(data) {
  document.getElementById("error-message").textContent = "";
  document.getElementById("city-name").textContent = `Weather in ${data.name}`;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${data.temp}°C`;
  document.getElementById(
    "description"
  ).textContent = `Condition: ${data.description}`;
  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.humidity}%`;
}

weatherBtn.addEventListener("click", function () {
  const city = document.getElementById("city").value;
  weatherApp.fetchWeather(city);
});

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.age = function () {
    return new Date().getFullYear() - this.year;
  };
}

const carButton = document.querySelector("#carButton");
const carInfo = document.querySelector("#carInfo");

carButton.addEventListener("click", function () {
  const carBrand = document.querySelector("#carBrand").value;
  const carModel = document.querySelector("#carModel").value;
  const carYear = document.querySelector("#carYear").value;

  const newCar = new Car(carBrand, carModel, carYear);

  carInfo.textContent = `${newCar.brand} ${
    newCar.model
  } is ${newCar.age()} years old.`;

  document.querySelector("#carBrand").value = "";
  document.querySelector("#carModel").value = "";
  document.querySelector("#carYear").value = "";
});

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

const users = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 65 },
  { name: "Amy", score: 95 },
  { name: "Ana", score: 80 },
];

function sortAndDisplayList() {
  users.sort((a, b) => b.score - a.score);
  displayUsers();
}

function displayUsers() {
  const userList = document.querySelector("#userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${user.name}, Score: ${user.score}`;

    userList.appendChild(li);
  });
}

const sortingButton = document.querySelector("#sortingButton");
sortingButton.addEventListener("click", sortAndDisplayList);

displayUsers();

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  let newItem = input.value;
  input.value = "";

  let itemList = document.createElement("li");
  let itemText = document.createElement("span");
  let itemBtn = document.createElement("button");

  itemList.appendChild(itemText);
  itemText.textContent = newItem;

  itemList.appendChild(itemBtn);
  itemBtn.textContent = "Delete";
  list.appendChild(itemList);

  itemBtn.onclick = function () {
    list.removeChild(itemList);
  };

  input.focus();
};

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

const posts = [
  { title: "Post 1", content: "This is the content of post 1", likes: 0 },
  { title: "Post 2", content: "This is the content of post 2", likes: 3 },
  { title: "Post 3", content: "This is the content of post 3", likes: 5 },
];

document.querySelectorAll(".post").forEach((post) => {
  const postId = post.dataset.postId;
  const button = post.querySelector(".postRatingButton");
  const count = post.querySelector(".postRatingCount");

  const postData = posts.find(
    (p) => p.title === post.querySelector(".postTitle").textContent
  );

  count.textContent = postData.likes;

  button.addEventListener("click", () => {
    postData.likes++;
    count.textContent = postData.likes;
  });
});

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = Number(salary);

  this.increaseSalary = function (percent) {
    this.salary += this.salary * (percent / 100);
  };
}

const newEmpolyee = new Employee("John", "boss", "5000");
newEmpolyee.increaseSalary(10);
console.log(newEmpolyee.salary);

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

const display = document.querySelector("#timerDisplay");
const start = document.querySelector("#start");

const timer = {
  seconds: 0,

  start: function () {
    let sec = 0;
    this.isRunning = true;
    start.disabled = true;

    this.timer = setInterval(() => {
      display.innerHTML = "00:" + (sec < 10 ? "0" : "") + sec;
      sec++;
    }, 1000);
  },

  pause: function () {
    clearInterval(this.timer);
  },
};

start.addEventListener("click", function () {
  timer.start();
});

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];

function addBook() {
  let bookTitle = document.querySelector("#bookTitle").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  let bookPages = document.querySelector("#bookPages").value;

  if (bookTitle && bookAuthor && bookPages) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages);
    library.push(newBook);

    displayBooks();
  }
}

const displayBooks = () => {
  let booksList = document.querySelector("#booksList");
  booksList.innerHTML = "";

  library.forEach((book) => {
    let li = document.createElement("li");
    li.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;

    booksList.appendChild(li);
  });
};

document.querySelector("button").addEventListener("click", addBook);

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

const foxTracker = {
  foxes: [],
};

function addFox() {
  let foxName = document.querySelector("#nameInputFox").value;
  let foxLocation = document.querySelector("#foxLocation").value;

  if (foxName && foxLocation) {
    foxTracker.foxes.push({ name: foxName, location: foxLocation });

    document.querySelector("#nameInputFox").value = "";
    document.querySelector("#foxLocation").value = "";

    displayFoxes();
  }
}

const displayFoxes = () => {
  let foxList = document.querySelector("#foxesList");
  foxList.innerHTML = "";

  foxTracker.foxes.forEach((fox) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${fox.name}, Location: ${fox.location}`;

    foxList.appendChild(li);
  });
};

document.querySelector("button").addEventListener("click", addFox);
