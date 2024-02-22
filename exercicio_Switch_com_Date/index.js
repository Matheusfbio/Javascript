const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
});

// const h1 = document.querySelector(".container h1");
// const data = new Date();

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function HandleGetDay(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "Segunda";
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = "Terça";
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = "Quarta";
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = "Quinta";
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = "Sexta";
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = "Sabado";
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto: "";
//       return diaSemanaTexto;
//   }
// }

// function HandleGetMonths(numbersMonths) {
//   let nameMonth;

//   switch (numbersMonths) {
//     case 0:
//       nameMonth = "dezembro";
//       return nameMonth;
//     case 1:
//       nameMonth = "janeiro";
//       return nameMonth;
//     case 2:
//       nameMonth = "fevereiro";
//       return nameMonth;
//     case 3:
//       nameMonth = "março";
//       return nameMonth;
//     case 4:
//       nameMonth = "abril";
//       return nameMonth;
//     case 5:
//       nameMonth = "maio";
//       return nameMonth;
//     case 6:
//       nameMonth = "junho";
//       return nameMonth;
//     case 7:
//       nameMonth = "julho";
//       return nameMonth;
//     case 8:
//       nameMonth = "agosto";
//       return nameMonth;
//     case 9:
//       nameMonth = "setembro";
//       return nameMonth;
//     case 10:
//       nameMonth = "outubro";
//       return nameMonth;
//     case 11:
//       nameMonth = "novembro";
//       return nameMonth;
//     default:
//       nameMonth: "";
//       return nameMonth;
//   }
// }

// function DoData(data) {
//   const DayWeek = data.getDay();
//   const numberMonth = data.getMonth();

//   const nameDay = HandleGetDay(diaSemana);
//   const nameMonths = HandleGetMonths(numbersMonths);

//   return (
//     `${nameDay}, ${data.getDay()} de ${nameMonths}` +
//     `${data.getFullYear()} ` +
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = DoData(data);
console.log(data);
