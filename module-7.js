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
// *Метод createElement() доступний для об'єкта document, а не для DOM-елементів.
// *Ви не можете викликати createElement() на вже створених DOM - елементах

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

// const makeColor = (options) => {
//   return options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//   });
// };

// ! innerHTML
// * влсативість,яка зберігає вміст елемнта включно з тегами у вигляді РЯДКА.
// * Повертає валідний код
// * const articleRef = document.querySelector("article");
// * console.log(articleRef.innerHTML);

// * також можна змінити код задавши рядок з html тегами
// * articleRef.innerHTML = 'New and <span class="accent">improved</span> title';

// * якщо задати пустий рядок то очистить вміст елемента з текстовими і теговими вузлами
// * articleRef.innerHTML = '';

// * вмкористовувати властивість тільки у разі уоли елемент ПОРОЖНІЙ або ЗАМІНИТИ вміст,
// * так як перезаписує заново і тоді додає((

// ! insertAjacentHTML
// * вирішує проблему, але тільки ДОДАЄ рядок та має синтаксис
// * element.insertAdjacentHTML(position, string)
// * string - м.б. як просто рядок з тегами, так і назва змінної
// * element.insertAdjacentHTML('beforebegin', marup)
// * element.insertAdjacentHTML('beforeend' , '<h2>Popular technologies</h2>')

// !addEventListener
// * як правильно писати прослуховування подій див.мій.конспект)
// TODO Репета Модуль 7.14 15мин - додає і видаляє прослуховувач подій

// *const formData = new FormData (event.currentTarget)
// * збраємо всі дані форми, де event.currentTarget - посилання на елемент, тобто весь його тег

// *formData.forEach((value, name) => {
// * console.log(value);
// *console.log(name);
// * })
// * перебираємо всі ВКАЗАНІ в параметрах елементи і виводимо іх

// TODO Репета Модуль 7.14 54 мин - пояснення кнопки та інпута.
// TODO button.disable & event.currentTarget.checked
//  1.16 год -модалка
