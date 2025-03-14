// Removendo elemento filho
const p = document.querySelector("#listas-produtos");
console.log(p);
const removeBanana = document.querySelector("#listas-produtos li");
console.log(removeBanana);
p.removeChild(removeBanana);
// Removendo elemento pai
const removeParagraph = document.querySelector(".info-promo");
console.log(removeParagraph);
removeParagraph.remove();
