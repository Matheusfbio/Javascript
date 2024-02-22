// # criando error

// function soma(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error("x e y must be number");
//   }
//   return x + y;
// }

// try {
//   console.log(soma(3, 3));
//   console.log(soma("3", 3));
// } catch (error) {
//   console.log(error);
// }

// try {
//   console.log(a);
//   console.log("Abrir um arquivo");
//   console.log("Manipulando o arquivo e gerou error");
//   console.log("Fechei o arquivo");

//   try {
//     console.log(b);
//   } catch (error) {
//     console.log("Deu error");
//   } finally {
//     console.log("Finaly: exexutado sempre v1");
//   }
// } catch (error) {
//   console.log("Tratando o error");
// } finally {
//   console.log("Finaly: exexutado sempre v2");
// }

fuction retornaHora(data) {
  if (data && !(data instaceof Date)) {
    throw new TypeError("waiting the instace of date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}


const hour = retornaHora();
console.log(hour);