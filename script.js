'use strict';

const game = function (tryCounts) {

  let userAnswer;

  const numToGuess = Math.round(Math.random() * 100);
  console.log(numToGuess);

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

  const tryToGues = function (numToGuess) {

    userAnswer = getAnswer(prompt('Угадай число от 1 до 100'));

    switch (true) {

      case userAnswer === null:
        alert('Игра окончена!');
        return;

      case tryCounts < 1:
        if (confirm('Попытки закончились, хотите сыграть еще?')) {
          return game(10);
        } else {
          alert('Игра окончена!');
          return;
        }

      case numToGuess < userAnswer:
        alert(`Загаданное число меньше, осталось попыток ${tryCounts--}`);
        return tryToGues(numToGuess);

      case numToGuess > userAnswer:
        alert(`Загаданное число больше, осталось попыток ${tryCounts--}`);
        return tryToGues(numToGuess);

      case numToGuess === userAnswer:
        if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
          return game(9);
        } else {
          alert('Игра окончена!');
          return;
        }
    }
  }

  tryToGues(numToGuess);
}

game(9);