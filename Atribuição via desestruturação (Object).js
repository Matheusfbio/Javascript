const pessoa = {
  firstname: "Matheus",
  lastname: "Matheus",
  age: "Matheus",
  address: {
    street: "São jose",
    number: 34,
  },
};

const {
  address: { street, number },
} = pessoa;
console.log(street, number);
