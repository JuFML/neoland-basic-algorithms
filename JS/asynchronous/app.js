/*
**Iteración #1: Fetch**

```jsx
1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
console.log(). Para ello, es necesario que crees un .html y un .js.

1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
fetch() para hacer una consulta a la api cuando se haga click en el botón,
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>

1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET.

1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
de los p que hayas insertado y que si el usuario hace click en este botón
eliminemos el parrafo asociado.
```
*/
//!--------------------------------------------------------------------------------------------------------
//? 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.
//!--------------------------------------------------------------------------------------------------------

fetch('https://api.agify.io?name=michael')
  .then(resp => resp.json())
  .then(data => console.log(data))

//!--------------------------------------------------------------------------------------------------------
//? 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input. const baseUrl = 'https://api.nationalize.io';
//!--------------------------------------------------------------------------------------------------------

// const getData = () => {
//   const input = document.querySelector("input[type='text']")
//   const baseUrl = 'https://api.nationalize.io'
//   fetch(`${baseUrl}?name=${input.value}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
// }

// const btn = document.querySelector("button")
// btn.addEventListener("click", getData)

//!--------------------------------------------------------------------------------------------------------
//? 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc. EJ: El nombre Pepe tiene un 22 porciento de ser de ET.
//!--------------------------------------------------------------------------------------------------------
// const getData = () => {
//   console.log("oi")
//   const input = document.querySelector("input[type='text']")
//   console.log(input.value);
//   const baseUrl = 'https://api.nationalize.io'
//   fetch(`${baseUrl}?name=${input.value}`)
//     .then(resp => resp.json())
//     .then(data => {
//       console.log(data);
//       createElement(data)
//     })
// }
// const init = () => {
//   const btn = document.querySelector("button")
//   btn.addEventListener("click", getData)
// }
// init()



// const createElement = ({ name, country }) => {
//   let template = ""
//   country.forEach(data => {
//     template += `<p>El nombre ${name} tiene un ${data.probability} porciento de ser de ${data.country_id}</p>`
//   });
//   printElement(template)
// }

// const printElement = (template) => {
//   document.querySelectorAll("p").forEach(p => p.remove())
//   document.querySelector("body").innerHTML += template
//   init()
// }

//!--------------------------------------------------------------------------------------------------------
//? 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.
//!--------------------------------------------------------------------------------------------------------
const getData = () => {
  console.log("oi")
  const input = document.querySelector("input[type='text']")
  console.log(input.value);
  const baseUrl = 'https://api.nationalize.io'
  fetch(`${baseUrl}?name=${input.value}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      createElement(data)
    })
}

const deleteCurrentParagraph = (e) => {
  e.target.parentNode.remove()
}

const init = () => {
  const btn = document.querySelector("button")
  btn.addEventListener("click", getData)

  const btnX = document.querySelectorAll(".btn-x")
  btnX.forEach(btn => btn.addEventListener("click", (e) => deleteCurrentParagraph(e)))

}
init()

const createElement = ({ name, country }) => {
  let template = ""
  country.forEach(data => {
    template += `<div><p>El nombre ${name} tiene un ${data.probability} porciento de ser de ${data.country_id}</p><button class="btn-x">X</button></div>`
  });
  printElement(template)
}

const printElement = (template) => {
  document.querySelectorAll("p").forEach(p => p.remove())
  document.querySelector("body").innerHTML += template
  init()
}
/*
**Iteración #2: async-await**

```jsx
2.1 Gestiona la siguiente promesa para esperar a ejecutar el console usando
async-await.
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();

2.2 Convierte la siguiente función con un fetch utilizando async-await.
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();

```
*/

//!--------------------------------------------------------------------------------------------------------
//? 2.1 Gestiona la siguiente promesa para esperar a ejecutar el console usando async-await.
//!--------------------------------------------------------------------------------------------------------
const runTimeOut = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  try {
    await promise;
    console.log('Time out!');
  } catch (error) {
    console.error('Error:', error);
  }
};

runTimeOut();

//!--------------------------------------------------------------------------------------------------------
//? 2.2 Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
//!--------------------------------------------------------------------------------------------------------
async function getCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await res.json()
  console.log(characters)
}

getCharacters();