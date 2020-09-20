const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

// // Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

const elements = ingredients.map(option => {
  const ingredientItemEl = document.querySelector('#ingredients');
  ingredientItemEl.classList.add('site-nav');

  const listEl = document.createElement('li');
  ingredientItemEl.appendChild(listEl);
  listEl.classList.add('site-nav__item');
  listEl.textContent = option;
  return ingredientItemEl;
});

console.log(elements);
