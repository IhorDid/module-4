// ! textContent -
// *властивість яка повертає текстовий
//    *контент усередині відкрриваючого тега і закрваючого
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
// Властивість, якій зберігається обєкт із методами дл роботи з СSS-классами.

const navEl = document.querySelector(".menu");
const menuNavEl = document.querySelector(".menu-item");
console.log(navEl);
console.log(menuNavEl.parentNode);
console.log(navEl.children);

navEl.classList.add("is-active");
