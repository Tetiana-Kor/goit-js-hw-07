// const categoryEl = document.querySelector('ul#categories');

// console.log(`'У списку ${categoryEl.children.length} категорії.'`);

// const valueEl = document.querySelector('#categories').children;

// for (let value of valueEl) {
//   console.log(
//     `Категория: ${value.firstElementChild.textContent} \nКоличество элементов: ${value.lastElementChild.children.length}`,
//   );
// }

const categoryEl = document.querySelector('ul#categories');

console.log(`'У списку ${categoryEl.children.length} категорії.'`);

const valueEl = Array.from(document.querySelector('#categories').children);

valueEl.forEach(element => {
  console.log(
    `Категория: ${element.firstElementChild.textContent} \nКоличество элементов: ${element.lastElementChild.children.length}`,
  );
});
