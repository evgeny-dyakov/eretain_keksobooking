const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min, max, fix) => +(Math.random() * (max - min) + min).toFixed(fix);

const getMixedNumbers = (min, max) => {
  const mixedNumbers = [];

  for (let i = 0; i < max - min + 1; i++) {
    let number = getRandomInt(min, max);
    while (mixedNumbers.includes(number)) {
      number = getRandomInt(min, max);
    }
    mixedNumbers[i] = number;
  }

  return mixedNumbers;
};

const getType = () => {
  const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  return types[getRandomInt(0, types.length - 1)];
};

const getCheck = (inOut) => {
  const check = {
    in: ['12:00', '13:00', '14:00'],
    out: ['12:00', '13:00', '14:00'],
  };

  return check[inOut][getRandomInt(0, check[inOut].length - 1)];
};

const getFeatures = () => {
  const set = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const features = [];

  const featuresLength = getRandomInt(1, set.length);

  for (let i = 0; i < featuresLength; i++) {
    let feature = set[getRandomInt(0, set.length - 1)];
    while (features.includes(feature)) {
      feature = set[getRandomInt(0, set.length - 1)];
    }
    features[i] = feature;
  }

  return features;
};

const getPhotos = () => {
  const set = ['duonguyen-8LrGtIxxa4w.jpg', 'brandon-hoogenboom-SNxQGWxZQi0.jpg', 'claire-rendall-b6kAwr1i0Iw.jpg'];
  const url = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
  const photos = [];

  const photosLength = getRandomInt(1, set.length);

  for (let i = 0; i < photosLength; i++) {
    let photo = set[getRandomInt(0, set.length - 1)];
    while (photos.includes(photo)) {
      photo = set[getRandomInt(0, set.length - 1)];
    }
    photos[i] = url + photo;
  }

  return photos;
};

const getAuthors = (quantity) => {
  const authors = [];
  const mixedNumbers = getMixedNumbers(1, quantity);

  for (let i = 0; i < quantity; i++) {
    const number = mixedNumbers[i];
    authors[i] = {
      avatar: number < 10 ? `img/avatars/user0${number}.png` : `img/avatars/user${number}.png`,
    };
  }

  return authors;
};

const getOffers = (quantity) => {
  const offers = [];

  for (let i = 0; i < quantity; i++) {
    const offer = {
      title: `заголовок ${i + 1}`,
      price: getRandomFloat(15, 50, 1) * 1000,
      type: getType(),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 5),
      checkin: getCheck('in'),
      checkout: getCheck('out'),
      features: getFeatures(),
      description: `описание ${i + 1}`,
      photos: getPhotos(),
    };
    offers[i] = offer;
  }

  return offers;
};

const getLocations = (quantity) => {
  const locations = [];

  for (let i = 0; i < quantity; i++) {
    locations[i] = {
      lat: getRandomFloat(35.65, 35.7, 5),
      lng: getRandomFloat(139.7, 139.8, 5),
    };
  }

  return locations;
};

const getAds = (quantity) => {
  const ads = [];

  const authors = getAuthors(quantity);
  const offers = getOffers(quantity);
  const locations = getLocations(quantity);

  for (let i = 0; i < quantity; i++) {
    offers[i].address = `${locations[i].lat}, ${locations[i].lng}`;
  }

  for (let i = 0; i < quantity; i++) {
    ads[i] = ({
      author: authors[i],
      offer: offers[i],
      location: locations[i],
    });
  }

  return ads;
};

export {getAds};
