# Expressões e Operadores

- Expressions
- Operators
  - Binary
  - Unary
  - Ternary

```js
// Expressões
let number = 1;

(function () {
  console.log("alo");
})();

// Casos onde se faz o uso do ;

// Operador
let number = 1;
console.log(number + 1); // binary
console.log(++number); // unary

/*
++  incremento
--  decremento
*/

console.log(false ? "alo" : "nada"); // ternary
```

<br>

## New

- Left-hand-side expression
- criar um novo objeto

<br>

```js
let name = new String("Ramon");
name.surName = "Xavier";
let age = new Number(23);
console.log(name.surName, age);

let date = new Date("2020-12-01");
console.log(date);
```

<br>

## Typeof delete

- Operadores unários
- typeof
- delete

```js
const person = {
  name: "Ramon",
  age: 20,
};
delete person.age; // deleta a propriedade que existe dentro do objeto

console.log(person);
```

<br>

# Operadores Aritméticos

- Multiplicação

```js
console.log(3.2 * 5.5);
```

- Divisão

```js
console.log(12 / 2);
```

- Soma

```js
console.log(24 + 67);
```

- Subtração

```js
console.log(28 - 12);
```

- Resto da divisão

```js
let remainder;
remainder = 11 % 11;
console.log(remainder); // 0
```

- Incremento

```js
let increment = 0;

console.log(increment++); // 0
ou;
console.log(++increment); // 1
console.log(increment); // 1
```

- Decremento

```js
let decrement = 0;

console.log(decrement--); // 0
ou;
console.log(--increment); // -1
console.log(increment); // -1
```

- Exponencial

```js
console.log(3 ** 5);
```

<br>

## Grouping operator

```js
let total = (2 + 3) * 5;
console.log(total);
```

<br>

# Operadores de Comparação

- Irá comparar valores e retonar um Boolean como resposta à comparação.

```js
let one = 1;
let two = 2;
```

```
- == igual
- != diferente
- === estritamente igual
- !== estritamente diferente
- Maior >
- Maior ou igual >=
- < Menor
- <= Menor igual
```

