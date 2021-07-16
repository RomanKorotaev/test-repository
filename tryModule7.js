const textEl = document.querySelector('p');
console.log(textEl)

//----------------------Создать элемент-------------------------

const titleEl = document.createElement('h2');
titleEl.classList.add('page-title')
titleEl.textContent = 'Это заголовок страницы h2'
console.log(titleEl) 

textEl.appendChild (titleEl)

const imageEl = document.createElement('img');
imageEl.src = "/images/building.jpg";
imageEl.alt = "Строение"
imageEl.width = 640;
//imageEl.setAttribute('width', 640);
console.log('imageEl', imageEl)

textEl.appendChild (imageEl)


