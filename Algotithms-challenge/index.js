// -- Directions
// Given a string, return a new string with the reversed
// order of charecters

// -- Examples
// reverse('apple') === 'apple'
// reverse('nokia') === 'aikon'
// reverse('hello') === 'olleh'

function reverse(string) {
  return string.split("").reverse().join("");
}

// console.log(reverse("hello"));

module.exports = reverse;
