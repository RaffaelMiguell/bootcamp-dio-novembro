console.log('hello world, my brother/sister')

// iniciando consumo da api pokeapi

function converteParaHtml(pokemon) {
   return `
   <li class="pokemon">
  <span class="number">${pokemon.id}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
     <ul class="types">
        <li class="type">Grass</li>
        <li class="type">Poison</li>
     </ul>
     <img
        src="./assets/imgs/bulbasaur.png"
        alt="Pokemon ${pokemon.name}"
     />
  </div>
</li>`
}

const idParaIncluirLista = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
   idParaIncluirLista.innerHTML = pokemons.map(converteParaHtml).join('')
})
