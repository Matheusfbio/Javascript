const countriesContainer = document.querySelector("#countries");

const countries = ["Micronesia", "Liberia", "Chad", "Panama", "Mauritania", "Guernsey", "Belize", "Kenya"];

countries.forEach((countryName, key) => {
  const countryElement = document.createElement("div");
  countryElement.setAttribute("id", "c" + key);
  countryElement.setAttribute("class", "country");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = countryName;
  countryElement.appendChild(nameSpan);
  
  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "./delete.png");
  deleteBtn.setAttribute("class", "btn-delete");
  countryElement.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    countriesContainer.removeChild(countryElement);
  });
  
  countriesContainer.appendChild(countryElement);
});