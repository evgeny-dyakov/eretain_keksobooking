function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 3);

function getRandomFloatInclusive (min, max, float) {
  const value = Math.random() * (max - min) + min;
  return value.toFixed(float);
}

getRandomFloatInclusive(0.25, 0.26, 2);

