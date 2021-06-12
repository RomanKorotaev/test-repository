// 1. ОПЕРАТОРЫ. стр. 77 

/*
P A Оператор Типы операндов Выполняемая операция
15 L . Объект, идентификатор Обращение к свойству
L [] Массив, целое число Индексация массива
L () Функция, аргументы Вызов функции
R new Вызов конструктора Создание нового объекта
14 R ++ Левостороннее
выражение
Префиксный или постфиксный
инкремент (унарный)
R -- Левостороннее
выражение
Префиксный или постфиксный
декремент (унарный)
R - Число Унарный минус (смена знака)
R + Число Унарный плюс (нет операции)
R ~ Целое число Поразрядное дополнение (унарный)
R ! Логическое значение Логическое дополнение (унарный)
R delete Левостороннее
значение
Аннулирование определения
свойства (унарный)
R typeof Любой Возвращает тип данных(унарный)

R void Любой Возвращает неопределенное
значение (унарный)
13 L *, /, % Числа Умножение, деление, остаток
12 L +, - Числа Сложение, вычитание
L + Строки Конкатенация строк
11 L << Целые числа Сдвиг влево
L >> Целые числа Сдвиг вправо с расширением
знакового разряда
L >>> Целые числа Сдвиг вправо с дополнением нулями 
10 L <, <= Числа или строки Меньше чем, меньше или равно
L >, >= Числа или строки Больше чем, больше или равно
L instanceof Объект, конструктор Проверка типа объекта //Оператор instanceof требует, чтобы левым операндом был объект, а правым –
имя класса объектов

L in Строка, объект Проверка наличия свойства
9 L == Любой Проверка на равенство
L != Любой Проверка на неравенство
L === Любой Проверка на идентичность
L !== Любой Проверка на неидентичность
8 L & Целые числа Поразрядная операция И
7 L ^ Целые числа Поразрядная операция
исключающего ИЛИ
6 L | Целые числа Поразрядная операция ИЛИ
5 L && Логические значения Логическое И
4 L || Логические значения Логическое ИЛИ
3 R ?: Логическое значение,
любое, любое
Условный трехместный оператор
2 R = Левостороннее
значение, любое
Присваивание
R *=, /=, %=, +=,
-=, <<=, >>=,
>>>=, &=, ^=, |=
Левостороннее
значение, любое
Присваивание с операцией
1 L, Любой Множественное вычисление
*/


//  1.2.  Оператор in

/* Оператор in требует, чтобы левый операнд был строкой или мог быть преобразо
ван в строку. Правым операндом должен быть объект (или массив). Результатом
оператора будет true, если левое значение представляет собой имя свойства объ
екта, указанного справа. Например:

var point = { x: 1, y: 1 }; // Определяем объект
console.log(point);
var has_x_coord = "x" in point; // Равно true
var has_y_coord = "y" in point; // Равно true
var has_z_coord = "z" in point; // Равно false; это не трехмерная точка
var ts = "toString" in point; // Унаследованное свойство; равно true
*/

//Оператор instanceof требует, чтобы левым операндом был объект, а правым –
//имя класса объектов. Результатом оператора будет true, если объект, указанный
//слева, представляет собой экземпляр класса, указанного справа; в противном
//случае результатом будет false.

//var d = new Date(); // Создаем новый объект с помощью конструктора Date()
//d instanceof Date; // Равно true; объект d был создан с помощью
// функции Date()

/*
Для проверки факта наличия того или иного свойства у объекта может использо
ваться оператор in (см. главу 5). С левой стороны от оператора помещается имя
свойства в виде строки, с правой стороны – проверяемый объект. Например:
// Если объект o имеет свойство с именем "x", установить его
if ("x" in o) o.x = 1;
*/


/*
let stars = 0;

stars = Number(prompt('Введите количество звёзд')); // здесь через функцию  promt() запросили
// у пользователя данные, и сразу через функцию  Number() преобразовали в число, т.к. для сравнения 
// в операторе switch  мы используем число.


switch(stars) {
    case 1:
        console.log (" Отель  одна звезда ")
        break;
    
     case 2:
        console.log (" Отель  две звезды ")
        break;
    
     case 3:
        console.log (" Отель  три звезды ")
        break;

     case 4:
        console.log (" Отель  черыре звезды ")
        break;
    
     case 5:
        console.log (" Отель  пять звезд ")
        break;
    
    default:
        console.log (" Нет такого количества звёзд ")
}
*/


/*
let stars = 0;

stars = prompt('Введите количество звёзд');

switch (stars) {
    case "a":
        console.log(" Отель  одна звезда ")
        break;
    
    case "b":
        console.log(" Отель  две звезды ")
        break;
    
    case "c":
        console.log(" Отель  три звезды ")
        break;

    case "d":
        console.log(" Отель  черыре звезды ")
        break;
    
    case "e":
        console.log(" Отель  пять звезд ")
        break;
    
    default:
        console.log(" Нет такого количества звёзд ")
}

*/


let option = Number(prompt('Как Вы желаете получить товар? ' + ' 1 -самовывоз; ' + ' 2 -курьер ' + ' 3 -почта '));
let message =''

switch (option) {
    case 1:
        message = " Вы сможете забрать товар завтра после 12:00  в нашем офисе ";
        break;
    
    case 2:
        message = " Курьер доставит товар завтра с 9:00 до 18:00 ";
        break;
    
    case 3:
        message = " Посылка будет отправлена сегодня ";
        break;
    
    default:
        message = " Вам привезёт менеджер ";
}

console.log(message);