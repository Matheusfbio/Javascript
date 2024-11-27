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
  return fetch(`https://reqdddres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.error(err));
}

async function getUsers(id) {
  try {
    const user = await fetchUsers(id);

    console.log(`user's name is ${user.data.first_name}`);
  } catch (error) {
    console.error(`Error : ${error}`);
  }
}

getUsers(1);
