const keyValues = require('./index');

it('Test 1', () => {
  const map = keyValues(
  //   {
  //   id: 11222,
  //   email: 'matheus@test.com',
  //   name: 'Matheus fabio'
  // }
);
  // Test the size of the map
  expect(map.size).toBe(3);

  // Test the values
  expect(map.get('id')).toBe("4084ba73-dde1-5257-8d76-44eedd5e6de5");
  expect(map.get('email')).toBe('matheus@test.com');
  expect(map.get('name')).toBe('Matheus fabio');
});