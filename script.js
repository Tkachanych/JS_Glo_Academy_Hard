'use strict';

const date = new Date();
const curDay = (6 + date.getDay()) % 7;

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