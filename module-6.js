// !Prototype

// Прототип создается с права налево
const objC = {
  z: 5,
};

console.log(objC);

const objB = Object.create(objC); // objC прототип objB создает пустой обект,
//  поэтому сразу после него можна записать свойство

console.log(objB); // пустой обэкт
console.log(objB.z);
objB.y = 2;
objB.z = 10;
console.log(objB.z); // создает новое свойство, но не перезаписывает в прототипах
console.log(objB); // будет новое значение { y: 2 }

console.log("objB", objB.z); // так же можна достучатся до свойсва, если его нет на текуще обэкте,
// то есть на прототипе.

console.log(objB.hasOwnProperty("z")); // false ищет СОБСВЕННОЕ свойсво

console.log(objB.sdfsdf); // получим undefined не потому что нет такого свойства, а его нет во всех цепочки

// TODO hasOwnProperty показує чи властивість власна (тру), інакше (фолс)

// ! К   Л   А   С

// class Car {
//   constructor(value) {
// функции вызывается в контексте пустого обекта myCar
//     this.a = value;
//   }
// }
// 1. Создается пустой обект
// const myCar = new Car(5); // Обект экземпляра класса Car;
// console.log(myCar); // Car {}

// ?Аргументи, які передаються при виклику new Car(), стають значеннями параметрів для методу constructor.

// Аргументами можуть бути обэкт параметрів

// const myCar = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 35000,
// });

// Тогда value - це параметр який є змінною обєкта {
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000
// }

// class Car {
//   constructor(value = ({ brand, model, price } = {})) {
// функции вызывается в контексте пустого обекта myCar
//     this.brand = value.brand;
//     this.model = value.model;
//     this.price = value.price;

// пример метода функции, который записан в конструкторе(как раньше),
// будут везде копии этого метода на всех екземплярах
// this.changePrice = function (newPrice) {
//   this.price = newPrice;
// }
//
// }
// }
// !Вызывает отдельно так сказал Репета, хотя это не по конспекту)
// Car.prototype.sayHi = function () {
//   console.log("this", this);
//   console.log("Hello :)");
// };
// console.log(Car.prototype);

// !можна зробити деструктиризацію
class Car {
  constructor({ brand, model, price }) {
    // функции вызывается в контексте пустого обекта myCar
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const myCar = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});

console.log(myCar);
console.log("myCar:", myCar);
