"use strict";

/* Task 1: Try-Catch for Debugging
 */
function task1() {
  try {
    undefinedFunction();
  } catch (error) {
    console.log("Error caught: " + error.message);
  }
}

task1();

/* Task 2: Handle ReferenceError*/

function task2() {
  try {
    console.log(myVariable);
  } catch (error) {
    console.log("ReferenceError caught:" + error.message);
  }
}

task2();

/* Task 3: Using Finally*/

function task3() {
  try {
    undefined();
  } catch (error) {
    console.log("error caught" + error.message);
  } finally {
    console.log("Task completed");
  }
}

task3();

/* Task 4: Fix JSON Parsing Error*/

function parseJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (error) {
    console.log("Invalid JSON format" + error.message);
    return null;
  }
}

parseJSON('{"name": "Alice", "age": 25}');
parseJSON("Invalid JSON text");

/* Task 5: Throwing a Custom Error
 */

function checkAge(age) {
  if (age < 18) {
    throw new Error("Error: You must be at least 18.");
  } else {
    console.log("Access granted.");
  }
}

checkAge(20);
checkAge(16);

/* Task 6: Save and Retrieve from LocalStorage */

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  try {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  } catch (error) {
    console.log("Invalid JSON" + error.message);
    return null;
  }
}

saveUser({ name: "Alice", age: 25 });
console.log(getUser()); 
localStorage.setItem("user", "{ invalid JSON }");
console.log(getUser());

/* Task 7: Check if Object Property Exists */

function checkProperty(obj, key) {
  if (obj && key in obj) {
    console.log(obj[key]);
  } else {
    console.log("Property not found");
    return null;
  }
}

checkProperty({ name: "Bob", age: 30 }, "name"); 
checkProperty({ name: "Bob", age: 30 }, "email"); 

/* Task 8: Fetch API Error Handling */

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data);
    })
    .catch((error) => {
      console.error("Network error", error);
    });
}
fetchData("invalid-url");
fetchData("https://jsonplaceholder.typicode.com/users");

/* Task 9: Fix a URI Error*/

function task9(malformedURI) {
  try {
    const decodedURI = decodeURI(malformedURI);
    console.log(decodedURI);
  } catch (error) {
    console.log("URIError: " + error.message);
  }
}

task9("https%3A%2F%2Fexample.com");
task9("%");

/* Task 10: Clear LocalStorage */

function clearStorage() {
  localStorage.clear();
  console.log("LocalStorage cleared.");
}

clearStorage();
