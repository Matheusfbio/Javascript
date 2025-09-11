const country = document.querySelector("#countries");
const btn_countries = [...document.querySelectorAll(".country")];

const countries = ["MicronesiaLiberia", "Chad", "Panama", "Micronesia", "Mauritania", "Guernsey", "Belize", "Kenya"]

countries.map((e, key) => {
  const renderCountries = document.createElement("div");
  renderCountries.setAttribute("id", "c" + key);
  renderCountries.setAttribute("class", "country ct-1");

  const countryName = document.createElement("span");
  countryName.textContent = e;
  renderCountries.appendChild(countryName);
  
  const btn_delete = document.createElement("img");
  btn_delete.setAttribute("src", "./delete.png");
  btn_delete.setAttribute("class", "btn-delete");
  renderCountries.appendChild(btn_delete);

  btn_delete.addEventListener("click", () => {
    country.removeChild(renderCountries);
  })
  country.appendChild(renderCountries);
})