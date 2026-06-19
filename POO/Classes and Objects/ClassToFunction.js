function Car(product_name, product_type) {
  this.name = product_name
  this.type = product_type

  if (product_type = 1) {
    this.type = "Sport"

  } else if (type = 2) {
    this.type = "Util"
  }
  this.product_info = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Name: ${this.type}`);
    console.log(`-------------------`);
  }
}

let newCar = new Car("Bmw", 1)
newCar.product_info()