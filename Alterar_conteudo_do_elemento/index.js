//Select this element html
const title = document.querySelector("#title");

//innerHTML
title.innerHTML = "Trocando o texto";
//textContent é o mais utilizado, recomendado e perrformatico
const infoProduts = document.querySelector(".info");

infoProduts.textContent = "Alimentos com descontos";
