// 1. ОБЪЕКТЫ И МАССИВЫ  / Object and Arry

//1.1. Метод toString ()
/*
Функция toString () есть в любом объетке Object .По умолчанию она возвращает строку. 
Чтобы преобразовать свойство  объекта(отдельный элемент массива) в объект тип String, то нужна особая форма записи, как на примере ниже ) 
*/
//Её можно переопределить на своё усмотрение - ести примеры в  https://developer.mozilla.org/

/*
var customer = {
    address0: 0.10,
    address1: 1111,  
};
 
console.log("typeof customer.address0 = ",  typeof customer.address0, customer.address0);
var mytext = "";
console.log("mytext = ", mytext, typeof mytext);
mytext = customer.address0.toString();
console.log("mytext = ", mytext, typeof mytext);
var p = "Масса вещества ";
//p + mytext;
console.log("p + mytext ", p + mytext, typeof mytext);
*/

// 1.2  Метод valueOf()
/*
Метод valueOf() во многом похож на метод toString(), но вызывается, когда ин
терпретатору JavaScript требуется преобразовать объект в значение какого-либо
элементарного типа, отличного от строки, – обычно в число.
*/

var myObject = {
    field1: 1,
    field2: 2,
    field3: 3,
};

// 1.3 Метод hasOwnProperty()
/*Метод hasOwnProperty() возвращает true, если для объекта определено не унасле-
дованное свойство с именем, указанным в единственном строковом аргументе
метода. В противном случае он возвращает false. Например:
*/

myObject.hasOwnProperty("undef"); // false: свойство не определено
console.log (myObject.hasOwnProperty("undef") )
myObject.hasOwnProperty("toString"); // false: toString – это унаследованное свойство
console.log (myObject.hasOwnProperty("toString") )
Math.hasOwnProperty("cos"); // true: объект Math имеет свойство cos
console.log (Math.hasOwnProperty("cos") )

myObject.hasOwnProperty("field1"); // true: объект myObject имеет свойство field1
console.log (myObject.hasOwnProperty("field1") )


//  1.4  Метод propertyIsEnumerable()
/*
Метод propertyIsEnumerable() возвращает true, если в объекте определено свойство с именем,
 указанным в единственном строковом аргументе метода, и это свойство может быть перечислено
  циклом for/in. В противном случае метод возвращает false. Неперечислимыми обычно являются 
  унаследованные свой
ства (тема наследования свойств рассматривается в главе 9), поэтому практиче
ски всегда этот метод возвращает то же значение, что и метод hasOwnProperty().
*/

var o = { x: 1 };
o.propertyIsEnumerable("x");
o.propertyIsEnumerable("x"); // true: свойство существует и является перечислимым
o.propertyIsEnumerable("y"); // false: свойство не существует
o.propertyIsEnumerable("valueOf"); // false: свойство неперечислимое

// 2. МАССИВЫ

/*
var a = new Array(); // a.length == 0 (ни один элемент не определен)
a = new Array(10); // a.length == 10 (определены пустые элементы 0–9)
a = new Array(1,2,3); // a.length == 3 (определены элементы 0–2)
a = [4, 5]; // a.length == 2 (определены элементы 0 и 1)
a[5] = 1; // a.length == 6 (определены элементы 0, 1 и 5)
a[49] = 0; // a.length == 50 (определены элементы 0, 1, 5 и 49)

Литералы массивов могут содержать литералы объектов или литералы других
массивов:
var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];
Во вновь созданном массиве первое значение литерала массива сохраняется в эле
менте с индексом 0, второе значение – в элементе с индексом 1, и т. д. Если в ли
терале значение элемента опущено, будет создан элемент с неопределенным зна
чением:
var count = [1,,3]; // Массив из 3 элементов, средний элемент не определен.
var undefs = [,,]; // Массив из 2 элементов, оба не определены.
Другой способ создания массива состоит в вызове конструктора Array(). Вызы
вать конструктор можно тремя разными способами:
• Вызов конструктора без аргументов:
var a = new Array( );
В этом случае будет создан пустой массив, эквивалентный литералу [].
• Конструктору явно указываются значения первых n элементов массива:
var a = new Array(5, 4, 3, 2, 1, "testing, testing");
В этом случае конструктор получает список аргументов. Каждый аргумент
определяет значение элемента и может иметь любой тип. Нумерация элемен
тов массива начинается с 0. Свойство length массива устанавливается равным
количеству элементов, переданных конструктору.
• Вызов с единственным числовым аргументом, определяющим длину массива:
var a = new Array(10);
Эта форма позволяет создать массив с заданным количеством элементов (каж
дый из которых имеет значение undefined) и устанавливает свойство length
массива равным указанному значению. Эта форма обращения к конструкто
ру Array() может использоваться для предварительного размещения массива,
если его длина известна заранее. В этой ситуации литералы массивов не
очень удобны.
*/


//2.1 Удаление элементов массива

/*
Оператор delete записывает в элемент массива значение undefined, при этом сам
элемент массива продолжает свое существование. Для удаления элементов так,
чтобы остающиеся элементы сместились к началу массива, необходимо восполь
зоваться одним из методов массива. Метод Array.shift() удаляет первый элемент
массива, метод Array.pop() – последний элемент массива, метод Array.splice() –
непрерывный диапазон элементов. Эти функции описываются далее в этой гла
ве, а также в третьей части книги.
*/

//2.2  Длина массива

/*
var a = new Array(); // a.length == 0 (ни один элемент не определен)
a = new Array(10); // a.length == 10 (определены пустые элементы 0–9)
a = new Array(1,2,3); // a.length == 3 (определены элементы 0–2)
a = [4, 5]; // a.length == 2 (определены элементы 0 и 1)
a[5] = 1; // a.length == 6 (определены элементы 0, 1 и 5)
a[49] = 0; // a.length == 50 (определены элементы 0, 1, 5 и 49)

Наиболее часто свойство length используется для перебора элементов массива
в цикле:

var fruits = ["манго", "банан", "вишня", "персик"];
for(var i = 0; i < fruits.length; i++)
alert(fruits[i]);

Свойство length массива доступно как для чтения, так и для записи. Если устано
вить свойство length в значение, меньшее текущего, массив укорачивается до но
вой длины; любые элементы, не попадающие в новый диапазон индексов, отбра
сываются, и их значения теряются.

Если сделать свойство length большим, чем его текущее значение, в конец масси
ва добавляются новые неопределенные элементы, увеличивая массив до нового
размера.
*/

// 2.3 Создать многомерный массив

/*
var table = new Array(10); // В таблице 10 строк
for(var i = 0; i < table.length; i++)
table[i] = new Array(10); // В каждой строке 10 столбцов
// Инициализация массива
for(var row = 0; row < table.length; row++) {
for(col = 0; col < table[row].length; col++) {
    table[row][col] = row * col;  
}
}
// Расчет произведения 5*7 с помощью многомерного массива
var product = table[7][7]; // 35
console.log(product)


for (var row = 0; row < table.length; row++) {
    for (col = 0; col < table[row].length; col++) {
        console.log(table[row][col] )
    }
}

console.log(table.join(", "), typeof table)

    */

// 2.4  МЕТОД join()

/* 
Метод join()
Метод Array.join() преобразует все элементы массива в строки и объединяет их.
Можно указать необязательный строковый аргумент, предназначенный для раз
деления элементов в результирующей строке. Если разделитель не задан, исполь
зуется запятая. Например, следующий фрагмент дает в результате строку "1,2,3":
var a = [1, 2, 3]; // Создает новый массив с указанными тремя элементами
var s = a.join(); // s == "1,2,3"
*/


// 2.5  
/*
Метод Array.reverse() меняет порядок следования элементов в массиве на проти
воположный и возвращает массив с переставленными элементами.

var a = new Array(1,2,3); // a[0] = 1, a[1] = 2, a[2] = 3
a.reverse(); // теперь a[0] = 3, a[1] = 2, a[2] = 1
var s = a.join(); // s == "3,2,1"

console.log(a);

*/

//2.6 Метод sort()
/*
Метод Array.sort() на месте сортирует элементы массива и возвращает отсорти
рованный массив. Если метод sort() вызывается без аргументов, то он сортирует
элементы массива в алфавитном порядке (при необходимости временно преобра
зуя их в строки для выполнения сравнения):
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry"
Неопределенные элементы переносятся в конец массива.
Для сортировки в какомлибо ином порядке, отличном от алфавитного, можно
передать методу sort() в качестве аргумента функцию сравнения. Эта функция
устанавливает, какой из двух ее аргументов должен присутствовать раньше в от
сортированном списке. Если первый аргумент должен предшествовать второму,
функция сравнения возвращает отрицательное число. Если первый аргумент
в отсортированном массиве должен следовать за вторым, то функция возвраща
ет число, большее нуля. А если два значения эквивалентны (т. е. порядок их рас
положения не важен), функция сравнения возвращает 0. Поэтому, например,
для сортировки элемента в числовом порядке, а не в алфавитном, можно сделать
следующее:
var a = [33, 4, 1111, 222];
a.sort(); // Алфавитный порядок: 1111, 222, 33, 4
a.sort(function(a,b) { // Числовой порядок: 4, 33, 222, 1111
return ab; // Возвращает значение < 0, 0, или > 0
}); // в зависимости от порядка сортировки a и b

/*
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry"
console.log(s);

var a1 = [33, 44, 1111, 222];
console.log(a1);

a1.sort(); // Алфавитный порядок: 1111, 222, 33, 4
a1.sort(function(a,b) { // Числовой порядок: 4, 33, 222, 1111
return a-b; // Возвращает значение < 0, 0, или > 0   . Если написать a-b , то отсортирует по возрастанию. Если b-а , то по убіванию
}); // в зависимости от порядка сортировки a и b
console.log(a1);
*/

// 2.7  МЕТОД concat()

/*
Метод Array.concat() создает и возвращает новый массив, содержащий элементы
исходного массива, для которого был вызван метод concat(), последовательно до
полненный значениями всех аргументов, переданных методу concat(). Если какой-либо
 из этих аргументов сам является массивом, в результирующий массив
добавляются его элементы. Вот несколько примеров:


var a = [1, 2, 3];
console.log(a);
var s = a.concat(4, 5) // Возвращает [1,2,3,4,5]

console.log(s); // Выводим НОВЫЙ МАССИВ в консоль для проверки
console.log(a);

a.concat([4, 5]); // Возвращает [1,2,3,4,5]
console.log(a);
a.concat([4, 5], [6, 7]) // Возвращает [1,2,3,4,5,6,7]
console.log(a);
a.concat(4, [5, [6, 7]]) // Возвращает [1,2,3,4,5,[6,7]]
console.log(a);

*/

// 2.8 МЕТОД  Метод slice()
/*
Метод Array.slice() возвращает фрагмент, или подмассив, указанного массива.
Два аргумента метода определяют начало и конец возвращаемого фрагмента.
Возвращаемый массив содержит элемент, номер которого указан в качестве пер
вого аргумента, плюс все последующие элементы, вплоть до (но не включая) эле
мента, номер которого указан во втором аргументе. Если указан только один ар
гумент, возвращаемый массив содержит все элементы от начальной позиции до
конца массива. Если какойлибо из аргументов отрицателен, он задает номер
элемента массива относительно конца массива. Так, аргумент, равный –1, задает
последний элемент массива, а аргумент, равный –3, – третий элемент массива
с конца. Вот несколько примеров:


var a = [1,2,3,4,5];
var s = a.slice(0, 3); // Возвращает [1,2,3]
console.log(s);

a.slice(3); // Возвращает [4,5]
a.slice(1,-1); // Возвращает [2,3,4]
a.slice(-3,-2); // Возвращает [3]

*/

// 2.9  МЕТОД splice()
/*
Метод Array.splice() – это универсальный метод для вставки или удаления эле
ментов массива. Он изменяет массив на месте, а не возвращает новый массив,
как это делают методы slice() и concat(). Обратите внимание: splice() и slice()
имеют очень похожие имена, но выполняют разные операции.
Метод splice() может удалять элементы из массива, вставлять новые элементы
в массив или выполнять обе операции одновременно. Элементы массива при необходимости смещаются, чтобы после вставки или удаления образовывалась не
прерывная последовательность. Первый аргумент splice() задает позицию в мас
сиве, с которой начинается вставка и/или удаление. Второй аргумент задает ко
личество элементов, которые должны быть удалены (вырезаны) из массива. Если
второй аргумент опущен, удаляются все элементы массива от начального до кон
ца массива. Метод splice() возвращает массив удаленных элементов или (если
ни один из элементов не был удален) пустой массив. Например:
*/
var a = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(a);
var s= a.splice(4); // Возвращает [5,6,7,8]; a равно [1,2,3,4]
console.log(a);
console.log(s);

a.splice(1,2); // Возвращает [2,3]; a равно [1,4]
a.splice(1,1); // Возвращает [4]; a равно [1]
/*
*/

// 2.10  МЕТОД  push() и pop()

/*
Методы push() и pop() позволяют работать с массивами как со стеками. Метод
push() добавляет один или несколько новых элементов в конец массива и возвра
щает его новую длину. Метод pop() выполняет обратную операцию – удаляет по
следний элемент массива, уменьшает длину массива и возвращает удаленное им
значение. Обратите внимание: оба эти метода изменяют массив на месте, а не
создают его модифицированную копию.

*/

// 2.11  МЕТОДЫ unshift() и shift()
/*
Методы unshift() и shift() ведут себя во многом так же, как push() и pop(), за ис
ключением того, что они вставляют и удаляют элементы в начале массива, а не
в его конце. Метод unshift() смещает существующие элементы в сторону боль
ших индексов для освобождения места, добавляет элемент или элементы в нача
ло массива и возвращает новую длину массива. Метод shift() удаляет и возвращает 
первый элемент массива, смещая все последующие элементы вперед на одну позицию для занятия свободного места в начале массива.
*/

