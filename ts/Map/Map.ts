function keyValuesTs(obj: object): Map<string, any> {
  const maps = new Map();

  for (const [key, value] of Object.entries(obj)) {
    maps.set(key, value);
  }

  return maps;
}

export default keyValuesTs;