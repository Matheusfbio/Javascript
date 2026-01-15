const obj = [{ "nome": "Ana", "idade": 20 }, { "nome": "Bia", "idade": 25 }, { "nome": "Carlos", "idade": 30 }];
const data = obj.map((AllData, index) => { return { id: index + 1, ...AllData } });

console.log(data);