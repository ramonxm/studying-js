# Tipos de dados

## Cadeia de Carecteres

- "" = Aspas duplas
- '' = Aspas simples
- `` = template literals ou template strings

<br>

```js
console.log("Ramon");
```

# O que usar?

- Quando utilizar ' ' (aspas simples) dentro dos textos, prefira-se utilizar " " (aspas duplas).

  <br>

```js
console.log("Adoro aquela frase 'ser ou não ser, eis a quesão'");
```

<br>

- Template literals é recomendado a utilização quando queira fazer uma concatenação.

- Exemplo:

```js
const idade = 20;
console.log(`Ramon tem ${idade}`);
```

<br>

# Number

- Números
  - 33 = inteiros
  - 12.5 = reais (float)
  - NaN = Not a Number
  - Infinity = infinito

<br>

```js
console.log(33); // Int
console.log(12.5); // Float
console.log(12.5 / "String"); // NaN
console.log(Infinity); // Infinity - ! i maiúsculo.
```

<br>

# Boolean

- Somente 2 valores
  - true = verdadeiro
  - false = falso

<br>

```js
console.log(true); // retorna VERDADEIRO
console.log(false); // retorna FALSO
```

<br>

# Undefined e Null

- undefined = indefinido
- null: nulo
- objeto que não possui nada dentro
- diferente de indefinido.

<br>

# Object

- Objeto
- Propriedades / atributos
- Funcionalidades / Métodos

<br>

```js
// Padrão
{
  propriedade: "valor";
}

// Estruturando dados
console.log({
  name: "Ramon",
  age: 20,
  run: function () {
    console.log("run");
  },
});
```

<br>

# Array

- Array (vetores)
- Uma lista
- Agrupamento de dado

Exemplo:

```js
// Exemplo
["Ramon", 20];

console.log(["Leite", "Ovos", 2, 3]);
```

<br>

# Tipos de dados ES6

- Conforme o ECMAScript standard temos 9 tipos de dados:

* Data types
  - Primitive / Primitive value
  - Structural
  - Structural Primitive

<br>

## Primitivos

- String
- Number
- Boolean
- undefined
- Symbol
- BigInt

## Estruturais

- Object
  - Array
  - Map
  - Set
  - Date
  - ...
- Function

## Primitivo Estrutural / Structural Root Primitive

- null

### Dica: JavaScript é bastante orientado a Objetos.
