/*
**Iteración #1: Interacción con el DOM**

Dado el siguiente HTML:

1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #1: Interacción con el DOM**
 * ? 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
 */
//!--------------------------------------------------------------------------------------------------------
const body = document.querySelector("body")

let countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let lis = ""
countries.forEach(item => lis += `<li>${item}</li>`)
const ul = `<ul>${lis}</ul>`
body.innerHTML += ul

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
 */
//!--------------------------------------------------------------------------------------------------------
const elToRemove = document.querySelector(".fn-remove-me")
elToRemove.remove()

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
 */
//!--------------------------------------------------------------------------------------------------------
const divToInsertList = document.querySelector('[data-function="printHere"]')
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let lis2 = ""
cars.forEach(item => lis2 += `<li>${item}</li>`)
const ul2 = `<ul>${lis2}</ul>`
divToInsertList.innerHTML += ul2

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
 */
//!--------------------------------------------------------------------------------------------------------
countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

let divWithH4 = ""
countries.forEach(({ title, imgUrl }) => {
  divWithH4 += `
    <div class="img-container">
      <h4>${title}</h4>
      <img src=${imgUrl} alt="${title}">
    </div>
  `
})
body.innerHTML += divWithH4

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
 */
//!--------------------------------------------------------------------------------------------------------
const btn = "<button>Remove last Element</button>"
body.innerHTML += btn

const btnDom = document.querySelector("button")
btnDom.addEventListener("click", () => {
  const divs = document.querySelectorAll(".img-container")
  divs.forEach((div, index) => {
    if (index === divs.length - 1) {
      div.remove()
    }
  })
})

//!--------------------------------------------------------------------------------------------------------
/**
 * ? 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
 */
//!--------------------------------------------------------------------------------------------------------

countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

let divWithH = ""
countries.forEach(({ title, imgUrl }) => {
  divWithH += `
    <div class="img-container">
      <h4>${title}</h4>
      <img src=${imgUrl} alt="${title}">
      <button>Remove Item</button>
    </div>
  `
})
body.innerHTML += divWithH

const btns = document.querySelectorAll(".img-container button")
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".img-container").remove()
  })
})