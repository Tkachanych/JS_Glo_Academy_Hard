'use strict'

let userString = '                     Lorem ipsum dolor sit amet. Est architecto soluta sit quasi dolor cum enim saepe et praesentium nesciunt qui magnam esse? Eos enim consequatur vel quis sint hic enim accusamus est dignissimos eveniet?';

// четвёртое задание.
const trimString = (str) => {
  if (typeof str !== 'string') throw new TypeError('Передана не строка!');

  str = str.trim();

  return str.slice(0, 30) + (str.length > 30 ? '...' : '');
}

console.log(trimString(userString));
console.log(trimString('Привет!'));
console.log(trimString({wtf: `WTF`}));
