"use strict";

/* Task 1*/

function task1() {
  try {
    undefinedVariable = 10;
  } catch (error) {
    console.error("Strict mode error: [error message]");
  }
}

task1();

/* Task 2: Declare Variables Correctly */

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    MAX_USERS = 101;
  } catch (error) {
    console.error("Cannot reassign a constant: [error message]");
  }
  console.log("MAX_USERS after attempt to change:", MAX_USERS);
}

task2();

/* Task 3: */

function task3() {
  const userProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    isAdmin: true,
  };

  console.log(userProfile);
}

task3();

/* Task 4: Write a Simple Function*/

function calculateArea(width, height) {
  let area = width * height;
  return area;
}
calculateArea(5, 10);

/* Task 5: Avoid Magic Numbers*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
console.log(applyDiscount(100));

/* Task 6: Write Useful Comments
 */

function greetUser(name) {
  return `Hello ${name}`;
}

greetUser("Bob");

/* Task 7: Refactor Unclear Code */

function checkNumber(number) {
  if (number < 0) {
    return `negative`;
  } else {
    return `positive`;
  }
}

checkNumber(5);

/* Task 8: Fix Formatting*/
function example() {
  let x = 10;
  console.log(x);
}
