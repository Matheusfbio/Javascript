function convertByString(input) {
  if (input == String(input)) return input;
  else return "this is not a string";
}
const result = convertByString(12);
console.log(result);
