console.log('hello world, my brother/sister')

// iniciando consumo da api pokeapi

function convertsPokemonTypes(pokemonTypes) {
   return pokemonTypes.map(
      typeSlot => `<li class="type">${typeSlot.type.name}</li>`
   )
}

function converteParaHtml(pokemon) {
   return `
 <li class="pokemon">
   <span class="number">#${pokemon.id}</span>
   <span class="name">${pokemon.name}</span>

   <div class="detail">
      <ul class="types">
         ${convertsPokemonTypes(pokemon.types).join('')}
      </ul>
      <img
         src="${pokemon.sprites.other.dream_world.front_default}"
         alt="Pokemon ${pokemon.name}"
      />
   </div>

</li>`
}

const idParaIncluirLista = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
   const newHtml = pokemons.map(converteParaHtml).join('')
   idParaIncluirLista.innerHTML = newHtml
})
