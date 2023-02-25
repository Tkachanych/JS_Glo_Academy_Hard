'use strict';

const input = document.querySelector('input');
const par = document.querySelector('p');

function debounce(func, timeout = 1000){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function fillPar(){
  par.textContent = input.value;
}

input.addEventListener('keyup', debounce(() => fillPar()));