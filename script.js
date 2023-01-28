'use strict';

// Первое задание

let title = 'JS_Glo_Academy';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 2500;
let rollback = 15;
let fullPrice = 500000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));

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

console.log(result);