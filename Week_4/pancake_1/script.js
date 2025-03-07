const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");

const calculateTotal = () => {
  let totalPrice = parseFloat(pancakeType.value);
  console.log("Event was triggered");

  function random(max) {
    return Math.floor(Math.random() * max);
  }

  function textColor() {
    const randomColor =
      "rgb(" + random(256) + "," + random(256) + "," + random(256) + ")";
    totalPriceDisplay.style.color = randomColor;
    totalPriceBanner.style.color = randomColor;
  }

  toppings.forEach((topping) => {
    if (topping.checked) {
      totalPrice += parseFloat(topping.value);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      totalPrice += parseFloat(extra.value);
    }
  });

  totalPriceDisplay.textContent = `${totalPrice} €`;
  totalPriceBanner.textContent = `${totalPrice} €`;

  textColor()
};

pancakeForm.addEventListener("change", calculateTotal)
