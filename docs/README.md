# Configuração do Jest com TypeScript e UUID

Documentação do processo de configuração do Jest para suporte a TypeScript e compatibilidade com o pacote `uuid`.

---

## Problema inicial

Ao tentar instalar `@types/jest`, o npm retornou um erro de conflito de dependências:

```
npm error ERESOLVE could not resolve
Found: babel-jest@30.0.5
Could not resolve dependency: peerOptional babel-jest@"^29.0.0" from ts-jest@29.2.6
```

**Causa:** `babel-jest@30` é incompatível com `ts-jest@29`, que exige `babel-jest@^29.0.0`.

**Solução:** Downgrade do `babel-jest` de `^30.0.5` para `^29.7.0` no `package.json`.

---

## Dependências instaladas

```bash
npm i --save-dev @types/jest
npm i --save-dev @types/node
npm i --save-dev @babel/preset-typescript
```

Versões finais relevantes no `package.json`:

```json
"devDependencies": {
  "@babel/core": "^7.28.3",
  "@babel/preset-env": "^7.28.3",
  "@babel/preset-typescript": "^7.x",
  "@types/jest": "^29.5.14",
  "@types/node": "^25.x",
  "babel-jest": "^29.7.0",
  "jest": "^29.7.0",
  "ts-jest": "^29.2.6"
},
"dependencies": {
  "uuid": "^10.0.0"
}
```

---

## Configuração do tsconfig.json

Dois campos adicionados em `compilerOptions`:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "types": ["jest", "node"]
  }
}
```

- `"types": ["jest", "node"]` — faz o TypeScript reconhecer os globals do Jest (`describe`, `it`, `expect`, etc.) e do Node (`require`, `process`, etc.) sem precisar importá-los.
- `"module": "commonjs"` — mantido em CommonJS pois o Babel cuida da transformação em runtime.

---

## Configuração do babel.config.js

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-typescript"],
  ],
};
```

- `@babel/preset-env` — transpila JavaScript moderno para a versão do Node atual.
- `@babel/preset-typescript` — permite ao Babel processar arquivos `.ts` removendo as anotações de tipo.

---

## Configuração do jest.config.mjs

```js
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(uuid)/)"],
};
```

- `transform` — usa `babel-jest` para transformar arquivos `.js` e `.ts`.
- `transformIgnorePatterns` — por padrão o Jest ignora `node_modules`, mas o `uuid` é um pacote ESM puro e precisa ser transformado pelo Babel. O padrão `node_modules/(?!(uuid)/)` exclui o `uuid` da lista de ignorados, permitindo sua transformação.

---

## Problema com o uuid

### Histórico de versões testadas

| Versão | CJS | Suporte a `v7` | Resultado |
|--------|-----|----------------|-----------|
| `v13`  | ❌  | ✅             | Falhou — ESM puro, sem build CJS |
| `v9`   | ✅  | ❌             | Falhou — `v7` não existe nessa versão |
| `v10`  | ✅  | ✅             | ✅ Funcionou |

**Solução:** Usar `uuid@10`, que introduziu o `v7` e ainda mantém build CommonJS.

```bash
npm install uuid@10
```

---

## Script de teste

No `package.json`, o script de teste usa `--experimental-vm-modules` para suporte a ESM no Node:

```json
"scripts": {
  "test": "NODE_OPTIONS='--experimental-vm-modules' jest --detectOpenHandles"
}
```

---

## Resultado final

```
PASS ts/Módulo 1 — Arrays Modernos + Funções Puras/Transform-product.spec.ts
  Testing the filterProductTech fuction
    ✓ Should be return a 2 products with discount
    ✓ Should return only tech products with 10% discount applied

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```
