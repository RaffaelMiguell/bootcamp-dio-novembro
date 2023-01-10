const idParaIncluirLista = document.getElementById('pokemonList')
const btnLoad = document.getElementById('btnLoad')
const limit = 8
let offset = 0

// iniciando consumo da api pokeapi

function loadPokemonsItens(offset, limit) {
   pokeApi.getPokemons(offset, limit).then((pokemon = []) => {
      const newHtml = pokemon
         .map(
            pokemon =>
               `
               <li class="pokemon ${pokemon.type}">
                  <span class="number">#${pokemon.numberId}</span>
                  <span class="name ${pokemon.type}">${pokemon.name}</span>

                  <div class="detail">
                     <ul class="types">
                     ${pokemon.types
                        .map(type => `<li class="type ${type}">${type}</li>`)
                        .join('')}
                     </ul>
                     <img
                        src="${pokemon.photo}"
                        alt="Pokemon ${pokemon.name}"
                     />
                  </div>
               </li>`
         )
         .join('')
      idParaIncluirLista.innerHTML += newHtml
   })
}

loadPokemonsItens(offset, limit)

btnLoad.addEventListener('click', () => {
   offset += limit
   loadPokemonsItens(offset, limit)
   console.log('hello world, my brother/sister')
})
