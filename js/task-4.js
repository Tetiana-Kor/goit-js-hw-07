// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const valueEl = document.querySelector('#value');
const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]',
);
const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]',
);

let counterValue = 0;

const btnIncrementAction = () => {
  counterValue += 1;

  valueEl.textContent = counterValue;
};

const btnDecrementAction = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

btnIncrement.addEventListener('click', btnIncrementAction);
btnDecrement.addEventListener('click', btnDecrementAction);
