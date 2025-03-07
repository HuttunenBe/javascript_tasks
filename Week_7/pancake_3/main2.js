const displayOrderScreen = document.querySelector("#orderDisplay");
const orderDiv = document.querySelector("#orderDiv");

let order = [];
let orderID = Date.now();

const orderDetails = {
  orderId: orderID.toString(),
  customerName: "Beniitta", 
  pancakeType: "classic",
  toppingsExtras: "banana",
  deliveryMethod: "none",
  totalPrice: 10,
  status: "waiting",
};

order.push(orderDetails);

localStorage.setItem("order", JSON.stringify(order));
let storedOrder = JSON.parse(localStorage.getItem("order"));
console.log(storedOrder);

const displayOrder = () => {
  let orders = JSON.parse(localStorage.getItem("order")) || [];
  let filteredOrders = orders.filter((order) => order.totalPrice > 0);

  const color = (order) => {
    let orderColor = "";
    if (order.status === "waiting") {
      orderColor = "🟡";
    } else if (order.status === "ready") {
      orderColor = "🔵";
    } else {
      ("🟢");
    }
    return orderColor;
  };

  filteredOrders.forEach((order) => {
    const orderColor = color(order);
    orderDiv.innerHTML += `
            <div data-order-id="${order.orderId}"> 
                Order ID: ${order.orderId} <br>
                Customer Name: ${order.customerName} <br>
                Pancake Type: ${order.pancakeType} <br>
                Toppings/Extras: ${order.toppingsExtras} <br>
                Delivery Method: ${order.deliveryMethod} <br>
                Total Price: €${order.totalPrice} <br>
                Order status: 
                <select class="orderStatus" data-order-id="${
                  order.orderId
                }" name="Order status">
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
                <p>${orderColor}</>
            </div>
        `;
  });
};

const saveIt = (orderId, newStatus) => {
  let orders = JSON.parse(localStorage.getItem("order")) || [];
  let objectToUpdate = orders.find((order) => order.orderId === orderId);

  if (objectToUpdate) {
    objectToUpdate.status = newStatus;
    localStorage.setItem("order", JSON.stringify(orders));
    console.log("Updated", objectToUpdate);
  }
};

orderDiv.addEventListener("change", (e) => {
  if (e.target && e.target.classList.contains("orderStatus")) {
    const orderId = e.target.closest("div").getAttribute("data-order-id");
    const newStatus = e.target.value;
    saveIt(orderId, newStatus);
  }
});

displayOrder();

//const displayAll = () => {
//const orders = JSON.parse(localStorage.getItem('order'));
//return (orders)
//}

////saveIt.addEventListener('load', displayAll)

//const retrievedValue = localStorage.getItem('der')
