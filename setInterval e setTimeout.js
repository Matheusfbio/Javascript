function showHour() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour24: true,
  });
}

function funcaoDoInterval() {
  console.log(showHour());
}

setInterval(funcaoDoInterval, 1000);
