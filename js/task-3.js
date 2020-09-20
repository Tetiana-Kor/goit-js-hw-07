const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для створення галереї зображень по масиву даних.
// Використовуй масив об'єктів images для створення тегів img вкладених в li.
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

const makeGalleryImageEl = ({ url, alt }) => {
  const galleryEl = document.querySelector('#gallery');
  galleryEl.classList.add('site-nav');

  galleryEl.insertAdjacentHTML(
    'afterbegin',
    `<li class="site-nav__item"><img src= ${url} alt= ${alt} class="site-nav__picture"></img></li>`,
  );

  return galleryEl;
};

const elements = images.map(makeGalleryImageEl);
console.log(elements);
