//exemple
// function PromiseFunc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Await here!!!");
//       resolve();
//     }, 2000);
//   });
// }

// async function CallFunctions() {
//   console.log("Starting");

//   await PromiseFunc();

//   console.log("Finished");
// }

// CallFunctions();

function fetchUsers(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.error(err));
}

async function getUsers(id) {
  try {
    const users = await fetchUsers(id);
    if (users.length > 0) {
      const user = users[0];
      console.log(`User's name is ${user.username}`);
    } else {
      console.error("User not found"); // Caso o array esteja vazio.
    }
  } catch (error) {
    console.error(`Error : ${error}`);
  }
}

getUsers(1);
