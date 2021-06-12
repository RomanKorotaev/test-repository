//console.log("Hello, World!");

/* Модуль 1
Задание 1
Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

название - строка "Droid"
цена за штуку - число 2000
Тесты
Объявлена переменная productName
Значение переменной productName это строка "Droid"
Объявлена переменная pricePerItem
Значение переменной pricePerItem это число 2000
*/

/*
// Change code below this line
const productName  = 'Droid';
 console.log(productName);
// 'Droid'
const pricePerItem = 2000;
console.log(pricePerItem);
// 2000

*/

//------------------------------------------------------------------

/*
Задание 2
Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

Тесты
Переменная pricePerItem объявлена с помощью let
При объявлении переменной pricePerItem присвоено значение - число 2000
Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
Переменная productName объявлена с помощью let
При объявлении переменной productName присвоено значение - строка "Droid"
Переменной productName присвоено новое значение - строка "Repair droid"
*/

/*
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
pricePerItem = 3500;
productName = "Repair droid";

 //console.log(productName);

//console.log(pricePerItem);

*/

//-------------------------------------------------------------


/*
Задание 3
Задание
Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

topSpeed - число 160.
distance - число 617.54.
login - строка "mango935".
isOnline - буль true.
isAdmin - буль false.

let topSpeed = 160;
const distance = 617.54;
const login = "mango935"
let isOnline = true;
let isAdmin = false;

*/


//-------------------------------------------------------------


/*
Задание 4


Задание
Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

Тесты
Объявлена переменная pricePerItem
Значение переменной pricePerItem это число 3500
Объявлена переменная orderedQuantity
Значение переменной orderedQuantity это число 4
Объявлена переменная totalPrice
Значение переменной totalPrice это число 14000
Использован оператор *


const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

console.log("totalPrice: ", totalPrice);

*/

//-------------------------------------------------------------


/*
Задание 5
Задание
Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

Тесты
Объявлена переменная productName
Значение переменной productName это строка "Droid"
Объявлена переменная pricePerItem
Значение переменной price это число 3500
Объявлена переменная message
Значение переменной message это строка "You picked Droid, price per item is 3500 credits"

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
*/


//-------------------------------------------------------------


/*
Задача: 6
заказ продукта
Задание
Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

pricePerDroid - цена одного дроида, значение 800
orderedQuantity - количество дроидов в заказе, значение 6
deliveryFee - стоимость доставки, значение 50
totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
Тесты
Объявлена переменная orderedQuantity
Значение переменной orderedQuantity это число 6
Объявлена переменная pricePerDroid
Значение переменной pricePerDroid это число 800
Объявлена переменная deliveryFee
Значение переменной deliveryFee это число 50
Объявлена переменная totalPrice
Значение переменной totalPrice это число 4850
Объявлена переменная message
Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."


// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
console.log (message)
*/


//-------------------------------------------------------------


/*
Задача: 7

Задание 
Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!".
 После объявления вызови функцию sayHi.

Тесты
Ожидается объявление функции
Функции присвоено имя sayHi
В теле функции sayHi есть console.log("Hello, this is my first function!")
После объявления есть вызов функции say


function sayHi() {
  console.log("Hello, this is my first function!");
}
 sayHi(); 

 */



 //-------------------------------------------------------------


/*
Задача: 8
 Задание
Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

Тесты
Объявлена функция add(a, b, c)
Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"

*/
/*

//function add(a,b,c) {
//  let result = a+b+c;
//  console.log(`Addition result equals ${result}`);
//}


function add(a,b,c) { 
  console.log(`Addition result equals ${a+b+c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

*/


 //-------------------------------------------------------------


/*
Задача: 9
Задание
Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

Тесты
Объявлена функция add(a, b, c)
В функции add есть оператор return
Вызов add(15, 27, 10) возвращает 52
Вызов add(10, 20, 30) возвращает 60
Вызов add(5, 10, 15) возвращает 30
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/

/*
function add(a, b, c) {
  // Change code below this line
    return a + b + c;


  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

* /



 //-------------------------------------------------------------


/*
Задача: 10

Объявлена функция makeMessage(name, price)
Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"

*/

/*
function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

 //возвращает "You picked Radar, price per item is 6150 credits"
console.log(makeMessage('Radar', 6150));

 //возвращает "You picked Scanner, price per item is 3500 credits"
console.log(makeMessage('Scanner', 3500));

 //возвращает "You picked Reactor, price per item is 8000 credits"
console.log(makeMessage('Reactor', 8000));

  //возвращает "You picked Engine, price per item is 4070 credits"
console.log(makeMessage('Engine', 4070));
*/

 //-------------------------------------------------------------


/*
Задача: 11

Задание
Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество единиц товара в заказе;
pricePerItem - цена одной единицы товара.
Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

Тесты
Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
Вызов calculateTotalPrice(5, 100) возвращает 500
Вызов calculateTotalPrice(8, 60) возвращает 480
Вызов calculateTotalPrice('3, 400) возвращает 1200
Вызов calculateTotalPrice(1, 3500) возвращает 3500
Вызов calculateTotalPrice(12, 70) возвращает 840
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/
/*
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity*pricePerItem;

  // Change code above this line
  return totalPrice;
};
*/

/*
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}
*/

 //-------------------------------------------------------------


/*
Задача: 13

/*
Задание
Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

Тесты
Объявлена функция isAdult(age)
В выражении проверки используется оператор >=
Вызов isAdult(20) возвращает true
Вызов isAdult(14) возвращает false
Вызов isAdult(8) возвращает false
Вызов isAdult(37) возвращает true
*/

/*
function isAdult(age) {
  // Change code below this line
  const passed = age>=18;

  // Change code above this line
  return passed;
}
*/

 //-------------------------------------------------------------


/*
Задача: 14

Задание
Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

Тесты
Объявлена функция isValidPassword(password)
В выражении проверки паролей использован оператор ===
Вызов isValidPassword("mangodab3st") возвращает false
Вызов isValidPassword("kiwirul3z") возвращает false
Вызов isValidPassword("jqueryismyjam") возвращает true

*/

/*
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = 'jqueryismyjam'===password;

  // Change code above this line
  return isMatch;
}

console.log("isValidPassword(mangodab3st): ",isValidPassword('mangodab3st'));
console.log("isValidPassword(kiwirul3z): ", isValidPassword('kiwirul3z'));
console.log("isValidPassword(jqueryismyjam): ",isValidPassword('jqueryismyjam'));

*/


 //-------------------------------------------------------------


/*
Задача  15
Задание
Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка "You are a minor".
Тесты
Объявлена функция checkAge(age).
В выражении проверки возраста использован оператор >=
Вызов checkAge(20) возвращает "You are an adult"
Вызов checkAge(8) возвращает "You are a minor"
Вызов checkAge(14) возвращает "You are a minor"
Вызов checkAge(38) возвращает "You are an adult"

*/

/*
function checkAge(age) {
  let message;

  if (age>=18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

*/

 //-------------------------------------------------------------


/*
Задача  16

Задача: склад товаров

Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
В противном случае записывается строка "Order is processed, our manager will contact you.".
Тесты
Объявлена функция checkStorage(available, ordered).
Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

*/

/*
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available < ordered)
{ message = 'Not enough goods in stock!'}
  else {message = 'Order is processed, our manager will contact you.'}
  // Change code above this line
  return message;
}

*/

 //-------------------------------------------------------------


/*
Задача  17

Задание
Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

Тесты
Значение переменной a равно 7
Использован оператор +=
Значение переменной b равно 6
Использован оператор -=
Значение переменной c равно 45
Использован оператор *=
Значение переменной d равно 2
Использован оператор /=

*/

/*
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
//a = a + 2;
a+=2;

//b = b - 4;
b-=4;

//c = c * 3;
c*=3;

//d = d / 10;
d/=10;
*/

 //-------------------------------------------------------------


/*
Задача  18

Задание
Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

pricePerDroid - цена одного дроида
orderedQuantity - кол-во заказанных дроидов
customerCredits - сумма средств на счету клиента
Дополни её следующим функционалом:

Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
Добавь проверку сможет ли клиент оплатить заказ:
если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
Тесты
Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"

*/

/*

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    const totalPrice = pricePerDroid * orderedQuantity;
    
    totalPrice > customerCredits ? message = "Insufficient funds!" : message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;

  // Change code below this line

  // Change code above this line
  return message;
}

console.log( makeTransaction (3000, 5, 23000));

*/



 //-------------------------------------------------------------


/*
Задача  19

Задание
Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
Тесты
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword(null) возвращает "Canceled by user!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

*/


/*
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password===null ) { // Change this line
    message =  'Canceled by user!';
  } else if (password===ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}


console.log( checkPassword(null));
console.log( checkPassword('jqueryismyjam'));

*/


 //-------------------------------------------------------------


/*
Задача  20

Задание
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message 
присваивается строка "There are no products in the order!".

Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается 
строка "Your order is too large, there are not enough items in stock!".

В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

Тесты
Объявлена функция checkStorage(available, ordered)
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
Вызов checkStorage(150, 0) возвращает "There are no products in the order!"

*/
/*

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
    if (ordered === 0) { message = 'There are no products in the order!' }
    else if (available < ordered) { message = 'Your order is too large, there are not enough items in stock!' }
    else { message = 'The order is accepted, our manager will contact you' };    

  // Change code above this line
  return message;
}


console.log(checkStorage(100, 50));
console.log(checkStorage(100, 0));
console.log(checkStorage(100, 150));

*/



 //-------------------------------------------------------------


/*
Задача  21

Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция isNumberInRange(start, end, number)
В выражении проверки использован оператор &&
Вызов isNumberInRange(10, 30, 17) возвращает true
Вызов isNumberInRange(10, 30, 5) возвращает false
Вызов isNumberInRange(20, 50, 24) возвращает true
Вызов isNumberInRange(20, 50, 76) возвращает false

*/
/*

function isNumberInRange(start, end, number) {
  const isInRange = start<= number && end>=number ; // Change this line

  return isInRange;
}

console.log(isNumberInRange(100, 150, 122));

*/


 //-------------------------------------------------------------


/*
Задача  22

Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция checkIfCanAccessContent(subType)
В выражении проверки использован оператор ||
Вызов checkIfCanAccessContent("pro") возвращает true
Вызов checkIfCanAccessContent("starter") возвращает false
Вызов checkIfCanAccessContent("vip") возвращает true
Вызов checkIfCanAccessContent("free") возвращает false
*/

/*

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType==='vip' || subType==='pro' ; // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("starter"));
*/


 //-------------------------------------------------------------


/*
Задача  22
Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

Тесты
Объявлена функция isNumberNotInRange(start, end, number)
В выражении использован оператор !
Вызов isNumberNotInRange(10, 30, 17) возвращает false
Вызов isNumberNotInRange(10, 30, 5) возвращает true
Вызов isNumberNotInRange(20, 50, 24) возвращает false
Вызов isNumberNotInRange(20, 50, 76) возвращает true

*/

/*
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange =!isInRange ; // Change this line

  return isNotInRange;
}
*/


/*
 //-------------------------------------------------------------


/*
Задача  24

Задача: расчёт скидки
Задание
Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

Используя ветвления и логические операторы, дополни код функции.

Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

Тесты
Объявлена функция getDiscount(totalSpent)
Вызов getDiscount(137000) возвращает 0.1
Вызов getDiscount(46900) возвращает 0.05
Вызов getDiscount(8250) возвращает 0.02
Вызов getDiscount(1300) возвращает 0
Вызов getDiscount(5000) возвращает 0.02
Вызов getDiscount(20000) возвращает 0.05
Вызов getDiscount(50000) возвращает 0.1
*/

/*

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line

    switch (true) {
        case totalSpent >= 50000:
            discount = GOLD_DISCOUNT;
            break;
        
         case totalSpent < 50000 && totalSpent >= 20000:
            discount = SILVER_DISCOUNT;
            break;
        
         case totalSpent < 20000 && totalSpent >= 5000:
            discount = BRONZE_DISCOUNT;
            break;
        default:
            discount = BASE_DISCOUNT;

     }
  // Change code above this line
  return discount;
}

console.log("getDiscount (20) ) : ", getDiscount(20));
console.log("getDiscount (60000) ) : ", getDiscount(60000));
console.log("getDiscount (25000) ) : ", getDiscount(25000));
console.log("getDiscount (11000) ) : ", getDiscount(11000));
console.log("getDiscount (400) ) : ", getDiscount(400));

*/

 //-------------------------------------------------------------


/*
Задача  25

Задание
Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

Тесты
Объявлена функция checkStorage(available, ordered).
Использован тернарный оператор.
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"
*/

/*
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
    
   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  return message;
}

console.log( 'checkStorage(10, 5) : ', checkStorage(10, 5));

console.log('checkStorage(10, 15) : ', checkStorage(10, 15));

console.log('checkStorage(10, 18) : ', checkStorage(10, 18));

*/


 //-------------------------------------------------------------


/*
Задача  26

Задание
Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

Используя тернарный оператор дополни функцию так, что:

Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
В противном случае, присвой message строку "Access denied, wrong password!".
Тесты
Объявлена функция checkPassword(password)
Использован тернарный оператор
Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"
*/

/*
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password===ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
  // Change code above this line
  return message;
}


console.log('checkPassword(54545454): ', checkPassword('54545454'));
console.log('checkPassword(jqueryismyjam): ', checkPassword('jqueryismyjam'));

*/


 //-------------------------------------------------------------


/*
Задача  27

Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

Если значение параметра type это строка:

"starter" - цена подписки 0 кредитов.
"professional" - цена подписки 20 кредитов.
"organization" - цена подписки 50 кредитов.
Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

Тесты
Объявлена функция getSubscriptionPrice(type)
Вызов getSubscriptionPrice("professional") возвращает число 20
Вызов getSubscriptionPrice("organization") возвращает число 50
Вызов getSubscriptionPrice("starter") возвращает число 0

*/

/*
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (true) { // Change this line
    case type==='starter': // Change this line
      price = 0; // Change this line
      break;

    case type==='professional': // Change this line
      price = 20; // Change this line
      break;

    case type==='organization': // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

console.log('getSubscriptionPrice(professional): ', getSubscriptionPrice('professional'));
console.log('getSubscriptionPrice(starter): ', getSubscriptionPrice('starter'));
console.log('getSubscriptionPrice(organization): ', getSubscriptionPrice('organization'));
*/

 //-------------------------------------------------------------


/*
Задача  28


Задание
Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password:

равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

Тесты
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword(null) возвращает "Canceled by user!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
*/

/*
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  
    
 switch (true) { 
    case password === null: 
       message = "Canceled by user!"
      break;

    case password === ADMIN_PASSWORD: 
      message = "Welcome!";
      break;
     
     default:
         message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}


console.log('checkPassword("jqueryismyjam"): ', checkPassword("jqueryismyjam"));
console.log('checkPassword("222"): ', checkPassword("222"));
console.log('checkPassword("null"): ', checkPassword(null));


*/



 //-------------------------------------------------------------

/*
Задача  29


Задача: доставка товара
Задание
Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:

China - 100 кредитов
Chile - 250 кредитов
Australia - 170 кредитов
Jamaica - 120 кредитов
Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

Тесты
Объявлена функция getShippingCost(country)
В теле функции использована инструкция switch
Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"

*/

/*

  function getShippingCost(country) {
    let message;
    let price = 0;
   
switch (country) { 
    case "Australia":
      price = 170;
       message = `Shipping to ${country} will cost ${price} credits`
      break;

    case "China":
      price = 100;
       message = `Shipping to ${country} will cost ${price} credits`
      break;
    
    case "Chile":
      price = 250;
       message = `Shipping to ${country} will cost ${price} credits`
      break;
    
    case "Jamaica":
      price = 120;
       message = `Shipping to ${country} will cost ${price} credits`
      break;
    
     default:
         message = "Sorry, there is no delivery to your country";
  }

    return message;
}
  


console.log(getShippingCost("Australia"));//возвращает "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); //возвращает "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); //возвращает "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile") ) ;//возвращает "Shipping to Chile will cost 250 credits"
console.log( getShippingCost("Jamaica")); //возвращает "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); //возвращает "Sorry, there is no delivery to your country"

*/

 //-------------------------------------------------------------

/*
Задача  30


Задание
Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

Тесты
Объявлена функция getNameLength(name)
Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"

*/


/*
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}


console.log(getNameLength("Ricardo")); 

*/



 //-------------------------------------------------------------

/*
Задача  31

/*
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.
Тесты
Объявлена переменная courseTopic
Значение переменной courseTopic это строка "JavaScript essentials"
Объявлена переменная courseTopicLength
Значение переменной courseTopicLength это число 24
Объявлена переменная firstElement
Значение переменной firstElement это строка "J"
Объявлена переменная lastElement
Значение переменной lastElement это строка "s"
*/

/*
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];


console.log("courseTopicLength = courseTopic.length : ", courseTopicLength);
console.log("firstElement = courseTopic[0] : ", firstElement);
console.log("lastElement = courseTopic[courseTopic.length - 1] : ", lastElement);

*/



 //-------------------------------------------------------------

/*
Задача  32

Задание
Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

Тесты
Объявлена функция getSubstring(string, length)
Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
Вызов функции getSubstring("Hello world", 0) возвращает ""

*/

/*
function getSubstring(string, length) {
  const substring =string.slice(0, length) ; // Change this line

  return substring;
}


console.log ( "getSubstring(Hello world, 6) возвращает  --Hello-- ", getSubstring("Hello world", 6))
console.log ( getSubstring("Hello world", 3))
console.log(getSubstring("Hello world", 1))
console.log ( getSubstring("Hello world", 11))

*/



 //-------------------------------------------------------------

/*
Задача  33

/*
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
Тесты
Объявлена функция formatMessage(message, maxLength)
Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"
*/


/*
function formatMessage(message, maxLength) {
  let result;

  result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
  // Change code below this line

  /// Change code above this line
  return result;
}

console.log("formatMessage(--Curabitur ligula sapien--, 16)", formatMessage("Curabitur ligula sapien", 16))
console.log ( "formatMessage(--Curabitur ligula sapien--, 23)" , formatMessage("Curabitur ligula sapien", 23) )

*/




 //-------------------------------------------------------------

/*
Задача 34

Задание
Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре.
 Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

Тесты
Объявлена функция normalizeInput(input)
Вызов функции normalizeInput("Hello world") возвращает "hello world"
Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
Вызов функции normalizeInput("Big SALE") возвращает "big sale"

*/

/*
function normalizeInput(input) {
  const normalizedInput =input// ; // Change this line
  return normalizedInput;
}

console.log( normalizeInput("Big SALE") );

*/



 //-------------------------------------------------------------

/*
Задача 35

Задание
Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
name - имя для проверки вхождения в полное имя.
Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

Тесты
Объявлена функция checkForName(fullname, name).
Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false
*/


/*
function checkForName(fullName, name) {

 const result = fullName.includes (name); // Change this line
  return result;
}

console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));


*/




 //-------------------------------------------------------------

/*
Задача 36

Задание
Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.
Тесты
Объявлена функция checkForSpam(message).
Вызов функции checkForSpam("Latest technology news") возвращает false
Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
Вызов функции checkForSpam("Get best sale offers now!") возвращает true
Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true

*/


function checkForSpam(message) {
  let result;
  // Change code below this line
result = message.toLowerCase().includes ("spam") || message.toLowerCase().includes ("sale") ? true : false
  // Change code above this line
  return result;
}

console.log("checkForSpam (Get best sale offers now!)", checkForSpam("Get best sale offers now!"));
console.log("checkForSpam(Latest technology news)",  checkForSpam("Latest technology news"));