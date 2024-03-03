// ! textContent -
// *властивість яка повертає текстовий
//  *контент усередині відкрриваючого тега і закрваючого
//TODO     для input буде value, буде повертатися його значення після вводу щось
// TODO в input

// !getAttribure('імя') -
//  *старий запис, який повертає значення  вказаного атирибуту
// !set...
// !has...
// !remove...
// *М Е Т О Д И Работи с атрибутами

// !dataset
// * Властивість
// *Обєкт всіх дата атрибутів
//? Приклад доступу до data-

//? const action = document.querySelectorAll(".js-action button");
// ? console.log(action[0].dataset.action);
// * виведе значення ключа action

//! classList
// *Властивість, якій зберігається обєкт із методами дл роботи з СSS-классами.
// !classList.contains(className)
//    * перевіряє наявність класу
// classList.add("selector");
// classList.remove("selector");
// classList.toggle("selector");
// classList.replace();

// const navEl = document.querySelector(".menu");
// const menuNavEl = document.querySelector(".menu-item");
// console.log(navEl);
// console.log(menuNavEl.parentNode);
// console.log(navEl.children);
// console.log(navEl.classList.contains("menu"));

// navEl.classList.add("is-active");

// ! createElement
// *document.createElement('h1');
// *Створюємо елемент в документі;

// !document.querySelectorAll("li:first-child, li:last-child")
// * можна записывать несколько селекторов через кому?

// !append --- appenChild(el)
// element.append(el1, el2,) порядок важливий
//   * додає елемет el1 ПІСЛЯ ДОЧІРНІХ елементів element

// !prepend
//       * додає елемент el1 ПЕРЕД ДОЧІРНІХ елементів element

// !after ! before
//       *   ПІСЛЯ  Елемента    ПЕРЕД ЕЛементом

const objectsArray = [
  { label: "red", color: "#FF0000" },
  { label: "green", color: "#00FF00" },
  { label: "blue", color: "#0000FF" },
  { label: "yellow", color: "#FFFF00" },
  { label: "orange", color: "#FFA500" },
  { label: "purple", color: "#800080" },
];

const option = objectsArray[0];

const buttonEl = document.createElement("button");
buttonEl.type = "button";
buttonEl.textContent = option.label;
buttonEl.style.backgroundColor = option.color;
console.log(buttonEl);

const makeColor = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    return buttonEl;
  });
};
