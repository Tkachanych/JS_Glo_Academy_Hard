'use strict';

// Второе задание

// Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа
let result = num.toString()
                .split('')
                .reduce((sum, currentValue) => sum * +currentValue, 1);

console.log(result);

//Полученный результат возвести в степень 3, используя только 1 оператор
result **= 3;

//Вывести в консоль первые 2 цифры полученного числа
console.log(result.toString().slice(0,2));