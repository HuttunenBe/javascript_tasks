"use strict";

/* 
Task 1:*/

function delayedGreet(name, callback) {
  setTimeout(() => callback(`Hello ${name}`), 2000);
}

delayedGreet("Alice", (message) => console.log(message));

/* 
Task 2: */

function processOrder(orderNumber, callback) {
  setTimeout(
    () => callback(`"Order ${orderNumber} is ready for pickup."`),
    3000
  );
}

processOrder(101, (message) => console.log(message));

/* 
Task 3: */

function loginUser(username, validUser, callback) {
  if (validUser === true) {
    setTimeout(() => {
      callback(`Welcome, ${username}!`);
    }, 1000);
  } else {
    callback(`"Invalid login"`);
  }
}

loginUser("Sam", true, (message) => console.log(message));
loginUser("Alex", false, (message) => console.log(message));

/* 
Task 4: */

function fetchUserData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail === false) {
        resolve("User data retrieved");
      } else if (shouldFail === true) {
        reject("Error fetching user data");
      }
    }, 2000);
  });
}

fetchUserData(false).then(console.log).catch(console.error);
fetchUserData(true).then(console.log).catch(console.error);

/* 
Task 5:
*/

function processOrderPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Order received"), 2000);
  })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => {
        setTimeout(() => resolve("Preparing order"), 3000);
      });
    })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => {
        setTimeout(() => resolve("Order ready for pickup"), 1000);
      });
    });
}

// Test Case
processOrderPromise().then(console.log);
/* 
Task 6: API Simulation (Promise)  
---------------------------------------
*/

function getUserProfile(userExists) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userExists === true) {
        resolve("User profile loaded");
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

getUserProfile(true).then(console.log).catch(console.error);
getUserProfile(false).then(console.log).catch(console.error);

/* 
Task 7: Fetch User Data (Async/Await)  
---------------------------------------
*/

async function fetchUserDataAsync(shouldFail) {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail === false) {
          resolve("User data loaded");
          console.log("User data loaded");
        } else if (shouldFail === true) {
          reject("Failed to fetch data");
          console.log("Failed to fetch data");
        }
      }, 2000);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchUserDataAsync(false).then(console.log).catch(console.error);
fetchUserDataAsync(true).then(console.log).catch(console.error);

/* 
Task 8: E-commerce Checkout (Async/Await)  
---------------------------------------
*/

async function checkoutCart() {
  console.log("Checking stock..");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Payment processed");
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Order completed!");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
checkoutCart().then(() => console.log("Thanks for shopping!"));

/* 
Task 9: Fetch Product Details (Async/Await)  
---------------------------------------
*/

async function fetchProductDetails(hasError) {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (hasError === false) {
          resolve("Product details retrieved");
          console.log("Product details retrieved");
        } else if (hasError === true) {
          reject("Error loading product");
          console.log("Error loading product");
        }
      }, 3000);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchProductDetails(false).then(console.log).catch(console.error);
fetchProductDetails(true).then(console.log).catch(console.error);

/* Margits solution! 
async function fetchProductDetails(hasError) {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                hasError ? reject("Error loading product") : resolve("Product details retrieved");
            }, 3000);
        });
        return "Product details retrieved";
    } catch (error) {
        throw new Error(error);
    }
*/
