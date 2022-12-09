console.log('hello world, my brother/sister')

// iniciando consumo da api pokeapi

function converteParaHtml(pokemon) {
   // <li class="pokemon ${pokemon.type}">  inserir esse trecho na linha 9
   return `
 <li class="pokemon ${pokemon.type}">
   <span class="number">#${pokemon.numberId}</span>
   <span class="name">${pokemon.name}</span>

   <div class="detail">
      <ul class="types">
        ${pokemon.types.map(type => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
      </ul>
      <img
         src="${pokemon.photo}"
         alt="Pokemon ${pokemon.photo}"
      />
   </div>

</li>`
}

const idParaIncluirLista = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemon = []) => {
   const newHtml = pokemon.map(converteParaHtml).join('')
   idParaIncluirLista.innerHTML = newHtml
})