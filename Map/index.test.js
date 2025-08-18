const keyValues = require('./index');

describe('keyValues function should return a Map', () => {
  test('Should be return a 3 value inside Map', () => {
    const map = keyValues({
      id: "4084ba73-dde1-5257-8d76-44eedd5e6de5",
      email: 'matheus@test.com',
      name: 'Matheus fabio',
      lastname: 'Raimundo'
    });
    // Test the size of the map
    expect(map.size).toBe(4);

  // Test the values
    expect(map.get('id')).toBe("4084ba73-dde1-5257-8d76-44eedd5e6de5");
    expect(map.get('email')).toBe('matheus@test.com'); 
    expect(map.get('name')).toBe('Matheus fabio');
    expect(map.get('lastname')).toBe('Raimundo');
  });
})