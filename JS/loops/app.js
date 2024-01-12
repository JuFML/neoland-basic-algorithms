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

const placesToTravel = [
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