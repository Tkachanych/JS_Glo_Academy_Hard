'use strict';

const createString = function (id) {
  const div = document.createElement('div');
  div.id = id;
  div.innerHTML = '';
  document.body.append(div);
}

const addDate = function () {

  const date = new Date();
  const curDay = (6 + date.getDay()) % 7;

  const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const dayOfWeek = week[curDay];
  const day = date.getDate();
  const curMonth = date.getMonth();
  const curYear = date.getFullYear();
  const curHour = date.getHours();
  const curMinute = date.getMinutes();
  const curSecond = date.getSeconds();

  const getEnding = function (num) {
    return num % 10 === 1 && num !== 11 ? 'а' //минутА, секундА
      : [2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num) ? 'ы' //минутЫ, секундЫ
        : '';
  }

  const addZero = function (str) {
    return str.toString().length > 1 ? str : '0' + str;
  }

  const addDateToString = function (id, str) {
    document.getElementById(id).innerHTML = str;
  }

  const strHour = [1, 21].includes(curHour) ? 'час' : [2, 3, 4, 22, 23].includes(curHour) ? 'часа' : 'часов';
  const strMinute = 'минут' + getEnding(curMinute);
  const strSecond = 'секунд' + getEnding(curSecond);

  const stringDate = `Сегодня ${dayOfWeek}, ${day} ${months[curMonth]} ${curYear} года, ${curHour} ${strHour}, ${curMinute} ${strMinute}, ${curSecond} ${strSecond}`;
  const numDate = `${addZero(day)}.${addZero(curMonth)}.${curYear} - ${addZero(curHour)}:${addZero(curMinute)}:${addZero(curSecond)}`

  addDateToString('stringDate', stringDate);
  addDateToString('numDate', numDate);
}

createString('stringDate');
createString('numDate');

setInterval(addDate, 1000);