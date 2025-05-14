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
]


// const showUser = mockUser.map((user) => {
//   return user;
// });

// console.table(showUser)

function filterUserByOccupationAndAge(mockUser) {
  const filterUsers = mockUser.filter((filterUser) => filterUser.occupation.includes("Software Engineer") && filterUser.age < 30);
  return filterUsers;
}

console.table(filterUserByOccupationAndAge(mockUser));

module.exports = { filterUserByOccupationAndAge }