
const { filterUserByOccupationAndAge } = require('./index.js');

describe('filterUserByOccupationAndAge', () => {
  const mockUser = [
    {
      name: 'Eva',
      age: 20,
      city: 'New York',
      country: 'USA',
      occupation: 'Software Engineer',
      hobbies: 'Reading, Traveling, Gaming',
    },
    {
      name: 'Doe',
      age: 30,
      city: 'New York',
      country: 'USA',
      occupation: 'Software Engineer',
      hobbies: 'Reading, Traveling, Gaming',
    },
    {
      name: 'John',
      age: 32,
      city: 'San Francisco',
      country: 'USA',
      occupation: 'Software Engineer',
      hobbies: 'Gaming',
    }
  ];

  test('should be defined', () => {
    expect(filterUserByOccupationAndAge).toBeDefined();
  });

  test('should return users with occupation "Software Engineer" and age < 30', () => {
    const result = filterUserByOccupationAndAge(mockUser);
    expect(result).toEqual([
      {
        name: 'Eva',
        age: 20,
        city: 'New York',
        country: 'USA',
        occupation: 'Software Engineer',
        hobbies: 'Reading, Traveling, Gaming',
      }
    ]);
  });

  test('should return empty array if no user matches', () => {
    const users = [
      { name: 'Alice', age: 35, occupation: 'Doctor' },
      { name: 'Bob', age: 40, occupation: 'Teacher' }
    ];
    const result = filterUserByOccupationAndAge(users);
    expect(result).toEqual([]);
  });

  test('should return empty array if input is empty', () => {
    const result = filterUserByOccupationAndAge([]);
    expect(result).toEqual([]);
  });

  test('should not return users with age >= 30', () => {
    const users = [
      { name: 'Sam', age: 29, occupation: 'Software Engineer' },
      { name: 'Max', age: 30, occupation: 'Software Engineer' }
    ];
    const result = filterUserByOccupationAndAge(users);
    expect(result).toEqual([
      { name: 'Sam', age: 29, occupation: 'Software Engineer' }
    ]);
  });
});

// We recommend installing an extension to run jest tests.
test('test', () => {
  expect(1).toBe(1)
})
