const pessoa = {
  name: "Matheus",
  lastname: "Fabio",
  age: 24,
  address: {
    rua: "Rua são jose",
    number: 507,
  },
};

const { name = "luiz", lastname } = pessoa;
console.log(name, lastname);
