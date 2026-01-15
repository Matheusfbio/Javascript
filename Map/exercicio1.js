/**
 * EXERCÍCIO 1 - Sistema de Cache com Expiração
 * 
 * Crie uma classe CacheManager que utilize Map para armazenar dados com tempo de expiração.
 * 
 * Requisitos:
 * 1. Método set(key, value, ttl) - armazena um valor com tempo de vida em milissegundos
 * 2. Método get(key) - retorna o valor se ainda não expirou, caso contrário retorna null
 * 3. Método delete(key) - remove uma entrada do cache
 * 4. Método clear() - limpa todo o cache
 * 5. Método size() - retorna quantidade de itens válidos (não expirados)
 * 6. Método cleanup() - remove todas as entradas expiradas
 * 
 * Dicas:
 * - Use Map para armazenar os dados
 * - Armazene junto com o valor: timestamp de criação e TTL
 * - Valide expiração ao buscar dados
 */

class CacheManager {
  // Implemente aqui
}

// Testes
const cache = new CacheManager();

cache.set('user1', { name: 'Alice' }, 2000); // expira em 2 segundos
cache.set('user2', { name: 'Bob' }, 5000);   // expira em 5 segundos
cache.set('user3', { name: 'Charlie' }, 1000); // expira em 1 segundo

console.log(cache.get('user1')); // { name: 'Alice' }
console.log(cache.size()); // 3

setTimeout(() => {
  console.log(cache.get('user3')); // null (expirado)
  console.log(cache.size()); // 2 (user3 ainda conta até cleanup)
  cache.cleanup();
  console.log(cache.size()); // 2
}, 1500);

setTimeout(() => {
  console.log(cache.get('user1')); // null (expirado)
  console.log(cache.get('user2')); // { name: 'Bob' }
}, 2500);
