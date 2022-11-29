// linkando API

const pokeApi = {}

// criando método para o objto pokeApi
pokeApi.getPokemons = (offset = 0, limit = 10) => {
   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

   return (
      fetch(url)
         /* convertendo recurso 'ReadableStream' para .json */
         .then(response => response.json())
         /* após receber response, filtrar "results"*/
         .then(jsonBody => {
            return jsonBody.results
         })
         .catch(error => console.error(error))
         .finally(() => console.log('Requisição feita com sucesso.'))
   )
}

console.log(pokeApi)
