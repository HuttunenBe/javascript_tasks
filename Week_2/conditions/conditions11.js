function getDayName(day) {
  let answer;
  switch (day) {
    case 1:
      answer = "Monday";
      break;
    case 2:
      answer = "Tuesday";
      break;
    case 3:
      answer = "Wednesday";
      break;
    case 4:
      answer = "Thursday";
      break;
    case 5:
      answer = "Friday";
      break;
    case 6:
      answer = "Saturday";
      break;
    case 7:
      answer = "Sunday";
      break;
  }

  return answer;
}

console.log(getDayName(4));
