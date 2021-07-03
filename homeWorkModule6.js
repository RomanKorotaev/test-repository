'use strict';



//МОДУЛЬ 6

/*
/ Задание 1
Метод forEach(callback)
Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});
Поэлементно перебирает массив.
Вызывает коллбек-функцию для каждого элемента массива.
Ничего не возвращает.
Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});
Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива,
 это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он 
 всегда перебирает массив до конца.

Задание
Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
 и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и
  возвращается как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Тесты
Объявлена функция calculateTotalPrice(orderedItems).
Для перебора массива orderedItems использован метод forEach.
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

/*
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
    orderedItems.forEach(function (number) { totalPrice += number }); 
// for (let i = 0; i < orderedItems.length; i += 1) {
//      totalPrice += orderedItems[i];
//  }
    
    return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  
*/



//--------------------------------------------------

/*  Задание 2
Задача. Фильтрация массива чисел
Задание
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает
 новый массив, в котором будут только те элементы оригинального массива, которые больше 
 чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Тесты
Объявлена функция filterArray(numbers, value).
Для перебора массива numbers использован метод forEach.
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

/*
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки

    numbers.forEach(function (element) {
        if (element > value) {
        filteredNumbers.push(element);
        }
     } )
    return filteredNumbers;
}
  
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

*/




//--------------------------------------------------


/*  Задание 3

Задача. Общие элементы
Задание
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной
 длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
  то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Тесты
Объявлена функция getCommonElements(firstArray, secondArray).
Для перебора параметра (массива) использован метод forEach.
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

/*
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
   
     firstArray.forEach(function (element) {
        if (secondArray.includes(element)) {
       commonElements.push(element);
        }
     })
    
    return commonElements;
    
}
  
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

*/



//--------------------------------------------------


/*  Задание 4

Стрелочные функции.
Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.

Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

const add = (a, b, c) => {
  return a + b + c;
};
Если параметр один, его объявление может быть без круглых скобок.

const add = a => {
  return a + 5;
};
Если параметров нет, то обязательно должны быть пустые круглые скобки.

const greet = () => {
  console.log('Привет!');
};
Задание
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

Тесты
Объявлена переменная calculateTotalPrice.
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
Вызов calculateTotalPrice(5, 100) возвращает 500.
Вызов calculateTotalPrice(8, 60) возвращает 480.
Вызов calculateTotalPrice(3, 400) возвращает 1200.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

// Пиши код ниже этой строки

/*
const calculateTotalPrice = (quantity, pricePerItem) =>{
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(33, 11));

*/



//--------------------------------------------------


/*  Задание 5

Неявный возврат
В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: 
с фигурными скобками и без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно 
поставить return. Это называется явный возврат (explicit return). Такой синтаксис используется 
в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

const add = (a, b, c) => a + b + c;
Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется
 неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.

Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым 
выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких 
дополнительных инструкций кроме возврата значения.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;
Задание
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

Тесты
Объявлена переменная calculateTotalPrice.
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
В функции использован неявный возврат.
Вызов calculateTotalPrice(5, 100) возвращает 500.
Вызов calculateTotalPrice(8, 60) возвращает 480.
Вызов calculateTotalPrice('3, 400) возвращает 1200.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

/*
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(33, 10));

*/



//--------------------------------------------------


/*  Задание 6
Стрелочные функции как коллбеки
Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива
 из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});
Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку.
 Это стоит делать если одна функция используется в нескольих местах программы или если
  она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);
Задание
Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление
 на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

Тесты
Объявлена переменная calculateTotalPrice.
Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems).
Для перебора массива orderedItems использован метод forEach.
Коллбек для метода forEach это стрелочная функция.
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

/*
 const calculateTotalPrice= (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach(item => totalPrice += item );
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))

*/



//--------------------------------------------------


/*  Задание 7

Задача. Фильтрация массива чисел 2.0
Задание
Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

Тесты
Объявлена переменная filterArray.
Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value).
Для перебора массива numbers использован метод forEach.
Коллбек для метода forEach это стрелочная функция.
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

*/

/*
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach( number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  

*/



//--------------------------------------------------


/*  Задание 8
Задача. Общие элементы 2.0
Задание
Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

Тесты
-Объявлена переменная getCommonElements.

Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray).
Для перебора массива firstArray использован метод forEach.
Коллбек для метода forEach это стрелочная функция.
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

*/

/*

// Пиши код ниже этой строки
const getCommonElements= (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach( element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
  
console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]) );

*/



//--------------------------------------------------


/*  Задание 9

Чистые функции
Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]
Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. 
Она изменяет (мутирует) исходный массив по ссылке.

Чистая функция (pure function) - это функция результат которой зависит только от значений
 переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же
  результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, 
не изменяя исходный.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
Задание
Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, 
а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

Тесты
Объявлена функция changeEven(numbers, value).
Функция changeEven не изменяет значение параметра numbers.
Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/

/*

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
     const newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
         newArray.push( numbers[i] + value);
      } else newArray.push( numbers[i]);
    }
    return newArray;
    // Пиши код выше этой строки
  }

console.log(changeEven([1, 2, 3, 4, 5], 10));

*/



//--------------------------------------------------


/*  Задание 10
Метод map()
Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, применяя к значению 
каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива,
 а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

массив.map((element, index, array) => {
  // Тело коллбек-функции
});
Поэлементно перебирает оригинальный массив.
Не изменяет оригинальный массив.
Результат работа коллбек-функции записывается в новый массив.
Возвращает новый массив такой же длины.
Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный
 массив используется как эталон, на базе которого можно сделать другую коллекцию.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']
Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум»
 объявления коллбек-функции, делая код чище и проще для восприятия.

Задание
Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
Обязательно используй метод map().

Тесты
Объявлена переменная planets.
Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
Объявлена переменная planetsLengths.
Значение переменной planetsLengths это массив [5, 4, 6, 6].
Для перебора массива планет использован метод map().

*/

/*
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);
*/



//--------------------------------------------------


/*  Задание 11

Метод map() и массив объектов
Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить
 массив значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный 
 массив их имён.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 }
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
Используя метод map() можно перебрать массив объектов, и в коллбек-функции 
вернуть значение свойства каждого из них.

Задание
Используя метод map() сделай так, чтобы в переменной titles получился массив 
названий книг (свойство title) из всех объектов массива books.

Тесты
Объявлена переменная books.
Значение переменной books это массив.
Объявлена переменная titles.
Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод',
 'Сон смешного человека', 'Красна как кровь', 'Враг Божий'].
Для перебора массива books используется метод map() как чистая функция.

*/

/*
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(book => book.title);
  
console.log(titles)

*/




//--------------------------------------------------


/*  Задание 12

Метод flatMap()
Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».

массив.flatMap((element, index, array) => {
  // Тело коллбек-функции
});
В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.

const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

students.map((student) => student.courses);
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы
 записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» 
 на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат
  работы flatMap().

Задание
Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех
 жанров книг (свойство genres) из массива книг books.

Тесты
Объявлена переменная books.
Значение переменной books это массив объектов.
Объявлена переменная genres.
Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].
Для перебора массива books используется метод flatMap().
*/

/*

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
const genres = books.flatMap(book => book.genres);
  //const genres2 = books.map(book => book.genres);
console.log(genres);
console.log(genres2);

*/




//--------------------------------------------------


/*  Задание 13
Задача. Имена пользователей
Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
Задание
Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей 
(свойство name) из массива объектов в параметре users.

Тесты
Объявлена переменная getUserNames.

Переменной getUserNames присвоена стрелочная функция с параметром (users).

Для перебора параметра users используется метод map().

Вызов функции с указанным массивом пользователей возвращает массив ['Moore Hensley',
 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony'].

Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

*/

/*

const usersArray =
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


// Пиши код ниже этой строки
const getUserNames = users => {
  let tmpArray = [];   
  tmpArray = users.map (user=>user.name)
  return tmpArray;
  };
  // Пиши код выше этой строки


// Мой вариант с более простым синтаксисом
//function getUserNames(users) {
//  let tmpArray = [];   
//  tmpArray = users.map (user=>user.name)
//  return tmpArray;
//};
// Пиши код выше этой строки

    console.log (getUserNames(usersArray))

    */


    

//--------------------------------------------------


/*  Задание 14
Задача. Почты пользователей
Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
Задание
Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

Тесты
Объявлена переменная getUserNames.
Переменной getUserNames присвоена стрелочная функция с параметром (users).
Для перебора параметра users используется метод map().
Вызов функции с указанным массивом пользователей возвращает массив ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com'].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

*/
/*

// Пиши код ниже этой строки
const getUserEmails = users => {
  let tmpArray = [];   
  tmpArray = users.map (user=>user.email)
  return tmpArray;

  };
  // Пиши код выше этой строки

  */
