const estoques = [45, 200, 72, 150, 89, 34, 110, 99];

for (const quantidade of estoques) {
  //Show only the par numbers
  // if (quantidade % 2 === 0 && quantidade >= 100) {

  //Show All supply
  if (quantidade % 2 === 0) {
    if (quantidade > 100) {
      console.log(`estoque alto ${quantidade}`);
    } else {
      console.log(`estoque em nivel aceitavel ${quantidade}`);
    }
  }
}
