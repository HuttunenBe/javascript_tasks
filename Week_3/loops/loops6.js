const askToContinue = () => {
  let sum = 0;
  let count = 0;
  let answer = "";
  let result = 0;
  while (answer !== "n") {
    num = Number(prompt("Enter a number?"));
    answer = prompt("Do you wanna continue giving numbers?");
    result = num + result; //example result 10+5 num = 15.
    count++; //how many numbers enteres
    if (answer === "n") {
      break;
    }
  }
  console.log("count: ", count);
  console.log("result: ", result);
  let average = result / count;
  console.log("The average of all entered numbers: ", average);
};
askToContinue();
