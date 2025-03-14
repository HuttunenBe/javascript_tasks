const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const deliveryCost = document.querySelectorAll(".delivery");
const buttonSeeOrder = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#orderSummary");
const customerName = document.querySelector("#customerName");

const changeHandler = () => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  let selectedToppings = [];
  let selectedExtras = [];
  let selectedDelivery = [];

  let toppingsTotal = 0;
  toppings.forEach((topping) => {
    if (topping.checked) {
      selectedToppings.push(topping.dataset.name);
      toppingsTotal += parseFloat(topping.dataset.price);
    }
  });

  let extrasTotal = 0;
  extras.forEach((extra) => {
    if (extra.checked) {
      selectedExtras.push(extra.value);
      extrasTotal += parseFloat(extra.dataset.price);
    }
  });

  let deliveryTotal = 0;
  deliveryCost.forEach((delivery) => {
    if (delivery.checked) {
      selectedDelivery.push(delivery.value);
      deliveryTotal += parseFloat(delivery.dataset.price);
    }
  });

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryTotal;

  totalPriceDisplay.textContent = `${totalPrice} €`;
  totalPriceBanner.textContent = `${totalPrice} €`;

  return {
    basePrice,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice,
  };
};

pancakeForm.addEventListener("change", changeHandler);

buttonSeeOrder.addEventListener("click", () => {
  const {
    basePrice,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice,
  } = changeHandler();

  const toppingsText =
    selectedToppings.length > 0 ? selectedToppings.join(", ") : "None";
  const extrasText =
    selectedExtras.length > 0 ? selectedExtras.join(", ") : "None";
  const deliveryText =
    selectedDelivery.length > 0 ? selectedDelivery.join(", ") : "None";

  const customerOrderName = customerName.value.trim();

  summaryText.textContent = `Hello ${customerOrderName}. 
  
  You chose ${pancakeType.value} with the following options:
  Toppings: ${toppingsText}, 
  Extras: ${extrasText}, 
  Delivery: ${deliveryText}. 
  
  Total price: ${totalPrice} €`; 
});

//select = use .value