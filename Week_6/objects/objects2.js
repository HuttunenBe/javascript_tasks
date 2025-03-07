/* Task 1 */

const weather = [
  { temperature: "12", humidity: "100%", condition: "sunny" },
  { temperature: "3", humidity: "90%", condition: "rainy" },
  { temperature: "-2", humidity: "87%", condition: "sunny" },
  { temperature: "-9", humidity: "67%", condition: "rainy" },
];
 
weather.forEach((weather) => {
  if (weather.condition === "rainy") {
    console.log("Take an umbrella!");
  }
});

/* Task 2*/

const shoppinCart = {
  items: [
    {
      name: "Banana",
      price: 1.2,
      quantity: 3,
    },
    {
      name: "Apples",
      price: 1.5,
      quantity: 5,
    },
    {
      name: "Soda",
      price: 1.3,
      quantity: 9,
    },
  ],
};

const calculateTotal = (items) => {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
};

console.log(calculateTotal(shoppinCart.items));

/* Task 3 */

const restaurants = [
  { name: "Burger king", cuisineType: "Fast food", rating: 2 },
  { name: "Amarillo", cuisineType: "Hamburgers", rating: 3 },
  { name: "Pizzeria", cuisineType: "Pizza", rating: 2 },
  { name: "Loivu", cuisineType: "Finnish", rating: 5 },
];

restaurants.forEach((restaurant) => {
  if (restaurant.rating >= 5) {
    console.log(restaurant);
  }
});

/* Task 4 */

const bankAccount = [
  { accountHolder: "Max", balance: 10200, trasaction: 2000 },
  { accountHolder: "Minni", balance: 12303, trasaction: -2000 },
  { accountHolder: "Manu", balance: 23034, trasaction: 2000 },
  { accountHolder: "Misa", balance: 202344, trasaction: 2000 },
];
const calculator = (accounts) => {
  let totalBalance = 0;
  accounts.forEach((account) => {
    totalBalance += account.balance + account.trasaction;
  });
  return totalBalance;
};

console.log(calculator(bankAccount));

/* Task 5 */

const students = [
  { name: "Anna", scores: [90, 80, 66], averageScore: null },
  { name: "Elias", scores: [93, 55, 98], averageScore: null },
  { name: "Hannu", scores: [92, 81, 53], averageScore: null },
];

function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  student.averageScore = calculateAverage(student.scores);
}

console.log(students);

/* Task 6 */

const courses = [
  { courseName: "Math", instructor: "Huttunen", studentsEnrolled: 25 },
  { courseName: "History", instructor: "Auvinen", studentsEnrolled: 35 },
  { courseName: "Arts", instructor: "Ruotsalainen", studentsEnrolled: 40 },
  { courseName: "Biology", instructor: "White", studentsEnrolled: 28 },
];

let studentNumbers = (courses) => {
  courses.forEach((course) => {
    if (course.studentsEnrolled >= 30) {
      console.log(course.courseName);
    }
  });
};

studentNumbers(courses);

/* Task 7 */

const pet = {
  species: "fox",
  name: "John",
  isVaccinated: true,
};

const checkVaccination = (pet) => {
  if (pet.isVaccinated === true) {
    return "Vaccination not required";
  } else {
    return "Vaccination required";
  }
};

console.log(checkVaccination(pet));

/* Task 8 */

const city = {
  name: "Helsinki",
  population: 400000,
  landmark: "Suomenlinna",
};

const bigCity = (city) => {
  if (city.population >= 1000) {
    console.log("This is a big city!");
  }
};

bigCity(city);

/* Task 9 */

const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 500 },
  { type: "credit", amount: 200 },
  { type: "debit", amount: 300 },
];

const calculateBalance = (transactions) => {
  let balance = 0;
  transactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  return balance;
};

console.log(calculateBalance(transactions));

/* Task 10 */

const foxPack = {
  foxes: [
    { name: "Anu", age: 3, furColor: "Red" },
    { name: "Hannu", age: 5, furColor: "Brown" },
    { name: "Heli", age: 2, furColor: "Silver" },
    { name: "Hanna", age: 4, furColor: "Orange" },
  ],
};

const youngFox = (foxes) => {
  foxes.forEach((fox) => {
    if (fox.age <= 3) {
      console.log(fox);
    }
  });
};

youngFox(foxPack.foxes);

/* Task 11 */

const gameCharacter = {
  name: "character",
  level: 88,
  health: 92,
  inventory: ["knife", "sword", "health potion"],
};

const logInventory = () => {
  console.log(gameCharacter.inventory);
};

logInventory();

/* Task 12 */

const employees = [
  { name: "Joni", role: "Manager", workingHours: 35 },
  { name: "Krista", role: "Developer", workingHours: 35 },
  { name: "Anna", role: "Designer", workingHours: 40 },
  { name: "Maria", role: "Developer", workingHours: 40 },
];

const workHours = (employees) => {
  employees.forEach((employee) => {
    if (employee.workingHours >= 40) {
      console.log(employee.name);
    }
  });
};
workHours(employees);

/* Task 13 */

const musicAlbums = [
  { title: "album1", artist: "Behm", releaseYear: 2023 },
  { title: "album2", artist: "David Bowie", releaseYear: 1983 },
  { title: "album3", artist: "Queen", releaseYear: 1985 },
];

const yearCheck = (musicalAlbums) => {
  musicAlbums.forEach((album) => {
    if (album.releaseYear >= 2000) {
      console.log(album.title);
    }
  });
};
yearCheck(musicAlbums);

/* Task 14 */

const cars = [
  { brand: "Toyota", model: "Model3", horsepower: 132 },
  { brand: "Ford", model: "Model2", horsepower: 450 },
  { brand: "Audi", model: ",Model3", horsepower: 283 },
];

function mostHorsepower(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++)
    if (arr[i].horsepower > max.horsepower) max = arr[i];

  return max;
}

console.log(mostHorsepower(cars));

/* Task 15 */

const airports = [
  { name: "London Heathrow Airport", country: "UK", flightsPerDay: 200 },
  { name: "Tokyo Narita Airport", country: "Japan", flightsPerDay: 180 },
  {
    name: "Helsinki-Vantaan lentokenttä",
    country: "Finland",
    flightsPerDay: 170,
  },
];

function mostFlights(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++)
    if (arr[i].fligthsPerDay > max.fligtsPerDay) max = arr[i];

  return max;
}

console.log(mostFlights(airports));
