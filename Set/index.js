const music = new Set([
  "rock",
  "pop",
  "jazz",
  "classical",
  "hip hop",
]);

// Add a new genre
music.add("electronic");
music.add("electronic-remix");

console.table(music);

music.forEach((genere) => {
  genere.endsWith("-remix") ? console.log(`${genere} is a remix genre`) : null;
})
