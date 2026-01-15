const users = new Map();

users.set("alice", { name: "Alice", age: 25, city: "New York" });
users.set("bob", { name: "Bob", age: 30, city: "San Francisco" });
users.set("charlie", { name: "charlie", age: 35, city: "Los Angeles" });

function getUserInfo(username) {
  if (users.has(username)) {
    return users.get(username);
  } else {
    return "User not found";
  }
}

console.log(getUserInfo("charlie")); // { name: "charlie", age: 35, city: "Los Angeles" }
console.log(getUserInfo("luis")); // { name: "charlie", age: 35, city: "Los Angeles" }