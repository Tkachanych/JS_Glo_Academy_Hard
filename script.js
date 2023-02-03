'use strict';

const date = new Date();
const curDay = date.getDay() === 0 ? 6 : date.getDay() - 1;

const week = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье'
];

for (let i in week) {

  let html = week[i];
  const div = document.createElement('div');

  if (i > 4) {
    html = `<i>${html}</i>`
  };

  if (+i === curDay) {
    html = `<b>${html}</b>`
  };

  div.innerHTML = html;
  document.body.appendChild(div);
}