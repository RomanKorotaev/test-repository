

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
  //  if (target.nodeName !== "A") return ;

  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = nav.querySelector("a.active");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }

  nextActiveLink.classList.add("active");
}

