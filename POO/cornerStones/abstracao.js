class API {
  #token = 'secreto';

  chamar(endpoint) {
    console.log(`Chamando ${endpoint} com token interno`);
  }
}

const api = new API();
api.chamar('/users'); // Chamando /users com token interno
