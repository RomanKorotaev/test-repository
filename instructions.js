
// ИНСТРУКЦИИ

/*
Обычно интерпретатор исполняет все инструкции, однако в некоторых слу
чаях выполнение составной инструкции может быть внезапно прервано. Это про
исходит, если в составной инструкции содержится инструкция break, continue, re
turn или throw и если при выполнении возникает ошибка либо вызов функции
приводит к ошибке или генерации необрабатываемого исключения.

*/

// 1.1.  ИНСТРУКЦИЯ  IF

//1.2.  ИНСТРУКЦИЯ IF / ELSE
/*

if (n == 1) {
// Исполняем блок кода 1
}
else if (n == 2) {
// Исполняем блок кода 2
}
else if (n == 3) {
// Исполняем блок кода 3
}
else {
// Если все остальные условия else не выполняются, исполняем блок 4
}

*/

// 1.3.   ИНСТРУКЦИЯ  switch 

/*
switch(n) {
case 1: // Выполняется, если n == 1
// Исполняем блок кода 1.
break; // Здесь останавливаемся
case 2: // Выполняется, если n == 2
// Исполняем блок кода 2.
break; // Здесь останавливаемся
case 3: // Выполняется, если n == 3
// Исполняем блок кода 3.
break; // Здесь останавливаемся
default: // Если все остальное не подходит...
// Исполняем блок кода 4.
break; // Здесь останавливаемся
}

Инструкция break, описываемая далее в этой главе, приводит к передаче управления
в конец инструкции switch или цикла.

При использовании switch внутри функции можно помещать
вместо break инструкцию return. Обе эти инструкции служат для завершения ра
боты инструкции switch и предотвращения перехода к следующей метке case.

function convert(x) {
switch(typeof x) {
case 'number': // Преобразуем число в шестнадцатеричное целое
return x.toString(16);
case 'string': // Возвращаем строку, заключенную в кавычки
return '"' + x + '"';
case 'boolean': // Преобразуем в TRUE или FALSE, в верхнем регистре
 return x.toString().toUpperCase();
default: // Любой другой тип преобразуем обычным способом
return x.toString()
}
}

*/

//  1.4.  ИНСТРУКЦИЯ WHILE


/*
var count = 0;
while (count < 10) {
document.write(count + "<br>");
count++;
}
*/

//  1.5.  ИНСТРУКЦИЯ  DO WHILE
/*
function printArray(a) {
if (a.length == 0)
document.write("Пустой массив");
else {
var i = 0;
do {
document.write(a[i] + "<br>");
} while (++i < a.length);
}
}
*/

// 1.6.   Инструкция for/in

/*
for (переменная in объект)
инструкция
Здесь переменная должна быть либо именем переменной, либо инструкцией var,
объявляющей переменную, либо элементом массива, либо свойством объекта
(т. е. должна быть чемто, что может находиться левой части выражения при
сваивания). Параметр объект – это имя объекта или выражение, результатом ко
торого является объект. И как обычно, инструкция – это инструкция или блок ин
струкций, образующих тело цикла.

*/

/*
var pointTwo = { x: 5.3, y: -5.2 };
console.log(pointTwo)

var my_object = {
    prop: "RomKor", age: 34, year: 2021 };

for (var age in my_object) {
document.write("имя: " + age + " -- значение: " + my_object[age], "<br>");
}

var mySecondObject = new Object();
mySecondObject.x = 222.3
mySecondObject.y = -111.2
console.log(mySecondObject)

var o = {x:11, y:22, z:33};
var a = new Array();
var i = 22;
for (a[i++] in o)  alert(i); //пустое тело цикла ;


* /


/*
Массивы в JavaScript – это просто специальный тип объектов. Следовательно,
цикл for/in может использоваться для перебора элементов массива так же, как
свойств объекта. Например, предыдущий блок кода при замене строки на приве
денную ниже перечисляет «свойства» 0, 1 и 2 массива:

for (i in a) alert(i);

*/


//  1.7.   МЕТКИ   (ЦЫКЛЫ  и т.д. МОЖНО  ИМЕНОВАТЬ)

/*
Метки
Метки case и default: в сочетании с инструкцией switch – это особый вариант бо
лее общего случая. Любая инструкция может быть помечена указанным перед
ней именем идентификатора и двоеточием:
идентификатор: инструкция
Здесь идентификатор может быть любым допустимым в JavaScript идентификато
ром, не являющимся зарезервированным словом. Имена меток отделены от имен
переменных и функций, поэтому программист не должен беспокоиться о кон
фликте имен, если имя метки совпадает с именем переменной или функции.
Пример инструкции while с меткой:

parser:  // ПРИМЕР ИМЕНОВАНОГО ЦЫКЛА
while(token != null) {
// здесь код опущен
}
Пометив инструкцию, мы даем ей имя, по которому на нее можно ссылаться из
любого места программы. Пометить можно любую инструкцию, хотя обычно по
мечаются только циклы while, do/while, for и for/in. Дав циклу имя, можно по
средством инструкций break и continue выходить из цикла или из отдельной ите
рации цикла.
*/

// 1.8. Инструкция break (стр. 109)

/*Инструкция break приводит к немедленному выходу из самого внутреннего цик
ла или инструкции switch.

outerloop:
for(var i = 0; i < 10; i++) {
innerloop:
for(var j = 0; j < 10; j++) {
if (j > 3) break; // Выход из самого внутреннего цикла
if (i == 2) break innerloop; // То же самое
if (i == 4) break outerloop; // Выход из внешнего цикла
document.write("i = " + i + " j = " + j + "<br>");
}
}
document.write("FINAL i = " + i + " j = " + j + "<br>");

*/

//  1.9.  Инструкция continue


/*
Инструкция continue схожа с инструкцией break.Однако вместо выхода из цикла
continue запускает новую итерацию цикла. Синтаксис инструкции continue столь
же прост, как и у инструкции break:
continue;
Инструкция continue может также использоваться с меткой:
continue имя_метки;
Инструкция continue как в форме без метки, так и с меткой может использовать
ся только в теле циклов while, do/while, for и for/in. Использование ее в любых
других местах приводит к синтаксической ошибке.

Когда выполняется инструкция continue, текущая итерация цикла прерывается
и начинается следующая

*/

//  1.10  Инструкция var
/*
Инструкция var позволяет явно объявить одну или несколько переменных. Инструкция имеет следующий синтаксис:
var имя_1 [ = значение_1] [ ,..., имя_n [= значение_n]]

*/

//  1.11  Инструкция function

/*

Инструкция function в JavaScript определяет функцию.Она имеет следующий
синтаксис:
function имя_функции([арг1 [,арг2 [..., аргn]]]) {
инструкции
}

*/


// function welcome() { alert("Добро пожаловать на мою домашнюю страницу!"); }
// welcome();

var msg = "test text"

function print(msg) {
document.write(msg, "<br>");
}

print(msg);

var x = 2, y = 3;

function hypotenuse(x, y) {
return Math.sqrt(x*x + y*y); // Инструкция return описана далее
}

document.write(hypotenuse(x, y), "<br>");  

var n = 4;

function factorial(n) { // Рекурсивная функция
if (n <= 1) return 1;
return n * factorial(n - 1);
}


document.write(factorial(n), "<br>"); 

//  1.12  Инструкция return

/*
Инструкция return прекращает исполнение функции,
    даже если в теле функции остались другие инструкции.
Инструкция return может располагаться только в теле функции. Присутствие ее
в любом другом месте является синтаксической ошибкой.
*/

//Инструкция return может также использоваться без выражения, тогда она просто
//прерывает исполнение функции, не возвращая значение.Например:
/*
function display_object(obj) {
// Сначала убедимся в корректности нашего аргумента
// В случае некорректности пропускаем остаток функции
    if (obj == null) return;
// Здесь находится оставшаяся часть функции...
}

*/

// 1.13.  Инструкция throw
/*
Исключение – это сигнал, указывающий на возникновение какойлибо исклю
чительной ситуации или ошибки. Генерация исключения (throw) – это способ
просигнализировать о такой ошибке или исключительной ситуации. Перехва'
тить исключение (catch), значит, обработать его, т. е. предпринять действия,
необходимые или подходящие для восстановления после исключения. В Java
Script исключения генерируются в тех случаях, когда возникает ошибка време
ни выполнения, тогда программа явно генерирует его с помощью инструкции
throw. Исключения перехватываются с помощью инструкции try/catch/finally,
которая описана в следующем разделе.

*/

function factorialTwo(x) {
// Если входной аргумент не является допустимым,
// генерируем исключение!
if (x < 0) throw new Error("x не может быть отрицательным"); // это сообщение видно в консоли
// В противном случае вычисляем значение и нормальным образом выходим из функции
for(var f = 1; x > 1; f *= x, x--) /* пустое тело цикла */ ;
return f;
}



document.write("Test", "<br>"); 
var m = 4;
factorialTwo(m);

document.write("Test factorialTwo(m)  ", factorialTwo(m), "<br>"); 

//  1.14 Инструкция try/catch/finally

/*
Инструкция try/catch/finally реализует механизм обработки исключений в Java
Script. Конструкция try в этой инструкции просто определяет блок кода, в кото
ром обрабатываются исключения. За блоком try следует конструкция catch
с блоком инструкций, вызываемых, когда гделибо в блоке try возникает исклю
чение. За конструкцией catch следует блок finally, содержащий код зачистки,
который гарантированно выполняется независимо от того, что происходит в бло
ке try. И блок catch, и блок finally не являются обязательными, однако после
блока try должен обязательно присутствовать хотя бы один из них. Блоки try,
catch и finally начинаются и заканчиваются фигурными скобками. Это обяза
тельная часть синтаксиса и она не может быть опущена, даже если между ними
содержится только одна инструкция. В обычной ситуации управление доходит до
 конца блока try, а затем переходит
к блоку finally, который выполняет всю необходимую зачистку. Если управле
ние вышло из блока try изза инструкций return, continue или break, перед пере
дачей управления в другое место кода исполняется блок finally.
*/

/*
function factorialThree(x) {
// Если входной аргумент не является допустимым,
// генерируем исключение!
if (x < 0) throw new Error("x не может быть отрицательным"); // это сообщение видно в консоли
// В противном случае вычисляем значение и нормальным образом выходим из функции
for(var f = 1; x > 1; f *= x, x--) // пустое тело цикла  ;
return f;
}
*/


/*
try {
// Просим пользователя ввести число
var n = prompt("Введите положительное число", "");
// Вычисляем факториал числа, предполагая, что входные данные корректны
var f = factorial(n); // эта функция определена выше по тексту
// Показываем результат
alert(n + "! = " + f);
}
catch (ex) { // Если введенные данные некорректны, мы попадем сюда
// Сообщаем пользователю об ошибке
alert(ex);
}

*/

/*
var i = 1, total = 0;

var a = new Array();
a[0] = 11.1;
a[1] = 11.2;
a[2] = 11.3;
a[3] = 11.4;
console.log(a)

while(i < a.length) {
try {
if ((typeof a[i] != "number") || isNaN(a[i])) // Если это не число,
continue; // переходим к следующей итерации цикла.
total += a[i]; // В противном случае добавляем число к общей сумме.
}
finally {
    i++; // Всегда увеличиваем i, даже если ранее была инструкция continue.
    alert(" Всегда увеличиваем i, даже если ранее была инструкция continue.");
    }
    
    console.log( " i = ", i);
    console.log( " total = ", total);
}

*/

//  1.15 Инструкция with

/*
В главе 4 мы обсуждали область видимости переменных и цепочку областей ви
димости – список объектов, в которых выполняется поиск при разрешении име
ни переменной. Инструкция with используется для временного изменения це
почки областей видимости.

Например, для доступа к элементам HTMLформы
вам, возможно, придется пользоваться такими выражениями:
frames[1].document.forms[0].address.value
Если надо обратиться к этой форме несколько раз, можно воспользоваться инст
рукцией with для добавления формы в цепочку областей видимости:
with(frames[1].document.forms[0]) {
// Здесь обращаемся к элементам формы непосредственно, например:
name.value = "";
address.value = "";
email.value = "";
}
Это сокращает объем текста программы – больше не надо указывать фрагмент
frames[1].document.forms[0] перед каждым именем свойства. Этот объект пред
ставляет собой временную часть цепочки областей видимости и автоматически
участвует в поиске, когда JavaScript требуется разрешить такой идентифика
тор, как address.
*/


var customer = {
    address0: 0.10,
    address1: 1111,
    address2: 2222,
    address3: 3333,
    address4: 4444,
 };
var mytext = "";

console.log(customer);

console.log("mytext = ", mytext, typeof mytext);

mytext = customer.address0.toString();

var p = "Масса вещества ";

//p + mytext;

console.log("p + mytext ", p + mytext, typeof mytext);

//mytext = customer.toString();
console.log("mytext = ", mytext, typeof mytext);

var addr = " " +"\n";
for(i = 0; i < 5; i++) {
addr += customer["address" + i] + '\n';
}

console.log("addr: ", addr);

console.log("Проверка функции  instanceof :) ", customer instanceof Object);
