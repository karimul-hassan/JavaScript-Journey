// Generate a random number between 10 to 20.

function getRandomNumber() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

console.log(getRandomNumber());
