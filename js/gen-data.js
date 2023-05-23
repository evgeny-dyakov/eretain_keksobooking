const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min, max, fix) => +(Math.random() * (max - min) + min).toFixed(fix);

const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

const shuffle = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let randomElement = getRandomElement(array);
    while (result.includes(randomElement)) {
      randomElement = getRandomElement(array);
    }
    result.push(randomElement);
  }
  return result;
};

const getAvatar = (i) => {
  let number = i + 1;
  if (number < 10) {
    number = `0${number}`;
  }
  return `img/avatars/user${number}.png`;
};

const getTitles = () => [
  'Квартира в центре',
  'Дом с бассейном',
  'Студия в новостройке',
  'Мансарда у метро',
  'Коттедж на озере',
  'Двушка в элитке',
  'Хостел с Wi-Fi',
  'Вилла на море',
  'Однушка с ремонтом',
  'Лофт в заводе'
];

const getPrice = () => {
  const minPrice = 3000;
  const maxPrice = 10000;
  let price = getRandomInt(minPrice, maxPrice);
  price /= 100;
  price = price.toFixed(0);
  price *= 100;
  return price;
};

const getType = () => {
  const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const randomIndex = getRandomInt(0, types.length - 1);
  return types[randomIndex];
};

const getRooms = () => {
  const minRooms = 2;
  const maxRooms = 4;
  return getRandomInt(minRooms, maxRooms);
};

const getGuests = () => {
  const minGuests = 2;
  const maxGuests = 5;
  return getRandomInt(minGuests, maxGuests);
};

const getCheckin = () => {
  const checkins = ['12:00', '13:00', '14:00'];
  const randomIndex = getRandomInt(0, checkins.length - 1);
  return checkins[randomIndex];
};

const getCheckout = () => {
  const checkouts = ['12:00', '13:00', '14:00'];
  const randomIndex = getRandomInt(0, checkouts.length - 1);
  return checkouts[randomIndex];
};

const getFeatures = () => {
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  return shuffle(features).slice(0, getRandomInt(1, features.length));
};

const getDescription = () => [
  'Однокомнатная квартира в центре с парковым видом. Мебель, техника, интернет.',
  'Двухкомнатная квартира в новом доме на окраине. Светлая, чистая, с ремонтом и балконом. Магазины, остановки, школа рядом.',
  'Трехкомнатная квартира в сталинском доме в историческом районе. Высокие потолки, паркет, камин. Мебель в классическом стиле.',
  'Студия в современном комплексе с закрытой территорией и охраной. Евроремонт, кондиционер, посудомоечная машина. Спортзал и бассейн в доме.',
  'Четырехкомнатная квартира в элитном доме на набережной. Панорамные окна, джакузи, сауна. Дизайнерский ремонт и мебель.',
  'Однокомнатная квартира в спальном районе с развитой инфраструктурой. Косметический ремонт, холодильник, стиральная машина. Тихий двор и детска,я площадка.',
  'Двухкомнатная квартира в кирпичном доме в зеленом районе. Лоджия застеклена, полы с подогревом, интернет и ТВ. Рядом лес и озеро.',
  'Трехкомнатная квартира в монолитном доме в деловом центре. Кухня-гостиная, две спальни, два санузла. Консьерж и подземный паркинг.',
  'Студия в старом доме в центре города. Атмосферная и уютная, с деревянными балками и кирпичной стеной. Минималистичный интерьер и светильники.',
  'Четырехкомнатная квартира в коттедже на окраине города. Большая гостиная с камином, три спальни, три санузла. Участок с ландшафтным дизайном и беседкой.'
];

const getPhotos = () => {
  const availablePhotos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  const minPhotosCount = 3;
  const maxPhotosCount = 5;
  const currentPhotosCount = getRandomInt(minPhotosCount, maxPhotosCount);
  const photos = [];
  for (let i = 0; i < currentPhotosCount; i++) {
    photos[i] = getRandomElement(availablePhotos);
  }
  return photos;
};

const getLat = () => {
  const minLat = 35.65000;
  const maxLat = 35.70000;
  const fix = 5;
  return getRandomFloat(minLat, maxLat, fix);
};

const getLng = () => {
  const minLng = 139.70000;
  const maxLng = 139.80000;
  const fix = 5;
  return getRandomFloat(minLng, maxLng, fix);
};

const genData = () => {
  const ads = [];
  const adsQuantity = 10;
  const titles = shuffle(getTitles());
  const descriptions = shuffle(getDescription());
  for (let i = 0; i < adsQuantity; i++) {
    const lat = getLat();
    const lng = getLng();
    const ad = {
      author: {
        avatar: getAvatar(i),
      },
      offer: {
        title: titles[i],
        address: `${lat}, ${lng}`,
        price: getPrice(),
        type: getType(),
        rooms: getRooms(),
        guests: getGuests(),
        checkin: getCheckin(),
        checkout: getCheckout(),
        features: getFeatures(),
        description: descriptions[i],
        photos: getPhotos(),
      },
      location: {
        lat: lat,
        lng: lng,
      },
    };
    ads[i] = ad;
  }
  return ads;
};

export {genData};
