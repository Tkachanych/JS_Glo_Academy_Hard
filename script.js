'use strict'

// третье задание.

//1).Переменная lang может принимать 2 значения: 'ru' 'en'
//lang === 'ru' || 'en';
const lang = 'ru';

const daysOfWeekRus = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

const daysOfWeekEng = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

//через if
if (lang === 'ru') {
  console.log(daysOfWeekRus.toString());
} else if (lang === 'en') {
  console.log(daysOfWeekEng.toString());
}

//через switch-case
switch (lang) {
  case 'ru':
    console.log(daysOfWeekRus.toString());
    break;
  case 'en':
    console.log(daysOfWeekEng.toString());
    break;
}

/*через многомерный массив без ифов и switch. Тут умнее не придумал.
И не смог нормально обработать ситуацию, когда такого языка нет.*/
const arrayDays = [
  ['ru', daysOfWeekRus], 
  ['en', daysOfWeekEng]
];
let days = arrayDays.filter(language => language[0] === lang)[0][1];
console.log(days.toString());

//через свойство объекта. Тоже без обработки отсутствия свойства.
const daysOfWeek = {
  'ru': daysOfWeekRus,
  'en': daysOfWeekEng
};
console.log(daysOfWeek[lang].toString());

/*
2). У нас есть переменная namePerson. 
Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Александр” то вывести в консоль “преподаватель”, 
с любым другим значением вывести в консоль “студент”
*/
let namePerson = 'Артем' // 'Артем', 'Александр', 'Иванов Иван Иванович'.

console.log(
  namePerson === 'Артем'
               ? 'директор'
               : namePerson === 'Александр'
                              ? 'преподаватель'
                              : 'студент'
);