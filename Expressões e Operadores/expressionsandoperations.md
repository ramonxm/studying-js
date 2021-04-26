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

<br>

# Operadores de atribuição (Assignment)

<br>

```js
// assignment
x = 1;

// addtioon assignment
x += 2;

// subtraction assignment
x -= 1;

// multiplication assignment
x *= 2;

// division assignment
x /= 2;

// remainder, exponetiation
x %= 2;
x **= 2;
```

<br>

# Operadores lógicos (logical operators)

```js
let pao = true;
let queijo = false;

// AND && - verdadeiro se todos forem verdadeiros
console.log(pao && queijo); // saída false

// OR || - verdadeiro se pelo menos um for verdadeiro
console.log(pao || queijo); // saída true

// NOT ! - negação
console.log(!pao); // saída false
```

<br>

# Operador condicional ternário

- Dependendo da condição, nós receberemos valores diferentes
- Condição então valor 1 se não valor 2
- condition ? value1 : value2

```js
// Exemplos:

let bred = true;
let cheese = true;

const niceBreakfast = bread && cheese ? "Coffee cool" : "Coffee poor";
console.log(niceBreakfast);

let age = 16;
const canDrive = age >= 18 ? "can drive" : "can't drive";
console.log(canDrive);
```

<br>

# Operadores para string

```js
// comparsion (comparação)
console.log("a" == "a");

// concatenation (concatenação)
// Retorna a união de duas strings
let alpha = "alpha";
console.log(alpha + "bet");
```

<br>

# Falsy e Truthy

- Type conversion (typecasting) vs type coersion

```js
/*
FALSY
Quando um valor é considerao false em contextos onde um booleano é obrigatório (condicionais e loops)

false
0
-0
""
null
undefined
NaN
*/
console.log(0 ? "verdadeiro" : "falso");

/*
TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigátorio (condionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
console.log([] ? "verdadeiro" : "falso");
```

<br>

# Operator Precedence

- grouping ()
- negação e incremento ! ++ --
- multiplicação e divisão * /
- adição e subtração + -
- relacional < <= > >=
- igualdade == != === !==
- AND &&
- OR ||
- condicional ?:
- assignment (atribuição) = += -= *=


