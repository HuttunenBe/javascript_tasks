const countEvenNumbers = () => {
  let numbers;
  let countEven = 0;
  for (let i = 0; i < 20; i++) {
    let num = Number(prompt("Please enter numbers"));
    if (num % 2 === 0) {
      countEven++;
    }
  }
  console.log("The number of even numbers is", countEven);
};

countEvenNumbers();
