const orderListContainer = document.querySelector("#orderDiv");
const orderStatus = document.querySelector("#filterStatus");
const searchInput = document.querySelector("#searchInput");

const orders = JSON.parse(localStorage.getItem("ordersNew")) || [];
const addNewOrder = (
  customerName,
  pancakeType,
  selectedToppings,
  selectedExtras,
  selectedDelivery,
  totalPrice
) => {
  const newOrder = {
    id: id,
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
  displayOrders(orders);
};

const getEmoji = (status) => {
  if (status === "waiting") {
    return "🟡";
  } else if (status === "ready") {
    return "🔵";
  } else if (status === "delivered") {
    return "🟢";
  }
};

const sortOrders = () => {
  const selectedType = orderStatus.value;
  if (selectedType === "waiting") {
    displayOrders(orders);
  } else {
    const filteredOrders = orders.filter(
      (order) => order.status === selectedType
    );
    displayOrders(filteredOrders);
  }
};

const displayOrders = (orders) => {
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
          <button class="deleteButton">Delete</button>
      </div>
    `;
  });

  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteItem);
  });
};

function deleteItem(event) {
  const orderId = event.target.closest("div").dataset.orderId;
  const index = orders.findIndex((order) => order.id == orderId);

  if (index !== -1) {
    orders.splice(index, 1);
    localStorage.setItem("ordersNew", JSON.stringify(orders));
    displayOrders(orders);
  }
}

const updateOrderStatus = (orderId, newStatus) => {
  const orderToUpdate = orders.find((order) => order.id == orderId);
  if (orderToUpdate) {
    orderToUpdate.status = newStatus;
    localStorage.setItem("ordersNew", JSON.stringify(orders));
    displayOrders(orders);
  }
};

orderListContainer.addEventListener("change", (e) => {
  if (e.target && e.target.classList.contains("orderStatus")) {
    const orderId = e.target.closest("div").getAttribute("data-order-id");
    const newStatus = e.target.value;
    updateOrderStatus(orderId, newStatus);
  }
});

const filterByStatus = () => {
  const selectedType = orderStatus.value;
  if (selectedType === "waiting") {
    displayOrders(orders);
  } else {
    const filteredOrders = orders.filter(
      (order) => order.status === selectedType
    );
    displayOrders(filteredOrders);
  }
};

const searchOrderbyID = () => {
  const searchId = searchInput.value;
  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(searchId)
  );
  displayOrders(filteredOrders);
};

window.onload = () => {
  const filteredOrders = orders.filter((order) =>
    ["waiting", "ready", "delivered"].includes(order.status)
  );

  displayOrders(filteredOrders);
};

orderStatus.addEventListener("change", filterByStatus);
searchInput.addEventListener("input", searchOrderbyID);
