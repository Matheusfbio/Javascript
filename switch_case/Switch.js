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

// const data = new Date("1987-04-27 00:00:00");
// const diaSemana = data.getDay();
// const diaSemanaTexto = HandleGetDay(diaSemana);

// console.log(diaSemana, "-", diaSemanaTexto);
// for

const colocado = 6;

switch (colocado) {
  case 1:
    console.log("Primeiro lugar");
    break;
  case 2:
    console.log("Segundo lugar");
    break;
  case 3:
    console.log("Terceiro lugar");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log("Obrigado por participar");
    break;

  default:
    console.log("Opção não encontrado");

    break;
}
