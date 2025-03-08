const validatePassword2 = () => {
  let password = prompt("Password please");
  while (password != "correct123") {
    password = prompt("Try again");
  }
  alert("Access granted!");
};

validatePassword2();
