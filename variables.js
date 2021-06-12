//1. Переменные - variables 

var firstName = 'Roman'  // устаревший пример записи. Не смог отобразить в консоли через console.log(name)
const lastName = "Korotaev"
let age = 34

console.log(firstName)
console.log('firstName length =  ', firstName.length)
console.log(lastName)
console.log(age)


var colorArray = ["#5A9C6E", "#A8BF5A", "#FAD5BB"];
var i = 0;

function changeColor() { 
    document.body.style.background = colorArray[i];
    i++;
    if (i > colorArray.length - 1) { 
        i = 0;
    }

}

/*
for(var i = 0; i < 10; i++) document.write(i, "<br>");
for(var i = 0, j = 10; i < 10; i++, j--) document.write(i*j, "<br>");
for (var i in o) document.write(i, "<br>");
*/

var scope = "глобальная"; // Объявление глобальной переменной
function checkscope() {
var scope = "локальная"; // Объявление локальной переменной с тем же именем
document.write(scope, "<br>"); // Используется локальная переменная, а не глобальная
}
checkscope(); // Печатается слово "локальная"


{
    // 2. ЛИТЕРАЛЫ
    /*
    Литерал – это значение, указанное непосредственно в тексте программы. Ниже
    приведены примеры литералов:
    12 // Число двенадцать
    1.2 // Число одна целая две десятых
    "hello world" // Строка текста
    'Hi' // Другая строка
    true // Логическое значение
    false // Другое логическое значение
    /javascript/gi // Регулярное выражение (для поиска по шаблону)
    null // Отсутствие объекта
    */
    
    {
    //3. ТИПЫ ДАННЫХ
    //выяснить тип данных можно с помощью функции  typeof
    console.log("typeof age = ", typeof age,  "typeof lastName = ", typeof lastName);

    typeof 35; //        nuber
    typeof "text"; //     string
    typeof true; //       boolean
    typeof [1, 2, 3]; //  object
    typeof undefined; //  undefined  - означает отсутствие  первоначального значения переменной , а ьакже несуществующее свойство объекта
    typeof null;     //  object   .  null - используется для представления несуществующих объектов.

    console.log(typeof 35)
    console.log(typeof undefined)
    
}

console.log ( "X = ", Math.random (9)  )


    /*
 //4. Таблица 3.1. Специальные числовые константы

Константа Значение
Infinity Специальное значение, обозначающее бесконечность
NaN Специальное значение – «нечисло»  . isNaN() - специальная функция на проверку числа на статус NaN
Number.MAX_VALUE Максимальное представимое значение
Number.MIN_VALUE Наименьшее (ближайшее к нулю) представимое значение
Number.NaN Специальное значение – «нечисло»
Number.POSITIVE_INFINITY Специальное значение, обозначающее плюс бесконечность
Number.NEGATIVE_INFINITY Специальное значение, обозначающее минус бесконечность

*/
}


/*  5. УПРАВЛЯЮЩИЕ ПОСЛЕДОВАТЕЛЬНОСТИ В СТРОКОВЫХ ЛИТЕРАЛАХ Управляющие последовательности в строковых литералах
Символ обратного слэша (\) имеет специальное назначение в JavaScriptстроках.
Вместе с символами, следующими за ним, он обозначает символ, не представи
мый внутри строки другими способами.
Константа Значение
\0 Символ NUL (\u0000)
\b «Забой» (\u0008)
\t Горизонтальная табуляция (\u0009)
\n Перевод строки (\u000A)
\v Вертикальная табуляция (\u000B)
\f Перевод страницы (\u000C)
\r Возврат каретки (\u000D)
\" Двойная кавычка (\u0022)
\' Одинарная кавычка (\u0027)
\\ Обратный слэш (\u005C)
\xXX Символ Latin1, заданный двумя шестнадцатеричными цифрами XX
\uxXXXX Unicodeсимвол, заданный четырьмя шестнадцатеричными цифрами XXXX
\XXX Символ из набора Latin1, заданный тремя восьмеричными цифрами
XXX, с кодом в диапазоне от 1 до 377. Не поддерживается ECMAScript v3;
такой способ записи не должен использоваться

*/


// 6.РАБОТА СО СТРОКАМИ

var s = 'Это пример обычной строки'
var mynum = 35
var value = 55
var substring = ''

var v = 1 

console.log(s)
console.log('Длинна строки - s.length = ', s.length)
console.log('Последний символ в строке - s.charAt(s.length-1) = ', s.charAt(s.length - 1))
console.log(s)
console.log('Извлекает выбранный кусок строки. Нужно задать начальный и конечный индекс - s.substring(2, 8) = ', s.substring (2, 8)  )
console.log('Определяет позицию первого символа «ч» в строке s: через метод indexOf() ', s.indexOf('ч') )
console.log('Определяет позицию первого символа «a» в строке s: через метод indexOf() ', s.indexOf('a'))


//console.log('Пример явного преобразования числа в строку  mynum = String(number) ', mynum = String(number) )

//value.toString();  //не работает! ? 
//console.log('Проверка типа (перевоми число в строку) value.toString( ',  typeof  value )

//value= number.toString(),

//var string_value = String(number);
//string_value = number.toString( );
//last_char = s.charAt(s.length – 1)
//sub = s.substring(1,4);

//7. ОБЪЕКТЫ

var point = new Object();
point.x = 2.3
point.y = -1.2
console.log(point)

// объект point из предыдущего примера также может быть создан и инициализирован следующей строкой:
var pointTwo = { x: 5.3, y: -5.2 };
console.log(pointTwo)
//Объектные литералы могут быть вложенными. Например:
var rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 4 }
};
    
console.log(rectangle)

var empty = {}; // Объект без свойств
//Конструктор Object() создает пустой объект, как если бы использовался литерал {}.
var point = { x:0, y:0 };
var circle = { x:point.x, y:point.y+1, radius:2 };
var homer = {
"name": "Homer Simpson",
"age": 34,
"married": true,
"occupation": "plant operator",
'email': "homer@example.com"
};
   
// Ещё один пример объявления Объекта
 //   var square = { "upperLeft": { x:point.x, y:point.y }, 'lowerRight': { x:(point.x + side), y:(point.y+side) }};

//Наконец, следует отметить, что любые строки, числа или логические значения
//могут быть преобразованы в соответствующий объектобертку с помощью функции Object():
var number_wrapper = 3;
console.log(typeof  number_wrapper)
number_wrapper = Object(3);
 console.log(typeof  number_wrapper )

//8 МАССИВЫ

//Массив может быть создан с помощью функцииконструктора Array().
var a = new Array();
a[0] = 1.2;
a[1] = "JavaScript";
a[2] = true;
a[3] = { x:1, y:3 };
console.log(a)

// Массивы могут также быть инициализированы путем передачи элементов массива конструктору Array().

var b = new Array(1.2, "JavaScript", true, { x: 1, y: 3 });
console.log(b)

document.write(b) // пример функции , что выводит данные на страницу из JavaScript

//Если передать конструктору Array() только одно число, оно определит длину массива.
//Вот  пустой массив на 10 єлементов

var c = new Array(10);

var d = [1.2, "JavaScript", true, { x:1, y:3 }];
// Как и объектные литералы, литералы массивов могут быть вложенными:
var matrix = [[1,2,3], [4,5,6], [7,8,9]];

// 9. ОБЪЕКТ DATE 

var now = new Date(); // Создание объекта, в котором хранятся текущие дата и время.
console.log(now)
// Создание объекта, в котором хранится дата Рождества.
// Обратите внимание: номера месяцев начинаются с нуля, поэтому декабрь имеет номер 11!
var xmas = new Date(2000, 11, 25);
console.log(xmas)

/*
Методы объекта Date позволяют получать и устанавливать различные значения
даты и времени и преобразовывать дату в строку с использованием либо локаль
ного времени, либо времени по Гринвичу (GMT). Например:
*/
xmas.setFullYear(xmas.getFullYear() + 1); // Заменяем дату датой следующего Рождества.
var weekday = xmas.getDay(); // В 2007 году Рождество выпадает на вторник.

document.write(" Сегодня: " + now.toLocaleString()); // Текущие дата и время.
document.write( " ----: " + xmas );

// 11. РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

/*  
Регулярные выражения предоставляют богатый и мощный синтаксис описания
текстовых шаблонов. Они применяются для поиска соответствия заданному
шаблону и реализации операций поиска и замены. В JavaScript для формирова
ния регулярных выражений принят синтаксис языка Perl.
Регулярные выражения представляются в JavaScript объектом RegExp и могут
создаваться с помощью конструктора RegExp().
*/

var point = { x: 1, y: 1 }; // Определяем объект
console.log(point);
var has_x_coord = "x" in point; // Равно true
var has_y_coord = "y" in point; // Равно true

console.log(has_y_coord)

var d = new Date(); // Создаем новый объект с помощью конструктора Date()
d instanceof Date; // Равно true; объект d был создан с помощью
console.log(d instanceof Date)

console.log( typeof ( 34 ) )

// ОПЕРАТОР   instanceof
/*
d instanceof Object; // Равно true; все объекты представляют собой экземпляры
// класса Object
d instanceof Number; // Равно false; d не является объектом Number
var a = [1, 2, 3]; // Создаем массив с помощью литерала массива
a instanceof Array; // Равно true; a – это массив
a instanceof Object; // Равно true; все массивы представляют собой объекты
a instanceof RegExp; // Равно false; массивы не являются регулярными выражениями
*/

//  ОПЕРАТОР  DELETE
/*
var o = {x:1, y:2}; // Определяем переменную; инициализируем ее объектом
delete o.x; // Удаляем одно из свойств объекта; возвращает true
typeof o.x; // Свойство не существует; возвращает "undefined"
delete o.x; // Удаляем несуществующее свойство; возвращает true
delete o; // Объявленную переменную удалить нельзя; возвращает false
delete 1; // Нельзя удалить целое; возвращает true
x = 1; // Неявно объявляем переменную без ключевого слова var
delete x; // Этот вид переменных можно удалять; возвращает true
x; // Ошибка времени выполнения: x не определено

Важно понимать, что оператор delete влияет только на свойства, но не на объек
ты, на которые эти свойства ссылаются. Взгляните на следующий фрагмент:
var my = new Object(); // Создаем объект по имени "my"
my.hire = new Date(); // my.hire ссылается на объект Date
my.fire = my.hire; // my.fire ссылается на тот же объект
delete my.hire; // свойство hire удалено; возвращает true
document.write(my.fire); // Но my.fire продолжает ссылаться на объект Date

*/