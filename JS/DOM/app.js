//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #1: Interacción con el DOM**
 * ? Dado el siguiente HTML:

 * ? 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**
 * ? 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
 * ? 1.3 Usa querySelector para mostrar por consola todos los p
 * ? 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
 * ? 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
 * ? 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
 */
//!--------------------------------------------------------------------------------------------------------

const btnShowMe = document.querySelector(".showme")
console.log(btnShowMe);

const h1 = document.querySelector("#pillado")
console.log(h1);

const ps = document.querySelectorAll("p")
ps.forEach(p => console.log(p));

const elPokemonClass = document.querySelectorAll(".pokemon")
elPokemonClass.forEach(el => console.log(el));

const elTestMe = document.querySelectorAll('[data-function="testMe"]')
elTestMe.forEach((el, index) => index == 2 && console.log(el));