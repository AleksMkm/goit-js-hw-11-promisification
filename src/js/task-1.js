// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${ms}`);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

const inputMsEl = document.querySelector('.input-ms');
const delayTimeEl = document.querySelector('.time-ms');
const btnEl = document.querySelector('.btn-ms');

let inputValue = '';

inputMsEl.addEventListener('blur', e => {
  inputValue = +e.target.value;
});

btnEl.addEventListener('click', () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputValue);
    }, inputValue);
  }).then(value => (delayTimeEl.textContent = value));
});
