/* 
**Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #1: Buscar el máximo**
 * ? Completa la función que tomando dos números como argumento devuelva el más alto.
 */
//!--------------------------------------------------------------------------------------------------------
function sum(numberOne, numberTwo) {
  console.log(Math.max(numberOne, numberTwo))
}

sum(7, 5)

/* 
**Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Buscar la palabra más larga**
 * ? Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
 * 
 * ? Puedes usar este array para probar tu función:
 * ? const avengers = [
 * ?   "Hulk",
 * ?   "Thor",
 * ?   "IronMan",
 * ?   "Captain A.",
 * ?   "Spiderman",
 * ?   "Captain M.",
 * ? ];
 * ? function findLongestWord(param) {
 * ?   insert code
 * ? }
 */
//!--------------------------------------------------------------------------------------------------------
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  return param.reduce((acc, el) => {
    if (el.length > acc.length) {
      acc = el
    }
    return acc
  }, "")
}

console.log(findLongestWord(avengers))