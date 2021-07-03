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

