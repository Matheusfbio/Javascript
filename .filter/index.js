function someFilter(user) {
}

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


const showUser = mockUser.map((user) => {
  return user;
});

// console.table(showUser)


const filterUsers = mockUser.filter((filterUser) => filterUser.name === "John" && filterUser.occupation.includes("Software Engineer"));
console.table(filterUsers);


module.exports = { someFilter }