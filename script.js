'use strict';

const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.onclick = function(){
  console.clear();
  const newElem = list.querySelector('li').cloneNode(true);
  newElem.innerHTML = input.value;
  list.append(newElem);
}