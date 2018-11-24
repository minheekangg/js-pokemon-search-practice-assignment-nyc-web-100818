document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('pokemon-search-form');

  const pokemonContainer =
  document.querySelector('#pokemon-container center')
  // const pokemonNames = POKEMON.map((p) => p["name"])
  let currentInput = ""
  input.addEventListener('keydown', function(e){
    if (e.key === 'Backspace'){
       currentInput = currentInput.slice(0, -1)
    } else {
      currentInput += e.key
    }
  const filteredPokemon = POKEMON.filter((each) => each["name"].startsWith(currentInput))
  pokemonContainer.innerHTML = createPokemonLi(filteredPokemon)
}) // end of keydown eventListener


  pokemonContainer.addEventListener('click', function(e){
    // console.log(e.target.src)
    POKEMON.forEach((each) => {
      // console.log(each["sprites"]["front"] )
      if (each["sprites"]["front"] === e.target.src){
        e.target.src = each["sprites"]["back"]
      } else if (each["sprites"]["back"] === e.target.src) {
        e.target.src = each["sprites"]["front"]
      } // end of if
    }) // end of for each
  }) //end of pokemonContainer eventListener


})// end of DOMContentLoaded

function createPokemonLi(pokemonArray) {
  const pokemonStringArray = pokemonArray.map( function(e) {
    return `<h1> ${e["name"]} </h1> <div>${e["types"]}</div> <img src = ${e["sprites"]["front"]}>`
  })
  return pokemonStringArray.join('')
}
