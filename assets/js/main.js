console.log('hello world, my brother/sister')

// iniciando consumo da api pokeapi

// utilização do Fecht API - montando estrutura

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
   .then(function (response) {
    response.json() /* convertendo recurso 'ReadableStream' para .json */
    console.log(response)
   })
   .catch(function (error) {
      console.error(error)
   })
   .finally(function () {
      console.log('Requisição feita com sucesso.')
   })
   


  //  mesma funcionalidade do try catch
    
  //  .then{}
  //  .catch{}
  //  .finaly{}