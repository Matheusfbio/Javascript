var x = 10;

while (x < 100) {
  x += 10;
  if (x === 50) {
    console.log("Você consegui um cupon de desconto " + x + "%");
    continue;
  }
  console.log("Não foi dessa vez");
}
