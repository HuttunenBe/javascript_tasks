'use strict';

/* Task 1: */

const fruits = ["apple", "banana", "orange"];


const newFruits = fruits;
const copy = [...fruits]; 

console.log(fruits);

/* Task 2: */

const oldTasks = ["task1", "task2"];
const newTasks = ["task3", "task4"];


allTasks = oldTasks.concat(newTasks)

console.log(allTasks); 

/* Task 3: */

const defaultSettings = { theme: "light", fontSize: 14 };
const userSettings = { theme: "dark" };


const finalSettings = { ...defaultSettings, ...userSettings };

console.log(finalSettings); 

/* Task 4: */

function sumNumbers(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
console.log(sumNumbers(2, 3, 4)); 

/* Task 5: */
const book = { title: "JavaScript Guide", pages: 400, author: "John Doe" };


const { title, ...rest } = book;
console.log(title)
console.log(rest); 

/* Task 6: Create Your Own */
const average = (...numbers) => {
  let sum =  numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length
}

console.log(average(10, 20, 30, 40))
