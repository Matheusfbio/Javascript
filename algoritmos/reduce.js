const obj = [{ "nome": "Ana", "idade": 20, "invite": 12 }, { "nome": "Bia", "idade": 25, "invite": 42 }, { "nome": "Carlos", "idade": 30, "invite": 33 }];
const data = obj.map((AllData, index) => { return { id: index + 1, ...AllData } });

console.log(data);

// filter

// const filterData = data.filter((item) => item.idade > 22);
// console.log(`Dados filtrados: `, filterData);

const filterInvite = data.filter((user) => user.invite > 12);
console.log(`Dados com menos de 12 ingressos: `, filterInvite);

const totalInvite = filterInvite.reduce((acc, n) => acc + n.invite, 0);
console.log(`Soma dos ingressos: `, totalInvite);