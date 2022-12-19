const getRandomInt = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

const getRandomFloat = (min, max, float = 1) => {
  const value = Math.random() * (max - min) + min;
  return +value.toFixed(float);
};

const getRandomUniqueNumbers = (min, max) => {
  const usedNumbers = [];

  return () => {
    if (usedNumbers.length >= (max - min + 1)) {
      console.error(`Вышел за пределы заданного диапазона от ${min} до ${max}`);
      return;
    }

    let number = getRandomInt(min, max);
    while (usedNumbers.includes(number)) {
      number = getRandomInt(min, max);
    }
    usedNumbers.push(number);
    return number;
  };
};

const getAuthors = (quantity) => {
  const authors = [];
  const getRandomUniqueNumber = getRandomUniqueNumbers(1, quantity);

  for (let i = 0; i < quantity; i++) {
    const number = getRandomUniqueNumber();
    const author = {
      avatar: number < 10 ? `img/avatars/user0${number}.png` : `img/avatars/user${number}.png`
    };
    authors[i] = author;
  }

  return authors;
};

const getTitles = (quantity) => {
  const titles = [];
  const phrase = 'Объявление об аренде №';

  for (let i = 1; i <= quantity; i++) {
    const title = `${phrase} ${i}`;
    titles[i - 1] = title;
  }

  return titles;
};

const getPrices = (quantity) => {
  const prices = [];

  for (let i = 0; i < quantity; i++) {
    prices[i] = getRandomFloat(5, 30, 1) * 1000;
  }

  return prices;
};

const getTypes = (quantity) => {
  const types = [];
  const variants = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

  for (let i = 0; i < quantity; i++) {
    types[i] = variants[getRandomInt(0, variants.length - 1)];
  }

  return types;
};

const getRooms = (quantity) => {
  const rooms = [];

  for (let i = 0; i < quantity; i++) {
    rooms[i] = getRandomInt(1, 5);
  }

  return rooms;
};

const getGuests = (quantity) => {
  const guests = [];

  for (let i = 0; i < quantity; i++) {
    guests[i] = getRandomInt(1, 3);
  }

  return guests;
};

const getCheckins = (quantity) => {
  const checkins = [];
  const variants = ['12:00', '13:00', '14:00'];

  for (let i = 0; i < quantity; i++) {
    checkins[i] = variants[getRandomInt(0, variants.length - 1)];
  }

  return checkins;
};

const getCheckouts = (quantity) => {
  const checkouts = [];
  const variants = ['12:00', '13:00', '14:00'];

  for (let i = 0; i < quantity; i++) {
    checkouts[i] = variants[getRandomInt(0, variants.length - 1)];
  }

  return checkouts;
};

const getFeatures = (quantity) => {
  const features = [];
  const variants = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  for (let i = 0; i < quantity; i++) {
    const featuresSet = [];
    const featuresSetLength = getRandomInt(1, variants.length);

    for (let j = 0; j < featuresSetLength; j++) {
      let feature = variants[getRandomInt(0, variants.length - 1)];
      while (featuresSet.includes(feature)) {
        feature = variants[getRandomInt(0, variants.length - 1)];
      }

      featuresSet[j] = feature;
    }

    features[i] = featuresSet;
  }

  return features;
};

const getDescriptions = (quantity) => {
  const descriptions = [];
  const phrase = 'Описание помещения №';

  for (let i = 1; i <= quantity; i++) {
    descriptions[i - 1] = `${phrase} ${i}`;
  }

  return descriptions;
};

const getPhotos = (quantity) => {
  const photos = [];
  const url = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
  const files = ['duonguyen-8LrGtIxxa4w.jpg', 'brandon-hoogenboom-SNxQGWxZQi0.jpg', 'claire-rendall-b6kAwr1i0Iw.jpg'];

  for (let i = 0; i < quantity; i++) {
    const filesSet = [];
    const filesSetLength = getRandomInt(1, files.length);

    for (let j = 0; j < filesSetLength; j++) {
      let file = files[getRandomInt(0, files.length - 1)];
      while (filesSet.includes(file)) {
        file = files[getRandomInt(0, files.length - 1)];
      }
      filesSet.push(file);
    }

    photos[i] = filesSet.map((element) => `${url}${element}`);
  }

  return photos;
};

const getOffers = (quantity) => {
  const offers = [];
  const titles = getTitles(quantity);
  const prices = getPrices(quantity);
  const types = getTypes(quantity);
  const rooms = getRooms(quantity);
  const guests = getGuests(quantity);
  const checkins = getCheckins(quantity);
  const checkouts = getCheckouts(quantity);
  const features = getFeatures(quantity);
  const photos = getPhotos(quantity);
  const descriptions = getDescriptions(quantity);

  for (let i = 0; i < quantity; i++) {
    const offer = {
      title: titles[i],
      price: prices[i],
      type: types[i],
      rooms: rooms[i],
      guests: guests[i],
      checkin: checkins[i],
      checkout: checkouts[i],
      features: features[i],
      photos: photos[i],
      description: descriptions[i],
    };
    offers.push(offer);
  }

  return offers;
};

const getLocations = (quantity) => {
  const locations = [];
  const minLatitude = 35.65000;
  const maxLatitude = 35.70000;
  const minLongitude = 139.70000;
  const maxLongitude = 139.80000;

  for (let i = 0; i < quantity; i++) {
    const location = {
      lat: getRandomFloat(minLatitude, maxLatitude, 5),
      lng: getRandomFloat(minLongitude, maxLongitude, 5),
    };
    locations[i] = location;
  }

  return locations;
};

const getAds = (quantity) => {
  const ads = [];
  const authors = getAuthors(quantity);
  const offers = getOffers(quantity);
  const locations = getLocations(quantity);

  for (let i = 0; i < offers.length; i++) {
    offers[i].address = `${locations[i].lat}, ${locations[i].lng}`;
  }

  for (let i = 0; i < quantity; i++) {
    const ad = {
      author: authors[i],
      offer: offers[i],
      location: locations[i],
    };
    ads[i] = ad;
  }

  return ads;
};

console.log(getAds(10));

