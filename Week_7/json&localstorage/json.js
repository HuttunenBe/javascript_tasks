/* Task 1 */

const student = {
  name: "John Doe",
  age: 20,
  grade: "B",
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

/* Task 2 */
const backJSON = JSON.parse(studentJSON);
console.log(backJSON.name);

/* Task 3 */

const classroom = [
  {
    name: "Alice",
    age: 15,
    grade: 7,
  },
  {
    name: "John",
    age: 16,
    grade: 8,
  },
  {
    name: "Charlie",
    age: 14,
  },
];

const classroomJSON = JSON.stringify(classroom);
console.log(classroomJSON);

/* Task 4 */

const classroomJavascript = JSON.parse(classroomJSON);
classroom.forEach((student) => {
  console.log(student.name);
});

/* Task 5 */

const weatherReport = {
  temperature: 10,
  humidity: 40,
  conditions: "sunny",
};

const weatherJSON = JSON.stringify(weatherReport);
const weatherJavascript = JSON.parse(weatherJSON);

console.log(weatherJavascript.conditions);

/* Task 6 */

const movies = [
  {
    title: "Movie 1",
    director: "John",
    rating: 7,
  },
  {
    title: "Movie 2",
    director: "Amy",
    rating: 8,
  },
  {
    title: "Movie 3",
    director: "Sam",
    rating: 9,
  },
];

const moviesJSON = JSON.stringify(movies);
const movieJavascript = JSON.parse(moviesJSON);

movies.forEach((movies) => {
  if (movies.rating >= 8) {
    console.log(movies.title);
  }
});

/* Task 7 */

const filterHighRatedMovies = (jsonString) => {
  const moviesArray = JSON.parse(jsonString);
  const highestRatedMovies = moviesArray.filter((movie) => movie.rating > 8);
  return highestRatedMovies;
};
const moviesJson =
  '[{"title": "Movie A", "rating": 9.2}, {"title": "Movie B", "rating": 6.2}, {"title": "Movie C", "rating": 8.2}]';

console.log(filterHighRatedMovies(moviesJson));

/* Task 8 */

const shoppinCart = [
  {
    name: "Banana",
    price: 1,
  },
  {
    name: "Apple",
    price: 2,
  },
  {
    name: "Orange",
    price: "3",
  },
];

const shoppinCartJSON = JSON.stringify(shoppinCart);
console.log(shoppinCartJSON);

/* Task 9 */

const totalCartValue = (jsonString) => {
  const moviesJSON = JSON.parse(jsonString);
  let totalPrice = 0;

  moviesJSON.items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
};

const cartJSON = '{"items":[{"price":10},{"price":20},{"price":30}]}';
console.log(totalCartValue(cartJSON));

/* Task 10*/

const gameProgress = {
  level: 2,
  score: 20,
  livesRemaining: 10,
};

const gameJSON = JSON.stringify(gameProgress);
const gameJavascript = JSON.parse(gameJSON);
gameJavascript.score += 100;

console.log(gameJavascript.score);
