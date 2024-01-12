/*
**Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .**_includes_** de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #1: Usa includes**
 * ? Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .**_includes_** de javascript.
 */
//!--------------------------------------------------------------------------------------------------------

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

products.forEach(product => {
  product.includes("Camiseta") && console.log(product);
})

/*
**Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad **_isApproved_** a true o false en consecuencia. Una vez lo tengas compruébalo con un **_console.log_**.

Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Condicionales avanzados**
 * ? Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad **_isApproved_** a true o false en consecuencia. Una vez lo tengas compruébalo con un **_console.log_**.
 */
//!--------------------------------------------------------------------------------------------------------

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach(alumn => {
  const { T1, T2, T3 } = alumn
  const wasApprovedInAtLeastTwoQuarters = !T1 && T2 && T3 || T1 && !T2 && T3 || T1 && T2 && !T3 || T1 && T2 && T3

  wasApprovedInAtLeastTwoQuarters ? alumn.isApproved = true : alumn.isApproved = false
})

console.log(alumns);

/*
**Iteración #3: Probando For...of**

Usa un bucle forof para recorrer todos los destinos del array. Imprime en un **_console.log_** sus valores.

Puedes usar este array:

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Probando For...of**
 * ? Usa un bucle forof para recorrer todos los destinos del array. Imprime en un **_console.log_** sus valores.
 */
//!--------------------------------------------------------------------------------------------------------

let placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const place of placesToTravel) {
  console.log(place);
}

/*
**Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #4: Probando For...in**
 * ? Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
 */
//!--------------------------------------------------------------------------------------------------------

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const prop in alien) {
  console.log(`${prop}: ${alien[prop]}`);
}

/*
**Iteración #5: Probando For**

Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un **_console log_** el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Probando For**
 * ? Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un **_console log_** el array. Puedes usar este array:
 */
//!--------------------------------------------------------------------------------------------------------

placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
const placesToTravelEdited = []

for (let i = 0; i < placesToTravel.length; i++) {
  const place = placesToTravel[i]
  if (place.id !== 11 && place.id !== 40) {
    placesToTravelEdited.push(place)
  }
}

console.log(placesToTravelEdited);

/*
**Iteración #6: Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función **_.includes()_** para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #6: Mixed For...of e includes**
 * ? Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función **_.includes()_** para comprobarlo.Puedes usar este array:
 */
//!--------------------------------------------------------------------------------------------------------

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const toysFiltred = []

for (const toy of toys) {
  if (!toy.name.includes("gato")) toysFiltred.push(toy)
}

console.log(toysFiltred);