function keyValues(obj) {
  const maps = new Map();
  for(const [key, value] of Object.entries(obj)) {
    maps.set(key, value);
  }
  return maps;
}


module.exports = keyValues;


const Values = new Map();
Values.set("Username", "Matheus Fabio")
Values.set("Email", "Matheus@test.com")

console.log(Values);
