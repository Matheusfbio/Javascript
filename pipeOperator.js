// Atualmente, o operador pipe (|>) ainda está em proposta no comitê TC39 (etapa 2), o que significa que ele ainda não é nativamente suportado pela maioria dos navegadores ou ambientes JavaScript. No entanto, você pode experimentá-lo em projetos usando transpiladores, como Babel, ou com ferramentas experimentais.

const add = (a, b) => a + b;
const double = (x) => x * 2;

const result = 5 |> add(#, 10) |> double;
console.log(result); // 30
