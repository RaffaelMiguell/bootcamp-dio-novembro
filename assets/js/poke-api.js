// linkando API
const pokeApi = {}

pokeApi.getPokemonDetail = pokemon => {
   return fetch(pokemon.url).then(response => response.json())
}

// criando método para o objto pokeApi
pokeApi.getPokemons = (offset = 0, limit = 350) => {
   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

   return (
      fetch(url)
         /* convertendo recurso 'ReadableStream' para .json */
         .then(response => response.json())
         /* após receber response, filtrar "results"*/
         .then(jsonBody => jsonBody.results)
         .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
         //  mapeando para uma lista de pokemons
         .then(detailsRequests => Promise.all(detailsRequests))
         //  promisse de todas as requisições da lista
         .then(pokemonDetails => {
            console.log(pokemonDetails)
            return pokemonDetails
            // devolve a lista de pokemons
         })
      //  .catch(error => console.error(error))
      //  .finally(() => console.log('Requisição feita com sucesso.'))
   )
}

// console.log(pokeApi)
