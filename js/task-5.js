// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
// підставляє його поточне значення в span#name - output.якщо інпут порожній,
//     в спані повинен відображатися рядок 'незнайомець'.

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', addName);

function addName() {
  if (input.value === '') {
    output.innerHTML = 'незнакомец';
  } else {
    output.innerHTML = input.value;
  }
}
