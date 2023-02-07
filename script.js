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

  const arrHours = [
    'часов',
    'час',
    'часа'
  ];
  const arrMinutes = [
    'минут',
    'минута',
    'минуты'
  ];
  const arrSeconds = [
    'секунд',
    'секунда',
    'секунды'
  ];

  const dayOfWeek = week[curDay];
  const day = date.getDate();
  const curMonth = date.getMonth();
  const curYear = date.getFullYear();
  const curHour = date.getHours();
  const curMinute = date.getMinutes();
  const curSecond = date.getSeconds();

  const getEnding = function (num, array) {
    let result;
    if ([0,5,6,7,8,9].includes(num % 10) || [11,12,13,14].includes(num)) result = array[0];
    else if (num % 10 === 1) result = array[1];
    else result = array[2];
    return result;
  }

  const addZero = function (str) {
    return `0${str}`.slice(-2);
  }

  const addDateToString = function (id, str) {
    document.getElementById(id).innerHTML = str;
  }

  const strHour = getEnding(curHour, arrHours);
  const strMinute = getEnding(curMinute, arrMinutes);
  const strSecond = getEnding(curSecond, arrSeconds);

  const stringDate = `Сегодня ${dayOfWeek}, ${day} ${months[curMonth]} ${curYear} года, ${curHour} ${strHour}, ${curMinute} ${strMinute}, ${curSecond} ${strSecond}`;
  const numDate = `${addZero(day)}.${addZero(curMonth)}.${curYear} - ${addZero(curHour)}:${addZero(curMinute)}:${addZero(curSecond)}`

  addDateToString('stringDate', stringDate);
  addDateToString('numDate', numDate);
}

createString('stringDate');
createString('numDate');

setInterval(addDate, 1000);