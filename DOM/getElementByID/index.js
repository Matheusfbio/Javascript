const getData = document.getElementById("c1");
console.log(getData.innerHTML);

const userData = [getData];

userData.map((users) => {
  return (users.innerHTML = "Matheus");
});
