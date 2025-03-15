/* Task 1 */

localStorage.setItem("message", "Hello, LocalStorage!");
let message = localStorage.getItem("message");
console.log(message);

/* Task 2 */

const userSettings = {
  theme: "dark",
  language: "English",
};

const userJSON = JSON.stringify(userSettings);
localStorage.setItem("userSettings", userJSON);

const storedJSON = localStorage.getItem("userSettings");

const parsedJSON = JSON.parse(storedJSON);
console.log(parsedJSON.theme);

/* Task 3 */

const favoriteBooks = [
  { title: "book1", author: "John" },
  { title: "book2", author: "Scott" },
  { title: "book3", author: "Amy" },
];
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const getBooks = JSON.parse(localStorage.getItem("favoriteBooks"));

getBooks.forEach((book) => {
  console.log(book.title);
});

/* Task 4 */

const saveToLocalStorage = (key, object) => {
  const objectJSON = JSON.stringify(object);
  localStorage.setItem(key, objectJSON);
  const retrievedData = localStorage.getItem(key);
  const parsedObject = JSON.parse(retrievedData);
  console.log(parsedObject);
};

const test = {
  theme: "dark",
  language: "english",
};

saveToLocalStorage("userData", test);

/* Task 5 */

localStorage.setItem("userdata", JSON.stringify({ name: "Anna", age: 25 }));

const getFromLocalStorage = (key) => {
  const retrievedValue = localStorage.getItem(key);
  if (retrievedValue) {
    const parsedValue = JSON.parse(retrievedValue);
    console.log(parsedValue);
  } else {
    console.log("No data found:", key);
  }
};

getFromLocalStorage("userdata");

/* Task 6 */

const userProfile = {
  username: "Ananana",
  email: "anna@email.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
const retrievedProfile = JSON.parse(localStorage.getItem("userProfile"));
retrievedProfile.preferences.theme = "dark mode";

console.log(retrievedProfile);

/* Task 7 */

const shoppingList = {
  items: ["apple", "banana", "milk"],
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

const addItemToList = (item) => {
  const retrievedList = JSON.parse(localStorage.getItem("shoppingList"));
  retrievedList.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(retrievedList));

  console.log(retrievedList);
};

addItemToList("chocolate");

/* Task 8
 */

const counter = {
  count: 0,
};

localStorage.setItem("counter", JSON.stringify(counter));

const incrementCounter = () => {
  const retrievedList2 = JSON.parse(localStorage.getItem("counter"));
  retrievedList2.count += 1;
  localStorage.setItem("counter", JSON.stringify(retrievedList2));

  console.log(retrievedList2.count);
};

incrementCounter();

/* Task 9 */

const tasks = [
  { id: 1, description: "Clean bedroom", completed: false },
  { id: 2, description: "Clean kitchen", completed: false },
  { id: 3, description: "Study", completed: false },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

const completedTaskMarks = (taskId) => {
  const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
  retrievedTasks.forEach((task) => {
    if (task.id === taskId ) {
      task.completed = true;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(retrievedTasks));
  console.log(retrievedTasks);
};
completedTaskMarks(2);

/* Task 10*/

const clearLocalStorage = () => {
  localStorage.clear();
};

clearLocalStorage();
console.log(localStorage);
