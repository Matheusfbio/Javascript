/**
 * EXERCÍCIO 2 - Sistema de Relacionamento Bidirecional
 * 
 * Crie uma classe RelationshipManager que gerencia relacionamentos bidirecionais entre entidades.
 * Por exemplo: se A segue B, você pode consultar tanto "quem A segue" quanto "quem segue B".
 * 
 * Requisitos:
 * 1. Método addRelation(from, to) - adiciona uma relação de 'from' para 'to'
 * 2. Método removeRelation(from, to) - remove a relação específica
 * 3. Método getFollowing(user) - retorna Set com todos que o usuário segue
 * 4. Método getFollowers(user) - retorna Set com todos que seguem o usuário
 * 5. Método getMutualFollows(user1, user2) - retorna true se ambos se seguem
 * 6. Método getRelationshipStats(user) - retorna { following: number, followers: number, mutualCount: number }
 * 7. Método getSuggestedFollows(user, limit) - sugere usuários baseado em seguidores em comum
 * 
 * Dicas:
 * - Use dois Maps: um para "seguindo" e outro para "seguidores"
 * - Armazene Sets como valores nos Maps
 * - Mantenha ambos os Maps sincronizados
 */

class RelationshipManager {
  // Implemente aqui
}

// Testes
const rm = new RelationshipManager();

rm.addRelation('alice', 'bob');
rm.addRelation('alice', 'charlie');
rm.addRelation('bob', 'alice');
rm.addRelation('bob', 'charlie');
rm.addRelation('charlie', 'bob');
rm.addRelation('david', 'alice');
rm.addRelation('david', 'bob');

console.log(rm.getFollowing('alice')); // Set { 'bob', 'charlie' }
console.log(rm.getFollowers('bob')); // Set { 'alice', 'charlie', 'david' }
console.log(rm.getMutualFollows('alice', 'bob')); // true
console.log(rm.getMutualFollows('alice', 'charlie')); // false

console.log(rm.getRelationshipStats('bob')); 
// { following: 2, followers: 3, mutualCount: 2 }

console.log(rm.getSuggestedFollows('alice', 2));
// Sugestão baseada em quem seus amigos seguem (ex: ['david'])

rm.removeRelation('alice', 'bob');
console.log(rm.getMutualFollows('alice', 'bob')); // false
