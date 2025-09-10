const country = document.querySelector("#countries");
const btn_countries = [...document.querySelectorAll(".country")];

const countries = ["MicronesiaLiberia", "Chad", "Panama", "Micronesia", "Mauritania", "Guernsey", "Belize", "Kenya"]

countries.map((e, key) => {
  const renderCountries = document.createElement("div");
  renderCountries.setAttribute("id", "c" + key);
  renderCountries.setAttribute("class", "country ct-1");
  renderCountries.innerHTML = e
  
  const btn_delete = document.createElement("img");
  btn_delete.setAttribute("src", "./delete.png");
  btn_delete.setAttribute("class", "btn-delete");
  renderCountries.appendChild(btn_delete);

  renderCountries.addEventListener("click", (event) => {
    country.removeChild(event.target.parentNode);  
  })
  country.appendChild(renderCountries);
})
