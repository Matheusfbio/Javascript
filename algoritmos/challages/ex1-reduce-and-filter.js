const orders = [
  { id: 1, customer: "Ana", total: 250, status: "paid" },
  { id: 2, customer: "Bia", total: 120, status: "pending" },
  { id: 3, customer: "Carlos", total: 450, status: "paid" },
  { id: 4, customer: "Ana", total: 80, status: "paid" },
  { id: 5, customer: "Bia", total: 300, status: "paid" }
];

//----

const orderByPaid = orders.filter((order) => order.status === "paid")

const groupByCustomer = orderByPaid.reduce((acc, order) => {
  if (!acc[order.customer]) {
    acc[order.customer] = 0
  }

  acc[order.customer] += order.total

  return acc
}, {})


console.log(groupByCustomer);
