const orderListContainer = document.querySelector("#orderDiv");

const orders = JSON.parse(localStorage.getItem("ordersNew")) || [];
const addNewOrder = (customerName, pancakeType, selectedToppings, selectedExtras,selectedDelivery, totalPrice
) => {
  const newOrder = {
    id: Date.now(),
    customerName: customerName,
    selectedPancake: pancakeType,
    toppings: selectedToppings,
    extras: selectedExtras,
    deliveryMethod: selectedDelivery,
    totalPrice: totalPrice,
    status: "waiting",
  };

  orders.push(newOrder);
  localStorage.setItem("ordersNew", JSON.stringify(orders));
  displayOrders(); 
}

const getEmoji = (status) => {
  if (status === "waiting") {
    return "🟡";
  } else if (status === "ready") {
    return "🔵";
  } else if (status === "delivered") {
    return "🟢";
  }
};


const displayOrders = () => {
  orderListContainer.innerHTML = "";

  orders.forEach((order) => {
    const orderEmoji = getEmoji(order.status);
    orderListContainer.innerHTML += `
      <div class="order" data-order-id="${order.id}">
          <p>Order ID: ${order.id}</p>
          <p>Customer Name: ${order.customerName}</p>
          <p>Pancake Type: ${order.selectedPancake}</p>
          <p>Toppings: ${order.toppings.join(", ")}</p>
          <p>Extras: ${order.extras.join(", ")}</p>
          <p>Delivery Method: ${order.deliveryMethod}</p>
          <p>Total Price: €${order.totalPrice}</p>
          <p>Order Status: 
              <select class="orderStatus" data-order-id="${order.id}">
                  <option value="waiting" ${
                    order.status === "waiting" ? "selected" : ""
                  }>Waiting</option>
                  <option value="ready" ${
                    order.status === "ready" ? "selected" : ""
                  }>Ready</option>
                  <option value="delivered" ${
                    order.status === "delivered" ? "selected" : ""
                  }>Delivered</option>
            </select>
          </p>
          <p>Status Emoji: ${orderEmoji}</p> 
      </div>
    `;
  });
};


const updateOrderStatus = (orderId, newStatus) => {
  const orderToUpdate = orders.find((order) => order.id == orderId);
  if (orderToUpdate) {
    orderToUpdate.status = newStatus;
    localStorage.setItem("ordersNew", JSON.stringify(orders));
    displayOrders();
  }
};

orderListContainer.addEventListener("change", (e) => {
  if (e.target && e.target.classList.contains("orderStatus")) {
    const orderId = e.target.closest("div").getAttribute("data-order-id");
    const newStatus = e.target.value;
    updateOrderStatus(orderId, newStatus);
  }
});


displayOrders();
