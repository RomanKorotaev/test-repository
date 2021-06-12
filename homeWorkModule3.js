'use strict';



//МОДУЛЬ 3
/*  Задание 1
Создание объекта
Объекты позволяют описать и сгруппировать характеристики объектов реального мира - пользователя, книги, продукта магазина, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
Для объявления используются фигурные скобки {} - литерал объекта. При создании объекту можно добавить свойства, каждое из которых описывается парами ключ:значение. Ключ ещё называют именем свойства и это всегда строка. Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции и т. п. Свойства разделяются запятой.

Задание
Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"].
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
В объекте есть свойство imgUrl
Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
В объекте есть свойство descr
Значение свойства descr это строка "Spacious apartment in the city center"
В объекте есть свойство rating
Значение свойства rating это число 4
В объекте есть свойство price
Значение свойства price это число 2153
В объекте есть свойство tags
Значение свойства tags это массив ["premium", "promoted", "top"]
*/

/*
const apartment =  {
  imgUrl : "https://via.placeholder.com/640x480",
  descr : "Spacious apartment in the city center",
  rating : 4,
  price : 2153,
  tags : ["premium", "promoted", "top"],
};	

console.log(apartment );

*/



//---------------------------------------------------------------------------

/*  Задание 2

Вложенные свойства
Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

Например, статистика пользователя социальной сети состоит из количества последователей, просмотров и лайков, и хранить эти данные удобнее всего в виде объекта. Тоже самое с местоположением, отдельно страна и город.

В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или максимальному количеству последователей и т. д.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
Задание 
Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
В объекте apartment есть свойство owner
Значение свойства owner это объект
В объекте owner есть свойство name
Значение свойства name это "Henry"
В объекте owner есть свойство phone
Значение свойства phone это "982-126-1588"
В объекте owner есть свойствао email
Значение свойства email это "henry.carter@aptmail.com"
*/

/*

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner : {
      name : "Henry",
      phone : "982-126-1588",
      email : "henry.carter@aptmail.com",
    },
};
  
console.log(apartment );

*/




//---------------------------------------------------------------------------

/*  Задание 3

Доступ к свойствам через точку
Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "Последнее королевство"

const bookGenres = book.genres;
console.log(bookGenres); // ["историческая проза", "приключения"]

const bookPrice = book.price;
console.log(bookPrice); // undefined
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
Объявлена переменная aptRating
Значение переменной aptRating это число 4
Объявлена переменная aptDescr
Значение переменной aptDescr это строка "Spacious apartment in the city center"
Объявлена переменная aptPrice
Значение переменной aptPrice это число 2153
Объявлена переменная aptTags
Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

*/

/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

*/




//---------------------------------------------------------------------------

/*  Задание 4

Доступ к вложенным свойствам
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, если необходимо получить значение страны пользователя, записываем user.location.country, где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // "Jamaica"
Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags.
Тесты
Объявлена переменная apartment с помощью "const"
Значение переменной apartment это объект
Объявлена переменная ownerName с помощью "const"
Значение переменной ownerName это строка "Henry"
Объявлена переменная ownerPhone с помощью "const"
Значение переменной ownerPhone это "982-126-1588"
Объявлена переменная ownerEmail с помощью "const"
Значение переменной ownerEmail это "henry.carter@aptmail.com"
Объявлена переменная numberOfTags с помощью "const"
Значение переменной numberOfTags это 3
Объявлена переменная firstTag с помощью "const"
Значение переменной firstTag это "premium"
Объявлена переменная lastTag с помощью "const"
Значение переменной lastTag это "top"

*/

/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length-1]; 


*/




//---------------------------------------------------------------------------

/*  Задание 5
Доступ к свойствам через квадратные скобки
Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя свойства как строка.

Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя свойства заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle);
// "Последнее королевство"

const bookGenres = book["genres"];
console.log(bookGenres);
// ["историческая проза", "приключения"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor);
// "Бернард Корнуэлл"
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная aptRating
Значение переменной aptRating это 4
Объявлена переменная aptDescr
Значение переменной aptDescr это "Spacious apartment in the city center"
Объявлена переменная aptPrice
Значение переменной aptPrice это 2153
Объявлена переменная aptTags
Значение переменной aptTags это ["premium", "promoted", "top"]

*/

/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment ["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

*/




//---------------------------------------------------------------------------

/*  Задание 6

Изменение значения свойства
После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("драма");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["историческая проза", "приключения", "драма"]
Задание
Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства price это число 5000
Значение вложенного свойства rating это число 4.7
Значение вложенного свойства name это строка "Henry Sibola"
Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

*/

/*

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

*/



//---------------------------------------------------------------------------

/*  Задание 7
Добавление свойств
Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства. Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
Задание
Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства area это число 60
Значение вложенного свойства rooms это число 3
Значение вложенного свойства location это объект
Значение вложенного свойства location.country это строка "Jamaica"
Значение вложенного свойства location.city это строка "Kingston"
*/

/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";

console.log(apartment);
console.log(apartment.location);

*/




//---------------------------------------------------------------------------

/*  Задание 8


Короткие свойства
Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.

Синтксис в следующем примере слишком громоздкий, потому что приходится дублировать имя свойства и имя переменной, в которой хранится необходимое значение.

const name = "Генри Сибола";
const age = 25;

const user = {
  name: name,
  age: age
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя использовать имя переменной как имя свойства, а её значение как значение свойства.

const name = "Генри Сибола";
const age = 25;

const user = {
  name,
  age
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
То есть, при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.

Задание
Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

Тесты
Объявлена переменная product
Значение переменной product это объект
Значение вложенного свойства name это строка "Repair Droid"
Значение вложенного свойства price это число 2500
Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
Значение вложенного свойства tags это массив ["on sale","trending", "best buy"]

*/

/*

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,

};

*/





//---------------------------------------------------------------------------

/*  Задание 9

Вычисляемые свойства
Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.

Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через квадратные скобки, что не совсем удобно.

const propName = "name";
const user = {
  age: 25
};

user[propName] = "Генри Сибола";
console.log(user.name); // "Генри Сибола"
Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в некоторых случаях упростить его. Значением вычисляемого свойства может быть любое валидное выражение.

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"
Задание
Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

Тесты
Объявлена переменная credentials
Значение переменной credentials это объект
В объекте credentials есть свойство email
Значение вложенного свойства email это строка "henry.carter@aptmail.com"
В объекте credentials есть свойство password
Значение вложенного свойства password это строка "jqueryismyjam"
*/

/*

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
 [emailInputName] : "henry.carter@aptmail.com",
  [ passwordInputName] : "jqueryismyjam",
};

*/




//---------------------------------------------------------------------------

/*  Задание 10

Цикл for...in
В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) свойства. Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
Задание
Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ['descr', 'rating', 'price']
Объявлена переменная values
Значение переменной values это массив ['Spacious apartment in the city center', 4, 2153]

*/

/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

console.log (apartment)

for (const key in apartment) {
  // Массив Ключей
    keys.push(key);

  //Массив Значений
  values.push(apartment[key]);
  
}

  
console.table(keys);
console.table (values);

*/



//---------------------------------------------------------------------------

/*  Задание 11

етод hasOwnProperty()
Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.

Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.

// ❌ Возвращает true для всех свойств
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}
Задание
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

Тесты
Объявлена переменная advert.
Значение переменной advert это объект.
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ['descr', 'rating', 'price'].
Объявлена переменная values.
Значение переменной values это массив ['Spacious apartment in the city center', 4, 2153].
*/

/*

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

*/




//---------------------------------------------------------------------------

/*  Задание 12


/*
Задача. Подсчёт свойств
Задание
Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

Тесты
Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps{ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта
*/


/*

function countProps(object) {
  let propCount = 0;

  for (const key in object)
  {
    //console.log(key);
    //console.log(object[key]);
    if (object.hasOwnProperty(key))
        {
      propCount += 1;
     // console.log(' propCount : ',  propCount);
        }
    }
   return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log( countProps({ }));
console.log(countProps ({ mail: "poly@mail.com", isOnline: true, score: 500 }));

*/




//---------------------------------------------------------------------------

/*  Задание 13

Метод Object.keys()
У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}
Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.

Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

Тесты
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ['descr', 'rating', 'price'].
Значение переменной keys получено с помощью метода Object.keys().
Объявлена переменная values.
Значение переменной values это массив ['Spacious apartment in the city center', 4, 2153].
Значение переменной values получено с помощью цикла for...of.

*/

/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of  keys )
  {
    console.log ( apartment[key])
    values.push( apartment[key])
  }


*/




//---------------------------------------------------------------------------

/*  Задание 14

Задача. Подсчёт свойств 2.0
Задание
Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

Тесты
Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта
Функция использует метод Object.keys() и, возможно, цикл for...of


*/

/*
function countProps(object) {
  // Change code below this line
  let propCount = 0;
  
  const keys = Object.keys(object);

  for (const key of  keys )
    {
      propCount += 1;
    }

  return propCount;
  // Change code above this line
}


console.log(countProps({ name: "Mango", age: 2 }));
console.log( countProps({ }));
console.log(countProps ({ mail: "poly@mail.com", isOnline: true, score: 500 }));

*/





//---------------------------------------------------------------------------

/*  Задание 15

Метод Object.values()
Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["Последнее королевство", "Бернард Корнуэлл", 8.38]
Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.

Задание
Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ["descr", "rating", "price"]
Объявлена переменная values
Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
Для получения массива ключей объекта apartment используется Object.keys()
Для получения массива значений объекта apartment используется Object.values()
*/


/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys (apartment);
const values = Object.values (apartment);


*/





//---------------------------------------------------------------------------

/*  Задание 16

Задача. Расходы на зарплату
Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

Тесты
Объявлена функция countTotalSalary(salaries)
Вызов countTotalSalary({}) возвращает 0
Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
Функция учитывает только собственные свойства объекта
*/


/*
function countTotalSalary(salaries) {
  let totalSalary = 0;

  const keys = Object.values (salaries);
  for (const key of keys)
  {
        totalSalary += key;
   }

  return totalSalary;
}

console.log( countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

*/





//---------------------------------------------------------------------------

/*  Задание 17

Массив объектов
В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта можно получить используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена будут одинаковые, отличаются только значения.

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
Задание
Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

Тесты
Объявлена переменная colors
Значение переменной colors это массив
Объявлена переменная hexColors
Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Объявлена переменная rgbColors
Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

*/



/*
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {


  hexColors.push(color.hex)
  rgbColors.push (color.rgb)
}

  console.log(hexColors);
console.log(rgbColors);
 
 */





//---------------------------------------------------------------------------

/*  Задание 18

Задача. Поиск объекта по значению свойства
Задание
Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

Тесты
Объявлена функция getProductPrice(productName).
Вызов getProductPrice("Radar") возвращает 1300.
Вызов getProductPrice("Grip") возвращает 1200.
Вызов getProductPrice("Scanner") возвращает 2700.
Вызов getProductPrice("Droid") возвращает 400.
Вызов getProductPrice("Engine") возвращает null.

*/


/*
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  
  for (const product of products) {
      if (product.name === productName) {
          return product.price
     }  
   }

  return null;
}

console.log(getProductPrice("Engine"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("ERadar"));

*/





//---------------------------------------------------------------------------

/*  Задание 19


Задача. Коллекция значений свойства
Задание
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

Тесты
Объявлена функция getAllPropValues(propName)
Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
Вызов getAllPropValues("category") возвращает []
*/


/*

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

  let resultArray = [];

  for (const product of products) {
    for (const [key, value] of Object.entries(product)) {
      if (key === propName) {
        resultArray.push (value)
      }       
    }
   }
  return resultArray;
}

console.log ( getAllPropValues("name") ) //возвращает ["Radar", "Scanner", "Droid", "Grip"]
console.log ( getAllPropValues("quantity") ) // возвращает [4, 3, 7, 9]

*/



//---------------------------------------------------------------------------

/*  Задание 20

Задача. Общая стоимость товара
Задание
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

Тесты
Объявлена функция calculateTotalPrice(productName)
Вызов calculateTotalPrice("Blaster") возвращает 0
Вызов calculateTotalPrice("Radar") возвращает 5200
Вызов calculateTotalPrice("Droid") возвращает 2800
Вызов calculateTotalPrice("Grip") возвращает 10800
Вызов calculateTotalPrice("Scanner") возвращает 8100

*/


const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
 
  let totalPrice = 0;

  for (const product of products) {

    if (product.name === productName) {
      totalPrice += product.price * product.quantity
    }
  }

   /* for (const [key, value] of Object.entries(product)) {
      if (key === productName) {
        console.log( "Товар найден")
        totalPrice = totalPrice + value * product.quantity;
        //resultArray.push (value)
      }       
    }
   }
   */
  return  totalPrice;

}

console.log( calculateTotalPrice('Blaster') );
console.log( calculateTotalPrice('Radar') );
console.log( calculateTotalPrice('Droid') );
console.log( calculateTotalPrice('Grip') );
