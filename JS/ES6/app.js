//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #1: Arrows**
 * ? Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.

 * ? 1.1 Ejecuta esta función sin pasar ningún parametro
 * ? 1.2 Ejecuta esta función pasando un solo parametro
 * ? 1.3 Ejecuta esta función pasando dos parametros
 */
//!--------------------------------------------------------------------------------------------------------

const printSum = (a = 10, b = 5) => {
  const sum = a + b
  console.log(sum);
}

printSum()
printSum(2)
printSum(5, 7)

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Destructuring**
 * ? 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.
 */
//!--------------------------------------------------------------------------------------------------------
const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 }

const { title, gender, year } = game
console.log(title);
console.log(gender);
console.log(year);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Destructuring**
 * ? 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.
 */
//!--------------------------------------------------------------------------------------------------------

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Destructuring**
 * ? 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.
 */
//!--------------------------------------------------------------------------------------------------------

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
};

const { name, race } = animalFunction()
console.log(name);
console.log(race);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #2: Destructuring**
 * ? 2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.
 */
//!--------------------------------------------------------------------------------------------------------

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name: carName, itv } = car
const [firstYear, secondYear, thirdYear] = itv
console.log(carName);
console.log(itv);
console.log(firstYear);
console.log(secondYear);
console.log(thirdYear);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Spread Operator**
 * ? 3.1 Dado el siguiente array, crea una copia usando spread operators.
 */
//!--------------------------------------------------------------------------------------------------------

let pointsList = [32, 54, 21, 64, 75, 43]

const pointListCopy = [...pointsList]

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Spread Operator**
 * ? 3.2 Dado el siguiente objeto, crea una copia usando spread operators. 
 */
//!--------------------------------------------------------------------------------------------------------

let toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy }

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Spread Operator**
 * ? 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
 */
//!--------------------------------------------------------------------------------------------------------

pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
const pointLists = [...pointsList, ...pointsLis2]

console.log(pointLists);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Spread Operator**
 * ? 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
 */
//!--------------------------------------------------------------------------------------------------------

toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toyFinal = { ...toy, ...toyUpdate }

console.log(toyFinal);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #3: Spread Operator**
 * ? 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
 */
//!--------------------------------------------------------------------------------------------------------

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors]
colorsCopy.splice(2, 1)

console.log(colorsCopy);
console.log(colors);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #4: Map**
 * ? 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
 */
//!--------------------------------------------------------------------------------------------------------
let users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const usersName = users.map(user => user.name)

console.log(usersName);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #4: Map**
 * ? 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
 */
//!--------------------------------------------------------------------------------------------------------

users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

function changeName(array) {
  return array.map(user => {
    if (user.name[0] === "A") {
      return { ...user, name: "Anacleto" }
    }
    return user
  })
}

const usersModified = changeName(users)
console.log(usersModified);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #4: Map**
 * ? 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
 */
//!--------------------------------------------------------------------------------------------------------

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const citiesModified = cities.map(city => {
  if (city.isVisited) {
    return { ...city, name: `${city.name} (Visitado)` }
  }
  return city
})

console.log(citiesModified);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
 */
//!--------------------------------------------------------------------------------------------------------

let ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFiltred = ages.filter(age => age > 18)
console.log(agesFiltred);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
 */
//!--------------------------------------------------------------------------------------------------------

ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages.filter(age => age % 2 === 0)
console.log(evenAges);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
 */
//!--------------------------------------------------------------------------------------------------------

let streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersFiltred = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends')
console.log(streamersFiltred);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
 */
//!--------------------------------------------------------------------------------------------------------

streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersFiltred2 = streamers.filter(streamer => streamer.name.toLowerCase().includes("u"))
console.log(streamersFiltred2);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
 */
//!--------------------------------------------------------------------------------------------------------

streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersFiltred3 = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends") && streamer)
const streamersMaped = streamersFiltred3.map(streamer => {
  return streamer.age > 35 ? { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() } : streamer
})
console.log(streamersMaped);

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
 * 
 * 
<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <input type="text" data-function="toFilterStreamers"/>
    </body>
  </html>
 */
//!--------------------------------------------------------------------------------------------------------

streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const inputElement = document.querySelector('[data-function="toFilterStreamers"]')
inputElement.addEventListener("input", (e) => {
  filterList(e, streamers)
})


function filterList(e, array) {
  const inputValue = e.target.value
  const streamersFiltredByInput = array.filter(stream => stream.name.toLowerCase().includes(inputValue.toLowerCase()))
  console.log(streamersFiltredByInput);
}

//!--------------------------------------------------------------------------------------------------------
/**
 * ? **Iteración #5: Filter**
 * ? 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
 * 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <input type="text" data-function="toFilterStreamers"/>
    <button data-function="toShowFilterStreamers">Filter</button>
  </body>
</html>
 */
//!--------------------------------------------------------------------------------------------------------

streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const btnFilter = document.querySelector('[data-function="toShowFilterStreamers"]')
btnFilter.addEventListener("click", () => {
  filterList2(streamers)
  resetInput()
})

function filterList2(array) {
  const inputValue = document.querySelector('[data-function="toFilterStreamers"]').value
  const streamersFiltredByInput = array.filter(stream => stream.name.toLowerCase().includes(inputValue.toLowerCase()))
  console.log(streamersFiltredByInput);
}

function resetInput() {
  document.querySelector('[data-function="toFilterStreamers"]').value = null
}


