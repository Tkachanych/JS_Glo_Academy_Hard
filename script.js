'use strict'

const generateArray = () => {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push((Math.random() * 100000).toFixed());
  }
  return arr;
}

//Вывести в консоль только те, что начинаются с цифры 2 или 4
for (let i of generateArray()) {
  let twoOrFour = i.toString().charAt(0) === '2' || i.toString().charAt(0) === '4';
  if (twoOrFour) {console.log(i);}
}

// Вывести в столбик все простые числа от 1 до 100
for (let i = 2; i <= 100; i++) {
  let dividerCount = 2;

  for (let j = 2; j <= Math.floor(i / 2); j++) {
    dividerCount += i % j === 0 ? 1 : 0;
  }

  if (dividerCount === 2) {
    console.log(`${i} Делители этого числа: 1 и ${i}`);
  }
}