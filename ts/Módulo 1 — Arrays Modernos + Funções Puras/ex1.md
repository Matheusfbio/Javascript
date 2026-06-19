Crie uma função que receba uma lista de produtos:

type Product = {
id: number;
name: string;
price: number;
category: string;
};

Tarefas:

Filtrar apenas os produtos com category === "tech".
Aplicar 10% de desconto:
priceComDesconto = price \* 0.9

Retornar uma nova lista contendo apenas:

{ id, name, priceComDesconto }
Garantir que o array original não seja modificado.
Tudo tipado direitinho com TS.
