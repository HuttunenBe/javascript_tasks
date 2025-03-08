const calculateAverageUntilZero = () => {
  let count = 0;
  let result = 0;
  let num;
  while (num !== 0) {
    num = Number(prompt("Give me a number"));
    if (num === 0) break;
    result = num + result;
    count++;
  }

  // Calculating an average: the total number of items / the total of all items

  average = result / count;
  console.log("The average of all entered numbers: ", average);
};

calculateAverageUntilZero();
