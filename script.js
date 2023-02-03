'use strict';

const tryToGues = function (numToGuess, tryCounts) {

  let userAnswer;

  const isNumber = function (num) {
    return typeof num === 'number' && isFinite(num);
  }

  const getAnswer = function (str) {
    if (str === null) {
      return null;
    } else if (isNumber(+str) && str !== '') {
      return parseInt(str);
    } else {
      return getAnswer(prompt('Введи число!'));
    }
  }

  userAnswer = getAnswer(prompt('Угадай число от 1 до 100'));

  switch (true) {

    case userAnswer === null:
      alert('Игра окончена!');
      return;

    case tryCounts < 1:
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        return 1;
      } else {
        alert('Игра окончена!');
        return;
      }

    case numToGuess < userAnswer:
      alert(`Загаданное число меньше, осталось попыток ${tryCounts--}`);
      return tryToGues(numToGuess, tryCounts);

    case numToGuess > userAnswer:
      alert(`Загаданное число больше, осталось попыток ${tryCounts--}`);
      return tryToGues(numToGuess, tryCounts);

    case numToGuess === userAnswer:
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        return 1;
      } else {
        alert('Игра окончена!');
        return 0;
      }
  }
}

const game = function (start) {

  const num = Math.floor(Math.random() * 100) + 1

  if (start === 0) { 
    return;
  } else {
    console.log(num);
    return game(tryToGues(num, 9));
  }
}

debugger;
game(1);