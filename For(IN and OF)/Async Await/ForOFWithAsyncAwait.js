// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response) {
//       throw new Error(`Error ${response.status} - ${response.statusText}`);
//     }

//     const posts = await response.json();

//     // Iterando pelos dados com for...of
//     for (const post of posts) {
//       console.log(`ID: ${post.id}`);
//       console.log(`Título: ${post.title}`);
//       console.log(`Corpo: ${post.body}`);
//       console.log("---------------");
//     }
//   } catch (error) {
//     console.error("Erro ao buscar os dados:", error.message);
//   }
// }

// getPosts();
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// async function fetchPosts() {
//   for (const url of urls) {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(`Titilo: ${data.title}`);
//   }
// }

// fetchPosts();

// Consumir os dados de uma api usando async await com for of e async await
// async function getUsers(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users?id=${id}`
//     );
//     if (!response) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }
//     const users = await response.json();

//     for (const user of users) {
//       // console.log(user);
//       console.log(`Nome: ${user.name}`);
//       console.log(`Username: ${user.username}`);
//       console.log(`Email: ${user.email}`);
//       console.log(
//         `Endereço: ${user.address.street}, ${user.address.suite}, ${user.address.zipcode} `
//       );
//     }
//   } catch (error) {
//     console.error("Erro: ", error.message);
//   }
// }

// getUsers(2);

// Consumir os dados de uma api usando async await com .map e async await
// const start = performance.now();

async function getUsers(id) {
  console.time();
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );
    if (!response) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const users = await response.json();

    // console.log(users);

    console.log(users.map((user) => `${user.username}, ${user.email}`));
  } catch (error) {
    console.error("Erro: ", error.message);
  }
  console.timeEnd();
}

// console.log(`Tempo de execução: ${start - end}ms`);

getUsers(1);
