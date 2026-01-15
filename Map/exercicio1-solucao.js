class CacheManager {
  constructor() {
    this.cache = new Map(); // Map principal
  }

  set(key, value, ttl) {
    this.cache.set(key, {
      value,
      expireAt: Date.now() + ttl
    });
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    
    const item = this.cache.get(key);
    if (Date.now() > item.expireAt) {
      this.cache.delete(key);
      return null;
    }
    return item.value;
  }

  delete(key) {
    return this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }

  size() {
    this.cleanup();
    return this.cache.size;
  }

  cleanup() {
    const now = Date.now();
    for (const [key, item] of this.cache) {
      if (now > item.expireAt) {
        this.cache.delete(key);
      }
    }
  }
}

// Testes
const cache = new CacheManager();

cache.set('user1', { name: 'Alice' }, 2000);
cache.set('user2', { name: 'Bob' }, 5000);
cache.set('user3', { name: 'Charlie' }, 1000);

console.log(cache.get('user1')); // { name: 'Alice' }
console.log(cache.size()); // 3

setTimeout(() => {
  console.log(cache.get('user3')); // null
  console.log(cache.size()); // 2
}, 1500);

setTimeout(() => {
  console.log(cache.get('user1')); // null
  console.log(cache.get('user2')); // { name: 'Bob' }
}, 2500);
