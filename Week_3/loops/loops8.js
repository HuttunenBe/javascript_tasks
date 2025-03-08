const findMinMax = () => {
  let input = Number(prompt("How many numbers do you want?"));
  let numbers = [];

  for (let i = 0; i < input; i++) {
    numbers.push(Number(prompt("Enter a number please")));
  }

  let smallestNum = Math.min(...numbers);
  let largestNum = Math.max(...numbers);
  console.log("Smallest number is ", smallestNum);
  console.log("Largest number is ", largestNum);
};

findMinMax();
