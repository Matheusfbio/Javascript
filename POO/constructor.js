class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  ShowModel() {
    return `The car ${this.brand} ${this.model} is now ON.`;
  }
}

const car = new Car("Toyota", "Corolla", 2026);
console.log(car);
// Car { brand: 'Toyota', model: 'Corolla', year: 2026 }
