function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat (min, max, float) {
  const value = Math.random() * (max - min) + min;
  return value.toFixed(float);
}

function getMixedNumbers (length) {
  const array = [];
  for (let i = 1; i <= length; i++) {
    let number = getRandomInt(1, length);
    while(array.includes(number)) {
      number = getRandomInt(1, length);
    }
    array.push(number);
  }
  return array;
}

function getAvatarsUrls (quantity) {
  const numbers = getMixedNumbers(quantity);
  return numbers.map((element) => element < 10 ? `img/avatars/user0${element}.png` : `img/avatars/user${element}.png`);
}

function getAuthors (quantity) {
  const authors = [];
  const avatarsUrls = getAvatarsUrls(quantity);

  console.log(avatarsUrls);

  for (let i = 0; i < quantity; i++) {
    const author = {
      avatar: avatarsUrls[i],
    };
    authors.push(author);
  }

  return authors;
}

function getTitles (quantity) {
  const titles = [];
  const phrase = `Объявление об аренде №`;
  for (let i = 1; i <= quantity; i++) {
    const title = `${phrase} ${i}`;
    titles.push(title);
  }
  console.log(titles);
  return titles;
}

function getOffers (quantity) {
  const offers = [];
  const titles = getTitles(quantity);

  for (let i = 0; i < quantity; i++) {
    const offer = {
      title: titles[i],
    };
    offers.push(offer);
  }

  return offers;
}

function getAds (quantity) {
  const ads = [];
  const authors = getAuthors(quantity);
  const offers = getOffers(quantity);

  for (let i = 0; i < quantity; i++) {
    const ad = {
      author: authors[i],
      offer: offers[i],
    };

    ads.push(ad);
  }

  return ads;
}

console.log(getAds(5));
