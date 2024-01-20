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

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Modificando el DOM**
 * ? Dado el siguiente HTML:

 * ? 2.1 Inserta dinamicamente en un html un div vacio con javascript.
 * ? 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
 * ? 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
 * ? 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
 * ? 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
 * ? 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
 * ? 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
 * ? 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
 * ? 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
 */
//!--------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.1 Inserta dinamicamente en un html un div vacio con javascript.
 */
//!--------------------------------------------------------------------------------------------------------
let body = document.querySelector("body")
const divEl = `<div></div>`
body.innerHTML += divEl

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
 */
//!--------------------------------------------------------------------------------------------------------
const divWithP = `<div><p></p></div>`
body.innerHTML += divWithP

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
 */
//!--------------------------------------------------------------------------------------------------------
let ps2 = ""
for (let i = 0; i < 6; i++) {
  ps2 += `<p></p>`
}
body.innerHTML += ps2

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
 */
//!--------------------------------------------------------------------------------------------------------
const pDinamico = `<p>Soy dinámico!</p>`
body.innerHTML += pDinamico

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
 */
//!--------------------------------------------------------------------------------------------------------
const h2Wubba = `<h2 class="fn-insert-here">Wubba Lubba dub dub</h2>`
body.innerHTML += h2Wubba

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
 */
//!--------------------------------------------------------------------------------------------------------
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let lis = ""
apps.forEach(item => lis += `<li>${item}</li>`)
const ul = `<ul>${lis}</ul>`
body.innerHTML += ul

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
 */
//!--------------------------------------------------------------------------------------------------------
const elToRemove = document.querySelectorAll(".fn-remove-me")
elToRemove.forEach(el => el.remove())

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
 */
//!--------------------------------------------------------------------------------------------------------
const divs = document.querySelectorAll("div")
divs.forEach((div, index) => index == 0 && div.insertAdjacentHTML('afterend', '<p>Voy en medio!</p>'))

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
 */
//!--------------------------------------------------------------------------------------------------------
const divsInsetHere = document.querySelectorAll("div.fn-insert-here")
divsInsetHere.forEach((div, index) => index == 0 && div.insertAdjacentHTML('afterend', '<p>Voy dentro!</p>'))