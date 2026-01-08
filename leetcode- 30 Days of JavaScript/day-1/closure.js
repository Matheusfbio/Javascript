var createCounter = function (n) {
  var newValue = n

  return function () {
    for (let i = 0; i < 1; i++) {
      console.log(newValue);
      return newValue++
    }
  }

};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
