const checkForFox = (hasfox) => {
  if (hasfox) {
    return "You have a fox as a pet!";
  } else {
    return "No fox detected";
  }
};

console.log(checkForFox(true));
console.log(checkForFox(false));
