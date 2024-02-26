// ?19.02.2024 13:30
// TODO task 1
// You will be given an array which will have three values(tail, body, head).
// It is your job to re - arrange the array so that the animal is the right way round(head, body, tail).
// function fixTheMeerkat(arr) {
//   return arr.reverse();
// }

// !Метод изменяем масив, а не создает новый.

// TODO Task by Smile)
// *Задача: Разбиение предложения на слова и создание нового массива с их длинами.
// *Условие: Взять предложение, разбить его на слова с помощью split(),
// * а затем создать новый массив, содержащий длины каждого слова с использованием map().
// * Пример предложения: const sentence = "JavaScript is a powerful programming language";

// const sentences = "JavaScript is a powerful programming language";
// const newA = sentences.split(" ");
// const newS = newA.map((sentences) => sentences.length);

// console.log(newS);

// *Задача: Преобразование строк с числами в массив чисел.
// *Условие: Взять массив строк с числами, преобразовать каждую строку в число с помощью map().
// *Пример массива строк: const stringNumbers = ['5', '10', '15', '20', '25'];

// const stringNumbers = ["5", "10", "15", "20", "25"];
// console.log(stringNumbers.map((stringNumber) => Number.parseInt(stringNumber)));

// *Задача: Фильтрация слов в массиве по их длине.
// *Условие: Взять массив слов, оставить только те, которые имеют длину больше определенного значения, используя filter().
// *Пример массива строк: const wordsArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// * Решение с использованием filter():
// const wordsArray = ["apple", "banana", "orange", "grape", "kiwi"];
// function filterArray(arrs, value) {
//   return arrs.filter((arr) => arr.length > value);
// }

// console.log(filterArray(wordsArray, 4));

// *Задача: Конвертация строки в обратном порядке.
// *Условие: Взять строку и создать новую строку, содержащую символы в обратном порядке.
// *const originalString = "Hello, World!";

// const originalString = "Hello, World!";

// console.log(originalString.split("").reverse().join(" "));

// const keys = ["a", "b", "c"];
// const values = [10, 20, 30];

// const newArr = {};

// keys.forEach((key, i) => {
//   newArr[key] = values[i];
// });

// console.log(newArr);

// return arrayToSearch.findIndex((x) => x.every((y, i) => y === query[i]));

// arrayToSearch.every((y, i) => y === query[i]).findIndex();

// *Задача:*Подсчет количества гласных в строках массива.
//         *Условие: Подсчитать общее количество гласных(a, e, i, o, u) во всех строках массива.
//         *Пример массива строк: const wordsArray = ['apple', 'banana', 'orange', 'grape'];

//         *В этой задаче используется два уровня reduce(): внешний для обработки каждого слова в массиве,
//         *и внутренний для подсчета гласных в каждом слове.

// const letterInWord = (word) => {
//
// };

// const letterWord = wordsArray
//   .join("")
//   .split("")
//   .reduce((acc, letter) => {
//     if (letters.includes(letter)) {
//       return acc + 1;
//     } else {
//       return acc;
//     }
//   }, 0);

// console.log(letterWord);
const wordsArray = ["apple", "banana", "orange", "grape"];
const letters = ["a", "e", "i", "o", "u"];
const letterWord = (wordsArray) => {
  return wordsArray
    .join("")
    .split("")
    .reduce((acc, letter) => {
      if (letters.includes(letter)) {
        return (acc += 1);
      } else {
        return acc;
      }
    }, 0);
};

console.log(letterWord(wordsArray));

// const cart = [
//   { lable: "apple", price: 100, quantity: 2 },
//   { lable: "mango", price: 150, quantity: 8 },
//   { lable: "banana", price: 300, quantity: 7 },
// ];
// const res = cart.reduce((acc, item) => {
//   if (item.lable === "mango") {
//     acc += item.price * item.quantity;
//   }
//   return acc;
// }, 0);

// console.log(res);
