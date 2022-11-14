function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(1, 3));

function getRandomFloatInclusive (min, max, floatValue) {
  const value = Math.random() * (max - min) + min;
  return value.toFixed(floatValue);
}

console.log(getRandomFloatInclusive(0.1, 0.3, 3));
