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

/* 
**Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Calcular la suma**

 * ? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
 * ? Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
 * 
 * ? Puedes usar este array para probar tu función:

 * ? const numbers = [1, 2, 3, 5, 45, 37, 58];

 * ? function sumAll(param) {
 * ?   insert code
 * ? }
 */
//!--------------------------------------------------------------------------------------------------------
let numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  return param.reduce((acc, number) => {
    return acc += number
  }, 0)
}

console.log(sumAll(numbers))

/* 
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #4: Calcular el promedio**

 * ? Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
 * ? const numbers = [12, 21, 38, 5, 45, 37, 6];
 * ? function average(param) {
 * ?   insert code
 * ? } 
 */
//!--------------------------------------------------------------------------------------------------------
numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  return param.reduce((acc, number) => {
    return acc += number
  }, 0) / param.length
}

console.log(average(numbers))

/* 
**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Calcular promedio de strings**

 * ? Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
 * ? const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
 * ? function averageWord(param) {
 * ?   insert code
 * ? }
 */
//!--------------------------------------------------------------------------------------------------------
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  return param.reduce((acc, el) => {
    if (typeof el == "number") {
      acc += el
    } else {
      acc += el.length
    }
    return acc
  }, 0)
}

console.log(averageWord(mixedElements))

/* 
**Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #6: Valores únicos**

 * ? Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
 * ? const duplicates = [
 * ?   "sushi",
 * ?   "pizza",
 * ?   "burger",
 * ?   "potatoe",
 * ?   "pasta",
 * ?   "ice-cream",
 * ?   "pizza",
 * ?   "chicken",
 * ?   "onion rings",
 * ?   "pasta",
 * ?   "soda",
 * ? ];
 * ? function removeDuplicates(param) {
 * ?   insert code
 * ? }
 */
//!--------------------------------------------------------------------------------------------------------
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  if (new Set(param).size < param.length) {
    return Array.from(new Set(param))
  }
  return param
}

console.log(removeDuplicates(duplicates))

/* 
**Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param) {
  insert code
}
*/

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #7: Buscador de nombres**

 * ? Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
 * ? const nameFinder = [
 * ?   "Peter",
 * ?   "Steve",
 * ?   "Tony",
 * ?   "Natasha",
 * ?   "Clint",
 * ?   "Logan",
 * ?   "Xabier",
 * ?   "Bruce",
 * ?   "Peggy",
 * ?   "Jessica",
 * ?   "Marc",
 * ? ];
 * 
 * ? function finderName(param) {
 * ?  insert code
 * ?}
 */
//!--------------------------------------------------------------------------------------------------------
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(arr, value) {
  if (arr.find(el => value === el)) {
    console.log(true, arr.indexOf(value))
    return
  }
  console.log(false)
}
finderName(nameFinder, "Peter")

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteration #8: Contador de repeticiones**

 * ? Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
 * ? const counterWords = [
* ? code",
* ? repeat",
* ? eat",
* ? sleep",
* ? code",
* ? enjoy",
* ? sleep",
* ? code",
* ? enjoy",
* ? upgrade",
* ? code",
* ? ];
 * 
 * ? function repeatCounter(param) {
 * ?  insert code
 * ? }
 */
//!--------------------------------------------------------------------------------------------------------
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(param) {
  const newObj = {}
  param.forEach(el => {
    if (newObj[el]) {
      newObj[el] += 1
      return
    }
    newObj[el] = 1
  });
  console.log(newObj);
}
repeatCounter(counterWords)