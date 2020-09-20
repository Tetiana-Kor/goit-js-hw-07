// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.
// Якщо введена відповідна кількість, то border інпут стає зеленим,якщо неправильне -червоним.

const input = document.querySelector('#validation-input');
const lengthEl = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length < lengthEl || input.value.length > lengthEl) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}
