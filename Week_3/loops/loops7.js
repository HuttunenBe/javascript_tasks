const sumAndAverage = () => {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(Number(prompt("Enter numbers please")));
  }

  let sum = numbers.reduce((acc, e) => acc + e, 0);
  let average = sum / numbers.length;
  let smallestNum = Math.min(...numbers);
  let largestNum = Math.max(...numbers);

  console.log("Sum: ", sum);
  console.log("Average: ", average);
  console.log("Smallest: ", smallestNum);
  console.log("Largest: ", largestNum);
};

sumAndAverage();
