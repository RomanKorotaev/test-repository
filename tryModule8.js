

/*
//Bable

const parent = document.querySelector("#parent");

const handleClick = event => {
  alert(`event.target: ${event.target.id}`);
  console.log(`event.target: ${event.target}`);
};

// откройте консоль и покликайте, вы увидите что
// event.target это всегда исходный (и самый глубокий) элемент
// на котором был сделан клик
parent.addEventListener("click", handleClick);

*/

const nav = document.querySelector(".js-nav");

nav.addEventListener("click", handleNavClick);

function handleNavClick(event) {
  event.preventDefault();
  
  const target = event.target;
  console.log("event target: ", target); // посмотрите что тут

  // Проверяем тип узла, если не ссылка выходим из функции
    if (target.nodeName !== "A") return ;

  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = nav.querySelector("a.active");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }

  nextActiveLink.classList.add("active");
}


//////------------------------------------
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
/*
//const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());

const callBsckFun = function (planet) {
  return planet.toUpperCase()
}

const planetsInUpperCase = planets.map(callBsckFun);
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']
*/


/*
 * Mousemove и throttle
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;
let onScrollCounter = 0;

//Чтобы функции _.throttle и _.debounce из библеотеки lodash работали - их нужно подключать ДО своего основного  js-файла
window.addEventListener('mousemove', _.throttle(onMouseMove, 500));
window.addEventListener('scroll', _.debounce(onScroll, 500));
//window.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

function onScroll(event) {
  onScrollCounter += 1;
  console.log (' onScrollCounter = ',  onScrollCounter)
}

/*
// --------------------  Событие  mousemove 
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCounter = 0;
let scrollCounter = 0;


function onMouseMove(event) {
  mouseMoveCounter += 1;
  coordsOutputRef.textContent = `
Количество вызовов onMouseMove: ${mouseMoveCounter}
  X: ${event.clientX}
  Y: ${event.clientY}`;
}
 
const throttledMouseMove = _.throttle(onMouseMove, 500);

window.addEventListener('mousemove', throttledMouseMove);



window.addEventListener('scroll', onScroll);
 
function onScroll(event) {
   scrollCounter += 1;
  console.log (' scrollCounter = ',  scrollCounter);
 }

*/

const galleryContainer = document.querySelector('#js-gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `;
    
  });
  return markup.join('');
 }

 