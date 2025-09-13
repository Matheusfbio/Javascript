function keyValues(obj) {
  const maps = new Map();
  for(const [key, value] of Object.entries(obj)) {
    maps.set(key, value);
  }
  return maps;
}

module.exports = keyValues;
