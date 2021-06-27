// ДЕЛАЕМ НАСЛЕДОВАНИЕ НП ПРОТОТИПАХ. СВЯЗІВАЕМ 2 ОБЪЕКТА 
//ЧЕРЕЗ ИХ ПРОПТОРИПЫ(т.к.автоматичесгого наследования при аком прототопном наследовании нет.
//Связывать нужно вручную)

/*
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};


 //Теперь у нас есть конструктор базового класса героя,
 //добавим в prototype какой-то метод.
 
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }

const Warrior = function (name, xp, weapon) {
  
   //Во время выполнения функции Warrior вызываем функцию Hero
   //в контексте объекта создающегося в Warrior, а так же передаем
   //аргументы для инициализации полей this.name и this.xp

   //this это будущий экземпляр Warrior
   
  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};


//ВОТ ПЕРВАЯ КЛЮЧЕВАЯ СТОРОКА ДЛЯ СВЯЗЫВАЕНИЯ И ВОЗМОЖНОСТИ НАСЛЕДОВАНИЯ МЕТОДОВ ОТ БАЗОВОГО МЕТОДА НАСЛЕДНИКУ
Warrior.prototype = Object.create(Hero.prototype);


//ВОТ ВТОРАЯ КЛЮЧЕВАЯ СТОРОКА ДЛЯ СВЯЗЫВАЕНИЯ И ВОЗМОЖНОСТИ НАСЛЕДОВАНИЯ МЕТОДОВ ОТ БАЗОВОГО МЕТОДА НАСЛЕДНИКУ
// Не забываем добавить в Warrior.prototype свойство constructor
Warrior.prototype.constructor = Warrior;


// Сразу добавим метод для атаки в prototype воина
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');

console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword

poly.gainXp(); // Uncaught TypeError: poly.gainXp is not a function


*/




/*

console.log("------------------------");

class Guest { 
  // Аналог функции-конструктора
    constructor(name, roomNumber) {
        this.name = name;
        this.roomNumber = roomNumber; 
    }

      // Аналог Guest.prototype.getFullInfo
  getFullInfo() {
    console.log(`
      Guest ${this.name}
      Room number ${this.roomNumber}
    `);
  }
}

// Под капотом класс это функция-конструктор с прототипом
console.log(typeof Guest); // "function"
console.log(Guest.prototype); // {constructor: ƒ}

const mango = new Guest('Mango', 26);

mango.getFullInfo();
// Guest Mango
// Room number 26

console.log(mango); // {name: Mango, roomNumber: 26}
console.log(mango instanceof Guest); // true
console.log(mango instanceof Object); // true

*/
/*
console.log("------------------------");
class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`I, ${this.name}, am moving!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Вызвать конструктор Animal с аргументом name
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('woof!');
  }

  moveAndMakeSound() {
    super.move();
    this.bark();
  }
}

const dog = new Dog('Mango', 'shepherd');

dog.move(); // I, Mango, am moving!
dog.bark(); // woof!
dog.moveAndMakeSound(); // I, Mango, am moving! woof!

console.dir(Dog);
console.dir(Animal);

*/


//  Module  5 

//  Задание 1


/*
Прототип объекта и метод Object.create()
Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.

const animal = {
  legs: 4
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта dog. Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4
Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog. При обращении к dog.legs интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.__proto__, то есть, в данном случае, в объекте animal - его прототипе.

То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.

Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит, то обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа. Если интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.

Задание
Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

Тесты
Объявлена переменная parent.
Значение переменной parent это объект.
Вызов parent.hasOwnProperty('surname') возвращает true.
Вызов parent.hasOwnProperty('heritage') возвращает true.
Объявлена переменная child.
Значение переменной child это объект.
Вызов child.hasOwnProperty('name') возвращает true.
Обращение к child.name возвращает 'Jason'.
Вызов child.hasOwnProperty('age') возвращает true.
Обращение к child.age возвращает 27.
Вызов child.hasOwnProperty('surname') возвращает false.
Обращение к child.surname возвращает 'Moore'.
Вызов child.hasOwnProperty('heritage') возвращает false.
Обращение к child.heritage возвращает 'Irish'.
Вызов parent.isPrototypeOf(child) возвращает true.
Используется метод Object.create().

*/


/*
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child =  Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

*/




//-----------------------------------------------------

//  Задание 2
/*
Задача. Цепочка прототипов
Задание
Измени код, построив цепочку прототипов так, чтобы объект ancestor 
был прототипом для parent, а тот в свою очередь был прототипом для child.


*/

/*

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent =  Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child =  Object.create(parent);
child.name = 'Jason';
child.age = 27;


*/




//-----------------------------------------------------

//  Задание 3
/*
Функция-конструктор
Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями, и методами для взаимодействия со свойствами. Всё это нужно сделать динамически, во время выполнения программы. Для этого используют функции-конструкторы, вызывая их при помощи специального оператора new.

function User() {
  // Тело функции
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
Любая функция, кроме стрелочной, может быть использована как конструктор. Чтобы отличить конструктор от обычной функции, их принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

Вызов функции с оператором new приводит к созданию нового объекта и вызову функции в контексте этого объекта. То есть this внутри функции будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

function User(name, email, age) {
  this.name = name;
  this.email = email;
}

const mango = new User('Манго', 'mango@mail.com');
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User('Поли', 'poly@mail.com');
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
Задание
Объяви функцию-конструктор Car которая принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

Тесты
Объявлена функция Car(brand, model, price).
В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.


*/

/*

function Car(brand, model, price) {
    this.brand= brand;
    this.model= model;
    this.price= price; 
}

const avto1 = new Car('Audi', 'Q3', 36000);
console.log(avto1);

const avto2 = new Car('BMW', 'X5', 58900);
console.log(avto2);

const avto3 = new Car('Nissan', 'Murano', 31700);
console.log(avto3);

*/




//-----------------------------------------------------

//  Задание 4
/*
Объект настроек
Функции-конструкторы всегда принимают большое количество входных данных для свойств
 будущего объекта. Поэтому, к ним также можно
 применить паттерн «Объект настроек», передавая один объект с логично именованными
  свойствами, вместо несвязанного набора аргументов.

function User({ name, email }) {
  this.name = name;
  this.email = email;
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
const poly = new User({ name: 'Поли', email: 'poly@mail.com' });
Задание
Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один
 параметр - объект со свойсвами brand, model и price. Деструктуризируй объект
  в сигнатуре (подписи) функции.

Тесты
Объявлена функция Car({ brand, model, price }).
В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится
 объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится
 объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится
 объект { brand: 'Nissan', model: 'Murano', price: 31700 }.


*/
