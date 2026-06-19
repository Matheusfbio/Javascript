// ESCOPO GLOBAL

// let salary = 1400

// function showSalary() {
//   console.log(salary);
// }

// showSalary()


// ESCOPO DE FUNÇÃO

// function showUser() {
//   var username = "Matheus"
// }

// console.log(username);

// ESCOPO DE BLOCO

// if (true) {
//   let y = 20;
// }

// console.log(y); // ReferenceError


//CLOSURE

// function counter() {
//   let count = 0

//   return () => {
//     count++;
//     return count
//   }
// }

// const increment = counter();

// console.log(increment());
// console.log(increment());

///

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000)
}
