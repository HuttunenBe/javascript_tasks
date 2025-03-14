/* Task 1 */

const library = [
  { title: "Book1", author: "John", yearPublished: 2001 },
  { title: "Book2", author: "Maria", yearPublished: 1993 },
  { title: "Book3", author: "Anna", yearPublished: 2014 },
  { title: "Book4", author: "Amy", yearPublished: 2015 },
  { title: "Book5", author: "Anton", yearPublished: 2016 },
];

/* Task 2 */

console.log(library[0].title);
library[1].yearPublished = 1892;

/* Task 3 */

library[0].genres = "horror";
console.log(library);
library.push({ Isavailable: true });

console.log(library);

/* Task 4 */

const library = [
  { title: "Book1", author: "John", yearPublished: 200 },
  { title: "Book2", author: "Maria", yearPublished: 1993 },
  { title: "Book3", author: "Anna", yearPublished: 2014 },
  { title: "Book4", author: "Amy", yearPublished: 2015 },
];

function Book(title, author, yearPublished, genres) {
  this.titleName = title;
  this.authorName = author;
  this.yearPublisheName = yearPublished;
  this.genresName = genres;
}

let bookAdd = new Book("Book5", "Gabriella", 2016, "romance");

library.push(bookAdd);
console.log(bookAdd);
console.log(library);

/* Task 5 */

const createBook = (title, author, yearPublished, genre) => {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genre: genre,
  };
};

const title = prompt("Book title:");
const author = prompt("Book author:");
const yearPublished = prompt("Publish year:");
const genre = prompt("Book genre:");

const book = createBook(title, author, yearPublished, genre);

console.log(book);
/* Task 6*/

const library = [
  { title: "Book1", author: "John", yearPublished: 200 },
  { title: "Book2", author: "Maria", yearPublished: 1993 },
  { title: "Book3", author: "Anna", yearPublished: 2014 },
  { title: "Book4", author: "Amy", yearPublished: 2015 },
];

const jasonString = JSON.stringify(library);
console.log(jasonString);
const backTo = JSON.parse(jasonString);
console.log(backTo);

console.log(backTo[0].title);

/* Task 7 */

const students = [
  { name: "Ana", age: 21, grade: 91 },
  { name: "Julius", age: 24, grade: 66 },
  { name: "Benita", age: 34, grade: 89 },
  { name: "Marjo", age: 19, grade: 90 },
  { name: "Anna", age: 22, grade: 99 },
];

students.forEach((student) => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});

/* Task 8 */

const moped = {
  brand: "Aprilia",
  model: "SX",
  year: 2014,
  isElectric: "true",
};

let electrical = (isElectric) => {
  if (moped.isElectric === "true") { //if (moped.isElectric) simplified
    console.log("This moped is eco-friendly!");
  } else {
    console.log("This moped runs on fuel");
  }
};

electrical(moped.isElectric);

/* Task 9 */

const movies = [
  { title: "Movie1", director: "John", rating: 9 },
  { title: "Movie2", director: "Maria", rating: 7 },
  { title: "Movie3", director: "Anna", rating: 8 },
  { title: "Movie4", director: "Amy", rating: 5 },
];

movies.forEach((movie) => {
  if (movie.rating >= 8) {
    console.log(movie.title + " " + movie.rating);
  }
});

/* Task 10 */

const findOldestCar = () => {
  const cars = [
    {
      name: "Toyota",
      year: 1990,
    },
    {
      name: "Audi",
      year: 1887,
    },
    {
      name: "BMW",
      year: 1490,
    },
  ];
  cars.sort(function (a, b) {
    return a.year - b.year;
  });

  return cars[0];
};
console.log(findOldestCar());
/* Task 11 */

const userProfiles = [
  { username: "Johnn", email: "John", isAdmin: "No" },
  { username: "Annnna", email: "Anna", isAdmin: "Yes" },
  { username: "MarcMarc", email: "Marc", isAdmin: "Yes" },
];

userProfiles.forEach((user) => {
  if (user.isAdmin === "Yes") {
    console.log(user);
  }
});

/* Task 12 */

const orders = [
  {
    orderId: "12",
    customerName: "John",
    totalAmount: 210,
    status: "completed",
  },
  { orderId: "13", customerName: "Amy", totalAmount: 40, status: "Nan" },
  {
    orderId: "14",
    customerName: "Anna",
    totalAmount: 25,
    status: "notCompleted",
  },
  {
    orderId: "15",
    customerName: "MArcus",
    totalAmount: 34,
    status: "completed",
  },
];

orders.forEach((order) => {
  if (order.status === "completed") {
    console.log(order);
  }
});

/* Task 13 */

let smartphone = {
  brand: "Apple",
  model: 13,
  batteryLife: "horrible",
  is5GEnabled: true,
};

let is5GEnabledCheck = (is5GEnabled) => {
  if (smartphone.is5GEnabled === true) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
};

is5GEnabledCheck();

/* Task 14 */

let foxInfo = {
  name: "fox",
  age: 10,
  habitat: "wild",
};

let ageCheck = (age) => {
  if (foxInfo.age >= 3) {
    console.log("This fox is an adult");
  } else {
    console.log("This fox is young");
  }
};
ageCheck();

/* Task 15 */

const employees = [
  { name: "Max", position: "Employee", salary: 2306 },
  { name: "Masa", position: "Employee", salary: 2050 },
  { name: "Mikko", position: "Employee", salary: 2500 },
  { name: "Mika", position: "Employee", salary: 2010 },
];

function calculator(employees) {
  let result = 0;
  for (let i = 0; i < employees.length; i++) {
    result += employees[i].salary;
  }
  return result;
}

console.log("€" + calculator(employees));
