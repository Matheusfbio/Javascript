//Creating the function
/**
 * Description placeholder
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 */
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      console.log("You are using the operation to follow: " + operation);
      return num1 + num2;

      break;
    case "-":
      console.log("You are using the operation to follow: " + operation);
      return num1 - num2;

      break;
    case "*":
      console.log("You are using the operation to follow: " + operation);
      return num1 * num2;

      break;
    case "/":
      console.log("You are using the operation to follow: " + operation);
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;

    default:
      console.log("Operation not found: " + operation);

      break;
  }
};

console.log(calculate(19, 0, "/"));
