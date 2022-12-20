const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min, max, float) => +(Math.random() * (max - min) + min).toFixed(float);

const getRandomUniqueInt = () => {
  const used = [];

  return (min, max) => {
    if (used.length >= max - min + 1) {
      console.error(`вне диапазона от ${min} до ${max}`);
      return null;
    }

    let number = getRandomInt(min, max);
    while (used.includes(number)) {
      number = getRandomInt(min, max);
    }
    used.push(number);
    return number;
  };
};

const getSerialNumber = () => {
  let number = 0;

  return () => ++number;
};

const getAvatarRandomUniqueInt = getRandomUniqueInt();

const getTitleSerialNumber = getSerialNumber();

const getAvatar = (quantity) => {
  const number = getAvatarRandomUniqueInt(1, quantity);
  return number < 10 ? `img/avatars/user${number}.png` : `img/avatars/user0${number}.png`;
};

const getAuthor = (quantity) => ({
  avatar: getAvatar(quantity),
});

const getTitle = () => {
  const title = `заголовок предложения ${getTitleSerialNumber()}`;
  return title;
};

const getOffer = (quantity) => ({
  title: getTitle(),
  address: 'значение',
  price: 'значение',
  type: 'значение',
  rooms: 'значение',
  guests: 'значение',
  checkin: 'значение',
  checkout: 'значение',
  features: 'значение',
  description: 'значение',
  photos: 'значение',
});

const getLocation = () => ({
  lat: 'значение',
  lng: 'значение',
});

const getAds = (quantity) => {
  const ads = [];

  for (let i = 0; i < quantity; i++) {
    ads[i] = ({
      author: getAuthor(quantity),
      offer: getOffer(quantity),
      location: getLocation(quantity),
    });
  }

  return ads;
};

console.log(getAds(5));
