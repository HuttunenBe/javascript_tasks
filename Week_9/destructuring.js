'use strict';

/* Task 1: Fix the Employee Destructuring  
Extract `name` and `position` from the employee object.  
*/

const employee = { name: "Sarah", position: "Manager", department: "HR" };

// Fix this
const {name = fullName, position = jobTitle} = employee;

console.log(fullName, jobTitle); // Expected: "Sarah Manager"



/* Task 2: */

const colors = ["red", "blue", "green", "yellow"];


const [primary, secondary] = colors;

console.log(primary, secondary); 

/* Task 3: */
const user = {
    id: 101,
    details: { username: "john_doe", email: "john@example.com" },
};


const { details:{ username, email }} = user;
console.log(username, email); 

/* Task 4: */ 

function getUserInfo(user) {
    const { name, role = "guest"} = user 
    console.log(`${name} - ${role}`) ;
}

getUserInfo({ name: "Alice" }); 

/* Task 5:*/

function introduce(person) {
    console.log(`${person.name} is ${person.age} years old.`);
}

introduce({ name: "Emma", age: 28 }); 

/* Task 6: Create Your Own */

const cars = (car) => {
    console.log(car.brand, car.year);
    }

  cars({brand: "Toyota", year: 2020 });
  



