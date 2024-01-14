
const getData = async () => {
  const pokemonsData = []
  for (let i = 1; i < 31; i++) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    const pokemonJson = await pokemon.json()
    pokemonsData.push(pokemonJson)
  }
  mapPokemonsData(pokemonsData)
}

const mapPokemonsData = (pokemonsInfo) => {
  const pokemonsMaped = pokemonsInfo.map(pokemonMaped => (
    {
      name: pokemonMaped.name,
      image: pokemonMaped.sprites.other["official-artwork"].front_default
    }
  ))
  console.log(pokemonsMaped);
  createPokemonComponent(pokemonsMaped)
}

const createPokemonComponent = (pokemonInfos) => {
  pokemonInfos.forEach(({ name, image }) => {
    const pokemonList = `<figure class="pokemon">
    <img src=${image} alt=${name}/>
    <h3>${name}</h3>
  </figure>`
    renderPokemonGrid(pokemonList)
  })
}

const renderPokemonGrid = (pokemonComp) => {
  document.querySelector("#app").innerHTML += pokemonComp
}
getData()