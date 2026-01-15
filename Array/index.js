// const country = ["Equatorial Guinea", "Samoa", "Seychelles"]
const users = [{
  "first_name": "Rebekah",
  "last_name": "Mangham",
  "email": "rmangham0@unicef.org",
  "gender": "Female",
  "ip_address": "219.28.255.8"
}, {
  "first_name": "Paxon",
  "last_name": "Moyser",
  "email": "pmoyser1@tripadvisor.com",
  "gender": "Male",
  "ip_address": "249.192.128.228"
}, {
  "first_name": "Titus",
  "last_name": "Shanklin",
  "email": "tshanklin2@arizona.edu",
  "gender": "Male",
  "ip_address": "85.182.236.54"
}, {
  "first_name": "Juliane",
  "last_name": "Frew",
  "email": "jfrew3@patch.com",
  "gender": "Female",
  "ip_address": "177.128.204.201"
}]

// users.map((user) => {
//   console.log(user.email)

// })

// Array.from(objIteravel, (elAtual, index) => value)

// users.map((user) => {
//   console.log(`Name:${user.first_name}\nEmail:${user.email}\n`);
// })

const showUser = 
// Create te the array with 3 elements
//        (array-like object)
Array.from({length: 3}, 
//so, from this, to use the function to follow to fill the array 
//(recently value, index)
//If is not using, change to "_" 
  (_, i) => (({
    id: i + 1,
    name: `User ${i + 1}`
})))


console.table(showUser)
