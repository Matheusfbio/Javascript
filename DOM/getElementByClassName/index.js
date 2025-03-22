// Objective: Get all elements with a specific class name

const courses = [...document.getElementsByClassName("emails")];
const emails1 = [...document.getElementsByClassName("email-1")];
const emails2 = [...document.getElementsByClassName("email-2")];

// getElementsByClassName returns a HTMLCollection
const AllEmails = [...document.querySelectorAll(".emails")];

console.log(courses);
console.log(emails1);
console.log(emails2);

//Mapped through all the emails and added a class to them
AllEmails.map((emails) => {
  return emails.classList.add("never");
});
