/* 
- If pode ser usado sozinho
- Sempre que utilizado a palavra else, preciso de um if antes
- Eu posso ter varios else ifs na checagem
- So posso ter um else na checagem
- Podemos usar condiçoes sem else if, utilizando apenas e else
*/

const hora = 12;

if (hora >= 0 && hora <= 11){
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');
} else {
  console.log('ola');
}