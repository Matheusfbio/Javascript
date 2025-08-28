

function SetValues(input) {
  const values = [...input];

  const uniqueValues = new Set(values);

  console.table(uniqueValues);

  return uniqueValues;
}

SetValues(["apple", "banana", "cherry", "apple"]);
  
module.exports = SetValues;