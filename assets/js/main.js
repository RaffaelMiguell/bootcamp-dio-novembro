console.log('hello world, my brother/sister')

// iniciando consumo da api pokeapi

// utilização do Fecht API - montando estrutura

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function itemShowHtml(pokemon) {
   return `
   <li class="pokemon">
  <span class="number">#001</span>
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

const pokemonList = document.getElementById('pokemonList')

fetch(url)
   .then(response =>
      response.json()
   ) /* convertendo recurso 'ReadableStream' para .json */
   .then(jsonBody => {
      // debugger
      return jsonBody.results
   }) /* após receber response, filtrar "results"*/
   .then(pokemons => {
      // debugger
      for (let i = 0; i < pokemons.length; i++) {
         const pokemon = pokemons[i]

         pokemonList.innerHTML += itemShowHtml(pokemon)
      }
   }) /* criando list para consumo no html */
   .catch(error => console.error(error))
   .finally(() => console.log('Requisição feita com sucesso.'))

//  mesma funcionalidade do try catch

//  .then{} é possível encadear mais vezes
//  .catch{}
//  .finaly{}
