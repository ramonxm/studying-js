# Manipulando Dados

## Prototype

- Prototype-based language
- Prototype chain

```
__proto__
```

<br>

- A maioria dos tipos de dados no Javascript são encapsulados por um objeto.

```js
"Ramon".__proto__;
typeof String;

(23.5).__proto__;
typeof Number;

"Ramon".length;
4;

true.__proto__;
typeof Boolean;

(11.0).hasOwnProperty();
false[("a", "b")].length;
2;
```

<br>

# Type Conversion(TypeCasting) vs Type Coersion

- Alteração de um tipo de dado para outro tipo

<br>

```js
console.log("9" + 5); // transformou number para string - type coersion.
95;

console.log(Number("9") + 5); // Type conversion
14;
```

<br>

# Manipulando Strings e Números

<br>

- Transformar String em Número e Número em String.

```js
let string = "123";
console.log(Number(string));

let number = 321;
console.log(String(number));
```

<br>

- Contar quantos caracteres tem uma palavra e quantos dígitos tem um número.

```js
let word = "Paralelepipedo";
console.log(word.length);

let number = 1234;
console.log(String(number).length);
```

<br>

- Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

```js
let number = 345.33452345;
console.log(number.toFixed(2).replace(".", ","));
345, 33;
```

<br>

- Transformar letras minúsuclas em maiúsculas. Faça o contrário disso também.

```js
let word = "Programar é muito bacana!";
console.log(word.toLowerCase()); // minúscula

console.log(word.toUpperCase()); // maiúscula
```

<br>

- Verificar se o texto contém a palavra Amor.

```js
let phrase = "Eu quero viver o Amor!";

// includes é case-sensitive
console.log(phrase.includes("Amor"));
true;
```

<br>

- Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onderam espaços, coloque \_

```js

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // string to array
let phraseWithUnderscore = myArray.join("_") // array to string

console.log(phraseWithUnderscore)
Eu_quero_viver_o_Amor!


```

<br>

- Criar array com construtor

```js
let myArray = new Array("a", "b", "c");
console.log(myArray);
```

<br>

- Contar elementos de um array

```js
console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "alo";
    },
  ].length
);
3;
```

<br>

- Transformar uma cadeia de caracteres em elementos de um array

```js
let word = "manipulação";
console.log(Array.from(word));
// cada um dos caracteres virou um elemento de um array.
```

<br>

- Manipulando esse array:

```js
let techs = {"html", "css", "js"}
```

- Adicionar um item no fim

```js
techs.push("nodejs");
```

- Adicionar no começo

```js
techs.unshift("sql");
```

- Remover do fim

```js
techs.pop();
```

- Remover do começo

```js
techs.shift();
```

- Pegar somente alguns elementos do array

```js
console.log(techs.slice(1, 3));
```

- Remover 1 ou mais items em qualquer posição do array

```js
techs.splice(1, 1);
```

- Encontrar a posição de um elemento no array

```js
let index = techs.indexOf("css");
techs.splice(index, 1); // caso queira remover;
```

```js
// Para testar.
console.log(techs);
```
