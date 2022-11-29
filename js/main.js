function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat (min, max, float) {
  const value = Math.random() * (max - min) + min;
  return value.toFixed(float);
}

function getMixedNumberArray (length) {
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
  const array = getMixedNumberArray(quantity);
  return array.map((element) => element < 10 ? `img/avatars/user0${element}.png` : `img/avatars/user${element}.png`);
}

// const avatarsUrls = getAvatarsUrls(4);

// function getAvatar () {
//   return {
//     avatar:
//   }
// }


// создать массив из четырех объектов с перемешанными адресами

// const result = Array.from({length: 4}, );

// const someObj = {
//   author: {
//     avatar: 'адрес изображения'
//   },
//   offer: {
//     title: 'заголовок объявления',
//     address: 'адрес',
//     price: 50000,
//     type: '',
//     rooms: 3,

//   },
// };
