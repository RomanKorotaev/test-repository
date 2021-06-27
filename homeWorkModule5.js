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