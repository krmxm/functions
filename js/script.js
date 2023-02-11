"use strict";

// Функция — это самостоятельный блок кода, который можно, один раз объявив, вызывать столько раз,
// сколько нужно. Функция может, хотя это и необязательно, принимать параметры. Функции возвращают
// единственное значение.
// Функции в JavaScript являются объектами, если точнее, то они являются объектами типа Function.

// Замыкание функции - это сама функиция со всеми внешними переменными, которые ей доступны.

// return - возвращает значаение функции во внешний мир


// Фунцкии

// Function declaration - ссоздаётся до начала выполнения скрипта, можно вызвать перед выполнением.

// function foo() {
//     код
// }

// Function expression - создаётся только тогда, когда доходит поток кода, можно вызывать только
// после объявления

// let foo = function() {
//     код
// }

// Стрелочные функции не имеет своего контекста (this)

// () = >

// const calc = (a, b) => { return a + b };  (можно a + b)

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };