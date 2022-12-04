function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat (min, max, float = 1) {
  const value = Math.random() * (max - min) + min;
  return +value.toFixed(float);
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
  const avatarsUrls = [];

  for (let i = 0; i < quantity; i++) {
    let avatarUrl;
    if (numbers[i] < 10) {
      avatarUrl = `img/avatars/user0${numbers[i]}.png`;
    } else {
      avatarUrl = `img/avatars/user${numbers[i]}.png`;
    }
    avatarsUrls.push(avatarUrl);
  }

  return avatarsUrls;
}

function getAuthors (quantity) {
  const authors = [];
  const avatarsUrls = getAvatarsUrls(quantity);

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
  const phrase = 'Объявление об аренде №';

  for (let i = 1; i <= quantity; i++) {
    const title = `${phrase} ${i}`;
    titles.push(title);
  }

  return titles;
}

function getPrices (quantity) {
  const prices = [];

  for (let i = 0; i < quantity; i++) {
    let price = getRandomFloat(5, 30, 1);
    price *= 1000;
    prices.push(price);
  }

  return prices;
}

function getTypes (quantity) {
  const types = [];
  const variants = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

  for (let i = 0; i < quantity; i++) {
    const variant = variants[getRandomInt(0, variants.length - 1)];
    types.push(variant);
  }

  return types;
}

function getRooms (quantity) {
  const rooms = [];

  for (let i = 0; i < quantity; i++) {
    const room = getRandomInt(1, 5);
    rooms.push(room);
  }

  return rooms;
}

function getGuests (quantity) {
  const guests = [];

  for (let i = 0; i < quantity; i++) {
    const guest = getRandomInt(1, 5);
    guests.push(guest);
  }

  return guests;
}

function getCheckins (quantity) {
  const checkins = [];
  const variants = ['12:00', '13:00', '14:00'];

  for (let i = 0; i < quantity; i++) {
    const checkin = variants[getRandomInt(0, variants.length - 1)];
    checkins.push(checkin);
  }

  return checkins;
}

function getCheckouts (quantity) {
  const checkouts = [];
  const variants = ['12:00', '13:00', '14:00'];

  for (let i = 0; i < quantity; i++) {
    const checkout = variants[getRandomInt(0, variants.length - 1)];
    checkouts.push(checkout);
  }

  return checkouts;
}

function getFeatures (quantity) {
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

      featuresSet.push(feature);
    }

    features.push(featuresSet);
  }

  return features;
}

function getDescriptions (quantity) {
  const descriptions = [];
  const phrase = 'Описание помещения №';

  for (let i = 1; i <= quantity; i++) {
    const description = `${phrase} ${i}`;
    descriptions.push(description);
  }

  return descriptions;
}

function getPhotos (quantity) {
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

    const photosSet = filesSet.map((element) => `${url}${element}`);
    photos.push(photosSet);
  }

  return photos;
}

function getOffers (quantity) {
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
}

function getLatitudes (quantity) {
  const latitudes = [];
  const minLatitude = 35.65000;
  const maxLatitude = 35.70000;

  for (let i = 0; i < quantity; i++) {
    const latitude = getRandomFloat(minLatitude, maxLatitude, 5);
    latitudes.push(latitude);
  }

  return latitudes;
}

function getLongitudes (quantity) {
  const longitudes = [];
  const minLongitude = 139.70000;
  const maxLongitude = 139.80000;

  for (let i = 0; i < quantity; i++) {
    const longitude = getRandomFloat(minLongitude, maxLongitude, 5);
    longitudes.push(longitude);
  }

  return longitudes;
}

function getLocations (quantity) {
  const locations = [];
  const latitudes = getLatitudes(quantity);
  const longitudes = getLongitudes(quantity);

  for (let i = 0; i < quantity; i++) {
    const location = {
      lat: latitudes[i],
      lng: longitudes[i],
    };
    locations.push(location);
  }

  return locations;
}

function getAds (quantity) {
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
    ads.push(ad);
  }

  return ads;
}

console.log(getAds(10));

