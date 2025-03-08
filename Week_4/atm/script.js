const deposit_Btn = document.getElementById("depositBtn");
const withdraw_Btn = document.getElementById("withdrawBtn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");

let currentBalance = 0;

deposit_Btn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  balance.innerText = currentBalance;
}); //call back function

withdraw_Btn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  withdraw(withdrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof +depositAmount !== "number") {
    console.log(typeof depositAmount);
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else {
    currentBalance += depositAmount;
  }
}

function withdraw(withdrawAmount) {
  if (typeof Number(withdrawAmount) !== "number") {
    message.innerText = "Please enter a number";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficient funds";
  } else {
    currentBalance -= withdrawAmount;
  }
}
