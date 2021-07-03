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


*/
