const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Bruno", active: false },
  { id: 3, name: "Amanda", active: true },
  { id: 4, name: "Carlos", active: true },
  { id: 5, name: "Alice", active: false }
];

searchUsers(users, {
  nameStartsWith: "A",
  onlyActive: true
});

function searchUsers(users) {
  const filters = arguments[1] || {}

  const filteredUsers = users
    .filter((user) => {
      if (filters.nameStartsWith) {
        return user.name.startsWith(filters.nameStartsWith)
      }
      return true
    })
    .filter((user) => {
      if (filters.onlyActive) {
        return user.active === true
      }
      return true
    })

  console.log(filteredUsers)
}

// performance otimization
function searchUsers(users, filters = {}) {
  return users.filter(user =>
    (!filters.nameStartsWith || user.name.startsWith(filters.nameStartsWith)) &&
    (!filters.onlyActive || user.active)
  );
}
