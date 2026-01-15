const obj = [{ "nome": "Ana", "idade": 30, "invite": 12 }, { "nome": "Clara", "idade": 20, "invite": 12 }, { "nome": "Bia", "idade": 25, "invite": 42 }, { "nome": "Carlos", "idade": 30, "invite": 33 }];
const data = obj.map((AllData, index) => { return { id: index + 1, ...AllData } });

console.log(data);

const findUsers = data.find((user) => user.nome === "Ana");
console.log(`Usuário encontrado:\nNome: ${findUsers.nome} \nInvite: ${findUsers.invite}`);

