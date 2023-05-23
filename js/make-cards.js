import {genData} from './gen-data.js';

const hideElement = (element) => {
  element.style.display = 'none';
};

const renderTitle = (element, title) => {
  if (!title) {
    hideElement(element);
    return;
  }

  element.textContent = title;
};

const renderAddres = (element, addres) => {
  if (addres.includes('undefined')) {
    hideElement(element);
    return;
  }

  element.textContent = addres;
};

const renderPrice = (element, price) => {
  if (!price) {
    hideElement(element);
    return;
  }

  element.textContent = `${price} ₽/ночь`;
};

const translateType = (type) => {
  const dictionary = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель',
  };

  return dictionary[type];
};

const renderType = (element, type) => {
  if (!type) {
    hideElement(element);
    return;
  }

  element.textContent = translateType(type);
};

const renderCapacity = (element, rooms, guests) => {
  if (!rooms && !guests) {
    hideElement(element);
    return;
  }
  if (!guests) {
    element.textContent = `${rooms} комнаты`;
    return;
  }
  if (!rooms) {
    element.textContent = `Для ${guests} гостей`;
    return;
  }

  element.textContent = `${rooms} комнаты для ${guests} гостей`;
};

const renderTime = (element, checkin, checkout) => {
  if (!checkin && !checkout) {
    hideElement(element);
    return;
  }
  if (!checkout) {
    element.textContent = `Заезд после ${checkin}`;
    return;
  }
  if (!checkin) {
    element.textContent = `Выезд до ${checkout}`;
    return;
  }

  element.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
};

const renderFeatures = (element, features) => {
  if (!features) {
    hideElement(element);
    return;
  }

  const items = element.querySelectorAll('.popup__feature');

  items.forEach((item) => {
    const availability = features.some((availableFeature) => item.classList.contains(`popup__feature--${availableFeature}`));
    if (!availability) {
      item.remove();
    }
  });
};

const renderDescription = (element, description) => {
  if (!description) {
    hideElement(element);
    return;
  }
  element.textContent = description;
};

const renderPhotos = (element, photos) => {
  if (!photos) {
    hideElement(element);
    return;
  }

  const img = element.querySelector('img');
  element.innerHTML = '';

  photos.forEach((photo) => {
    const newImg = img.cloneNode(true);
    newImg.src = photo;
    element.append(newImg);
  });
};

const renderAvatar = (element, avatar) => {
  if (!avatar) {
    hideElement(element);
    return;
  }
  element.src = avatar;
};

const makeCards = () => {
  const cards = [];
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

  genData().forEach(({author, offer, location}) => {
    const card = cardTemplate.cloneNode(true);

    const title = card.querySelector('.popup__title');
    const address = card.querySelector('.popup__text--address');
    const price = card.querySelector('.popup__text--price');
    const type = card.querySelector('.popup__type');
    const capacity = card.querySelector('.popup__text--capacity');
    const time = card.querySelector('.popup__text--time');
    const features = card.querySelector('.popup__features');
    const description = card.querySelector('.popup__description');
    const photos = card.querySelector('.popup__photos');
    const avatar = card.querySelector('.popup__avatar');

    renderTitle(title, offer.title);
    renderAddres(address, offer.address);
    renderPrice(price, offer.price);
    renderType(type, offer.type);
    renderCapacity(capacity, offer.rooms, offer.guests);
    renderTime(time, offer.checkin, offer.checkout);
    renderDescription(description, offer.description);
    renderFeatures(features, offer.features);
    renderPhotos(photos, offer.photos);
    renderAvatar(avatar, author.avatar);

    cards.push(card);
  });

  return cards;
};

const testResult = makeCards();

// посмотреть отрисовку карточки

const mapCanvas = document.querySelector('.map__canvas');
mapCanvas.append(testResult[0]);
