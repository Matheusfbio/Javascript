const emails = [...document.querySelectorAll(".emails")];

emails.map((email) => {
  email.addEventListener("click", (e) => {
    const email = e.target;
    email.classList.toggle("destaque")
    console.log(email.innerHTML + "click ");
  })
})
