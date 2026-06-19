## Introdução a Classes e Objetos em JavaScript

• **A importância das classes**  
 – As classes são uma forma de estruturar e organizar código em JavaScript.  
 – Permitem encapsular dados e funcionalidades relacionadas.

• **Objetos e instâncias**  
 – Objetos são instâncias de classes que armazenam estados e comportamentos.  
 – Métodos são funções definidas dentro de uma classe que agem sobre os dados.

## Criando uma Classe: Exemplo de "Carro"

• **Definição da classe**  
 – A classe é renomeada de `Pessoa` para `Carro`.  
 – O construtor é um método especial utilizado para inicializar novas instâncias.

• **Parâmetros do construtor**  
 – Nome e tipo do carro são passados como parâmetros para o construtor.  
 – A propriedade `tipo` é um número que indica diferentes categorias, como:
– 1: Esportivo  
 – 2: Utilitário  
 – 3: Passeio  
 – Qualquer outro valor: Militar

• **Definindo propriedades e métodos**  
 – As propriedades do carro incluem `nome`, `tipo`, e `velocidade máxima`.  
 – Velocidades máximas definidas com base no tipo:
– Esportivo: 300 km/h  
 – Utilitário: 120 km/h  
 – Passeio: 160 km/h  
 – Militar: 180 km/h

## Instanciando Objetos

• **Criando instâncias de `Carro`**  
 – Exemplo de instâncias:
– `C1`: Nome: "Rapidão", Tipo: Esportivo  
 – `C2`: Nome: "Super Luxo", Tipo: Passeio  
 – `C3`: Nome: "Bombadão", Tipo: Militar  
 – `C4`: Nome: "Carrego Tudo", Tipo: Utilitário

• **Acessando propriedades**  
 – Utilização de `C1.nome`, `C2.tipo` e `C3.velocidade` para acessar dados dos carros.

## Métodos da Classe

• **Método `info`**  
 – Método criado para retornar informações do carro.  
 – Usa `console.log` para imprimir detalhes de `nome`, `tipo` e `velocidade máxima`.

• **Uso de Template Strings**  
 – Melhoria na apresentação com template strings facilita a formatação.  
 – Utilização de crases (\`\`) para interpolação de variáveis.

## Métodos Get e Set

• **Métodos para obter dados (`get`)**  
 – `getNome`, `getTipo`, e `getVelMax` retornam respectivas propriedades do carro.  
 – Método `getInfo` retorna um array com todas as propriedades em um formato estruturado.

• **Métodos para definir dados (`set`)**  
 – `setNome`, `setTipo`, e `setVelMax` permitem modificar valores de propriedades.

• **Exemplo de uso de métodos `set`**  
 – `C1.setNome("Super Veloz")` altera o nome para "Super Veloz".  
 – Reflecte imediatamente na instância ao acessar `C1.nome`.

## Encapsulamento e Propriedades Adicionais

• **Adicionando propriedades padrão**  
 – Atributo `canal` é adicionado como uma propriedade padrão da classe `Carro`.  
 – Permite manter informações comuns a todos os carros criados a partir da classe.

• **Alteração de propriedades durante a instanciação**  
 – Propriedades como `canal` podem ser alteradas diretamente no construtor.

## Conclusão e Próximos Passos

• **Revisão da orientação a objetos**  
 – O uso do operador **new** e as propriedades **this** para acessar atributos da classe.

• **Exploração futura**  
 – Na próxima aula, será discutido um novo método de criação de objetos e classes usando funções em vez de classes.
