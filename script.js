'use strict'

let userString = '                     Lorem ipsum dolor sit amet. Est architecto soluta sit quasi dolor cum enim saepe et praesentium nesciunt qui magnam esse? Eos enim consequatur vel quis sint hic enim accusamus est dignissimos eveniet?';
//let userString = '                     Lorem ipsum';
//let userString = 5;

// четвёртое задание.
const trimString = (str) => {
  if (typeof str === 'string') {
    str = str.trim();
    alert(str.slice(0, 30) + (str.length > 30 ? '...' : ''));
  } else {
    alert('Передана не строка!');
  }
}

trimString(userString);