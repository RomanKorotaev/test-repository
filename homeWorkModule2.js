//'use strict';


//МОДУЛЬ 2
/*  Задание 1
Ранний возврат
В функции может быть больше одного оператора return. Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, и весь код после него будет проигнорирован в текущем вызове функции.

Возьмём уже знакомую нам функцию проверки совершеннолетия. Она работает, но здесь есть «лишний» код, то есть тело функции можно оптимизировать. В данном случае подойдёт приём (паттерн) «ранний возврат».

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "Вы совершеннолетний человек";
  } else {
    message = "Вы не совершеннолетний человек";
  }

  return message;
}
Если условие в if выполняется, то есть приводится к true, возвращаем строку "You are an adult" и код ниже уже
 не исполнится.
Если условие в if не выполняется, то есть приводится к false, возвращаем строку "You are a minor".
Используя паттерн «ранний возврат» и то, что выполнение функции прерывается на операторе return, мы
 избавляемся от лишней переменной и блока else. То есть этот приём помогает «разгладить» ветвления.

Задание
Запиши условие в инструкции if так, чтобы функция работала правильно.

Тесты
Объявлена функция checkAge(age).
В выражении проверки возраста использован оператор >=
Вызов checkAge(20) возвращает "You are an adult"
Вызов checkAge(8) возвращает "You are a minor"
Вызов checkAge(14) возвращает "You are a minor"
Вызов checkAge(38) возвращает "You are an adult"
В теле функции есть только одна инструкция if
В теле функции нет инструкции else или else if
*/

/*
function checkAge(age) {
  if (age>=18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

*/


//  ------------------------------------------------------

/*  Задание 2

Задача: проверка пароля (ранний возврат)
Задание
Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации
Тесты
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

*/

/*
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  } 
  
  return "Access denied, wrong password!" ;
  // Change code above this line
}



//  ------------------------------------------------------

/*  Задание 3


Задача: склад товаров 3.0
Задание
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

Тесты
Объявлена функция checkStorage(available, ordered)
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
Вызов checkStorage(70, 0) возвращает "Your order is empty!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
Вызов checkStorage(150, 0) возвращает "Your order is empty!"

*/

/*
function checkStorage(available, ordered) {
  // Change code below this line
  //let message;

  if (ordered === 0) {
    return "Your order is empty!";
  }
  
  if (ordered > available) {
     return "Your order is too large, not enough goods in stock!";
  } 
     
  return "The order is accepted, our manager will contact you";
  
}
*/



//  ------------------------------------------------------

/*  Задание 4

Задание
Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]

*/
/*

const fruits = ["apple", "plum", "pear", "orange"];
*/


//  ------------------------------------------------------

/*  Задание 5

Задание
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

Имя переменной	Значение переменной
firstElement	первый элемент массива
secondElement	второй элемент массива
lastElement	последний элемент массива
Тесты
Объявлена переменная firstElement
Значение переменной firstElement это строка "apple"
Объявлена переменная secondElement
Значение переменной secondElement это строка "plum"
Объявлена переменная lastElement
Значение переменной lastElement это строка "orange"

*/

/*
const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits [0];
const secondElement = fruits [1];
const lastElement = fruits[fruits.length-1];

console.table(fruits);

console.log(firstElement);
console.log(secondElement);
console.log(lastElement);

*/

//  ------------------------------------------------------

/*  Задание 6

Переопределение значения элемента
В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];
Задание
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]

*/

/*
const fruits = ["apple", "plum", "pear", "orange"];

fruits [1] ="peach"
  
  fruits [3] = "banana"
*/


//  ------------------------------------------------------

/*  Задание 7
Длина массива
Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3
Задание
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

Тесты
Объявлена переменная fruitsArrayLength
Значение переменной fruitsArrayLength это число 4

*/


/*
const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length
*/


//  ------------------------------------------------------

/*  Задание 8

Индекс последнего элемента
Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"
Задание
Объяви две переменные:

Имя переменной	Ожидаемое значение
lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива
Тесты
Объявлена переменная lastElementIndex
Значение переменной lastElementIndex это число 3
Объявлена переменная lastElement
Значение переменной lastElement это строка "banana"

*/




//  ------------------------------------------------------

/*  Задание 9


/*
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement =  fruits[lastElementIndex];


console.log('lastElementIndex = ', lastElementIndex );
console.log('lastElement = ', lastElement );

*/


/*
Задача: Крайние элементы массива
Задание
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

Тесты
Объявлена функция getExtremeElements(array)
Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]
*/

/*
function getExtremeElements(array) {
  const tmpArray = [];
  tmpArray[0] = array[0];
  tmpArray[1] = array[array.length - 1];
  
  return tmpArray;
}

function getExtremeElements2 (array) {
  const tmpArray = [ array[0], array[array.length-1] ];
  //tmpArray[0] = array[0];
  //tmpArray[1] = array[array.length-1];
  return tmpArray;
}

function getExtremeElements3(array) {
  const tmpArray = [ array.splice (0, 1), array.splice (array.length-1, 1)];
  return tmpArray;
}

console.log(getExtremeElements([1, 2, 3, 4, 5, 6, 7]));

console.log(getExtremeElements2([1, 2, 3, 4, 5, 6, 7, 8]));

console.log(' getExtremeElements3([1, 2, 3, 4, 5, 6]) ', getExtremeElements3([1, 2, 3, 4, 5, 6]));


*/

//  ------------------------------------------------------

/*  Задание 13




/*
Задача: генератор slug
Задание
Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
Тесты
Объявлена функция slugify(title)
Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
Вызов slugify("English for developer") возвращает "english-for-developer"
Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"
*/

/*
  
function slugify(title) {
  // Variant 1
 
  title.toLowerCase();

  const tmpString= title.toLowerCase();
  const tmpArray = tmpString.split(' ');
 // console.log(' tmpArray = title.split (  ) : ', tmpArray);
  const slug = tmpArray.join('-');
 // console.log('tmpArray.join( - ) : ', slug);

  return slug;
  
  
  //  Variant 2
 // const slug = title.toLowerCase().split(' ').join('-');
 //console.log(' title.toLowerCase().split( ) ', slug);
 // return slug;
  
}

*/




//  ------------------------------------------------------

/*  Задание   14

/*
Метод slice()
Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

Если begin и end не указаны, будет создана полная копия исходного массива.
Если не указан end, копирование будет от start и до конца исходного массива.
Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
Задание
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов
Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
Объявлена переменная firstTwoEls
Значение переменной firstTwoEls это массив ["apple", "plum"]
Объявлена переменная nonExtremeEls
Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
Объявлена переменная lastThreeEls
Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами
*/

/*

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,  fruits.length-1);
const lastThreeEls = fruits.slice (-3);

console.table('firstTwoEls = fruits.slice(0,2)  ',firstTwoEls);
console.table('nonExtremeEls = fruits.slice(1,  fruits.length-1) ', nonExtremeEls);
console.table('lastThreeEls = fruits.slice (-3) ', lastThreeEls);

* /



//  ------------------------------------------------------

/*  Задание   15

/*
Метод concat()
Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Задание
Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

Тесты
Объявлена переменная oldClients
Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
Объявлена переменная newClients
Значение переменной newClients это массив ["Peach", "Houston"]
Объявлена переменная allClients
Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
Переменной allClients присвоен массив после применения метода concat с правильными аргументами
*/

/*
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);
console.table ('allClients : ', allClients)


*/




//  ------------------------------------------------------

/*  Задание   16
Задача: композиция массивов
Задание
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

Тесты
Объявлена функция makeArray(firstArray, secondArray, maxLength)
Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив



*/

/*

// Variant 1

function makeArray(firstArray, secondArray, maxLength) {
    
  const concatedArray = firstArray.concat(secondArray);
  concatedArray.splice(maxLength, concatedArray.length); //Синтаксис
                                                        //array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
                                                        //Параметры
                                                        //start
                                                          //Индекс, по которому начинает изменять массив. Если больше длины массива, реальный
                                                          //индекс будет установлен на длину массива.
                                                          //Если отрицателен, указывает индекс элемента с конца.

                                                        //deleteCount Необязательный
                                                          //Целое число, показывающее количество старых удаляемых из массива элементов. 
                                                          //Если deleteCount равен 0, элементы не удаляются.В этом случае вы должны указать как 
                                                          //минимум один новый элемент.Если deleteCount больше количества элементов, оставшихся в 
                                                          //массиве, начиная с индекса start, то будут удалены все элементы до конца массива.
  
  return concatedArray;
  }

  */



  // Variant 2
/*
function makeArray(firstArray, secondArray, maxLength) {
    
  const concatedArray = firstArray.concat(secondArray);
 // concatedArray.splice(maxLength, concatedArray.length);
 // concatedArray.slice(0, maxLength);
  const ruseltArray = concatedArray.slice(0, maxLength);
    return ruseltArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //возвращает["Mango", "Poly", "Ajax"]
  
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //возвращает ["Mango", "Poly", "Houston", "Ajax"]

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //возвращает["Mango", "Poly", "Ajax"]

*/




//  ------------------------------------------------------

/*  Задание   17
Цикл for
Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.

for (Инициализация; Условие; Пост - выражение) {
  // Тело цикла
}
Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.

Задание
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

Тесты
Объявлена переменная start
Значение переменной start это число 3
Объявлена переменная end
Значение переменной end это число 7
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 3
Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
На каждой итерации значение переменной i увеличивается на единицу
Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7
*/

/*
const start = 3;
const end = 7;


for (let i = start ; i <= end; i +=1 ) { 
  console.log(i);
}

*/



//  ------------------------------------------------------

/*  Задание   18

/*
Задача: сумма чисел (цикл for)
Задание
Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и 
возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

Тесты
Объявлена функция calculateTotal(number)
Вызов функции calculateTotal(1) возвращает 1
Вызов функции calculateTotal(3) возвращает 6
Вызов функции calculateTotal(7) возвращает 28
Вызов функции calculateTotal(18) возвращает 171
Вызов функции calculateTotal(24) возвращает 300
Вызов функции calculateTotal() со случайным числом возвращает правильное значение

*/
/*
function calculateTotal(number) {
  let totalSum = 0;
 for (let i = 1 ; i <= number; i +=1 ) { 
  totalSum+=i;
}
  return totalSum;

}

console.log(calculateTotal(3));
*/



//  ------------------------------------------------------

/*   Задание   19

Итерация по массиву
Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

Задание
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 0
Условие цикла приводится к true до тех пор, пока i меньше 4
На каждой итерации значение переменной i увеличивается на единицу
В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
В теле цикла for используется вывод в консоль переменной fruit

*/

/*
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1 ) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
*/



//  ------------------------------------------------------

/*   Задание   20
Задача: подсчёт суммы покупки
Задание
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

*/

/*
function calculateTotalPrice(order) {
  let total = 0;
  
  for (let i = 0; i <order.length; i += 1 ) { 
     total+= order[i]; 
    }
  return total;
}
*/



//  ------------------------------------------------------

/*   Задание   21
Задача: поиск самого длинного слова
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

*/

/*
function findLongestWord(string) {
  let longestWord = '';

  const tmpArray = string.split(' ');

    for (let i = 0; i < tmpArray.length; i += 1 ) { 
      //longestWord = tmpArray[i];
      if (longestWord.length < tmpArray[i].length)
       longestWord = tmpArray[i]
    }
  return longestWord;
}

console.log ('findLongestWord("The quick brown fox jumped over the lazy dog ")', findLongestWord("The quick brown fox jumped over the lazy dog pppppppppppppppppp"))

*/




//  ------------------------------------------------------

/*   Задание   22
Метод push()
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
Задание
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

Тесты
Объявлена функция createArrayOfNumbers(min, max)
Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
В цикле for использовался метод push
*/

/*
function createArrayOfNumbers(min, max) {
  //const numbers = [];

  let tmpArray = [];

   for (let i = 0; i <= max-min; i += 1 ) { 
     tmpArray.push(min + i);
    }
  console.log(tmpArray);
  //return numbers;
}
*/

/*

function createArrayOfNumbers(min, max) {
  const numbers = [];

   for (let i = 0; i <= max-min; i += 1 ) { 
    numbers.push(min + i);
    }
  //console.log(numbers);
  return numbers;
}

createArrayOfNumbers(13, 17)
createArrayOfNumbers(29, 34)

*/



//  ------------------------------------------------------

/*   Задание   23
Задача: фильтрация массива чисел
Задание
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в 
котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

Тесты
Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
В цикле for использовался метод push

*/
/*

function filterArray(numbers, value) {
   
 const filteredArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredArray.push(numbers[i]);
      }
    }
  console.log(filteredArray);
  return filteredArray;
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([1, 2, 3, 4, 5], 5)


*/


//  ------------------------------------------------------

/*   Задание   24

Метод includes()
Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false
Задание
Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.
Тесты
Объявлена функция checkFruit(fruit)
Вызов checkFruit("plum") возвращает true
Вызов checkFruit("mandarin") возвращает false
Вызов checkFruit("pear") возвращает true
Вызов checkFruit("Pear") возвращает false
Вызов checkFruit("apple") возвращает true
Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
В функции использовался метод includes

*/
/*
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return  fruits.includes(fruit); // Change this line

console.log(checkFruit("pear")); // возвращает true
console.log(checkFruit("Pear"));// возвращает false

}
*/


//  ------------------------------------------------------

/*   Задание   25


Задача: общие элементы
Задание
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. 
А числа 0, 1 и 8 присутствуют только в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и
 возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

Тесты
Объявлена функция getCommonElements(array1, array2)
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
В цикле for использовались методы includes и push


*/

/*
function getCommonElements(array1, array2) {
  
  const sameElementsArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
        sameElementsArray.push (array1[i])
     }
    }
  return sameElementsArray;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

*/



//  ------------------------------------------------------

/*   Задание   26
Цикл for...of
Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации
iterable — коллекция, которая имеет перечислимые элементы, например массив
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
Задание
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice([]) возвращает 0
Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

*/

/*

function calculateTotalPrice(order) {
  let total = 0;

  for (const pricePerOne of order) {
    total+= pricePerOne;
   }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

*/




//  ------------------------------------------------------

/*   Задание   27

Зачада: фильтрация массива чисел 2.0
Задание
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

Тесты
Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
Функция calculateTotalPrice() использует цикл for..of

*/

/*
function filterArray(numbers, value) {
  
  const filteredNumbers = [];

 for (const number of numbers) {
  const neededNumber = number;

    if (neededNumber > value) {
          filteredNumbers.push(number);
        }
 }

  return filteredNumbers;
  
}
*/






//  ------------------------------------------------------

/*   Задание   28
Оператор %
Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

5 % 1 = 0;
// 5, разделенное на 1, равно 5, а остаток - 0

5 % 2 = 1;
//  5, разделенное на 2, равно 2, а остаток - 1

5 % 3 = 2;
//  5, разделенное на 3, равно 1, а остаток - 2

5 % 4 = 1;
//  5, разделенное на 4, равно 1, а остаток - 1

5 % 5 = 0;
//  5, разделенное на 5, равно 1, а остаток - 0
Задание
Дополни выражения остатка от деления так, чтобы код проходил тесты.

Тесты
Объявлена переменная a
Значение переменной a это число 0
Объявлена переменная b
Значение переменной b это число 1
Объявлена переменная c
Значение переменной c это число 3
Объявлена переменная d
Значение переменной d это число 5
Объявлена переменная e
Значение переменной e это число 2
*/

/*
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
*/




//  ------------------------------------------------------

/*   Задание   29

Задача: чётные числа
Задание
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

Тесты
Объявлена функция getEvenNumbers(start, end)
Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
Вызов функции getEvenNumbers(8, 8) возвращает [8]
Вызов функции getEvenNumbers(7, 7) возвращает []
Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

*/

/*

function getEvenNumbers(start, end) {
  const evenNumber = [];

  for (let i = 0; i <= end - start; i += 1) {

    if ( (start+i)  % 2 === 0) {
      evenNumber.push(start + i);
    }
  }
  return evenNumber;
}
  
console.log(getEvenNumbers(6, 12));

console.log(getEvenNumbers(3, 11));

*/




//  ------------------------------------------------------

/*   Задание   30
Оператор break
Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");
Задание
Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

Тесты
Объявлена переменная start со значением 6
Объявлена переменная end со значением 27
Объявлена переменная number без инициализации
Итоговое значение переменной number равно 10
В цикле for используется break для выхода до завершения всех итераций цикла

*/

/*
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

*/


//  ------------------------------------------------------

/*   Задание   31
Оператор break vs return в функции
Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.

В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}

const result = fn();
console.log("Лог после выхода из функции");
console.lof(`Результат выполнения функции ${result}`);
Задание
Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

возвращала первое число от start до end, которое делится на divisor без остатка
не использовала оператор break
не использовала переменную number
Тесты
Объявлена функция findNumber(start, end, divisor)
Вызов findNumber(2, 6, 5) возвращает 5
Вызов findNumber(8, 17, 3) возвращает 9
Вызов findNumber(6, 9, 4) возвращает 8
Вызов findNumber(16, 35, 7) возвращает 21
Вызов findNumber() со случайным набором чисел возвращает верный результат
В цикле for не должен использоваться break для выхода до завершения всех итераций цикла
*/

/*
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }

  return number;
  // Change code above this line
}

*/

/*

function findNumber(start, end, divisor) {
  // Change code below this line
 // let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return  i;
    }
  }

  //return number;
  // Change code above this line
}

*/



//  ------------------------------------------------------

/*   Задание   32

Задача: функция includes()
Задание
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

Тесты
Объявлена функция includes(array, value)
Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
Вызов includes() для случайного массива со случайным value возвращает верный boolean
В функции includes используется for, return, но не метод массива includes
*/

/*
function includes(array, value) {
  // Change code below this line

  for (let i = 0; i < array.length; i += 1)
    { 
      if (value === array[i]) { return true } 
    }
  // Change code above this line
  return false
}


console.log(includes([1, 2, 3, 4, 5], 3)); //возвращает true
console.log(includes([1, 2, 3, 4, 5], 17)); //возвращает false
*/