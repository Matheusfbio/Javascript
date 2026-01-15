class RelationshipManager {
  constructor() {
    this.following = new Map(); // Map de quem cada usuário segue
    this.followers = new Map(); // Map de quem segue cada usuário
  }

  addRelation(from, to) {
    if (!this.following.has(from)) this.following.set(from, new Set());
    if (!this.followers.has(to)) this.followers.set(to, new Set());
    
    this.following.get(from).add(to);
    this.followers.get(to).add(from);
  }

  removeRelation(from, to) {
    if (this.following.has(from)) this.following.get(from).delete(to);
    if (this.followers.has(to)) this.followers.get(to).delete(from);
  }

  getFollowing(user) {
    return this.following.get(user) || new Set();
  }

  getFollowers(user) {
    return this.followers.get(user) || new Set();
  }

  getMutualFollows(user1, user2) {
    return this.getFollowing(user1).has(user2) && this.getFollowing(user2).has(user1);
  }

  getRelationshipStats(user) {
    const following = this.getFollowing(user);
    const followers = this.getFollowers(user);
    
    let mutualCount = 0;
    for (const followedUser of following) {
      if (followers.has(followedUser)) mutualCount++;
    }

    return {
      following: following.size,
      followers: followers.size,
      mutualCount
    };
  }

  getSuggestedFollows(user, limit) {
    const following = this.getFollowing(user);
    const suggestions = new Map();

    for (const followedUser of following) {
      const theirFollowing = this.getFollowing(followedUser);
      for (const suggested of theirFollowing) {
        if (suggested !== user && !following.has(suggested)) {
          suggestions.set(suggested, (suggestions.get(suggested) || 0) + 1);
        }
      }
    }

    return Array.from(suggestions.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([user]) => user);
  }
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
// ['david'] - david segue bob e alice também segue bob

rm.removeRelation('alice', 'bob');
console.log(rm.getMutualFollows('alice', 'bob')); // false
