# Variáveis no JavaScript

- Nomes simbólicos para receber algum valor
- Atalhos de códigos
- Identificadores
- 3 palavras reservadas para criar uma variável
  - var
  - let
  - const

<br>

```html
<script>
  // var (caiu-se em mau uso)
  var clima = "Quente"; // atribui um valor

  clima = "Frio"; // reatribui um valor

  console.log(clima); // imprime Quente

  // let (veio com o ES6)
  let estacao = "Inverno"; // atribui valor

  estacao = "Verão"; // reatribui valor
  console.log(estacao); // imprime Verão

  // const
  const clima = "Quente"; // atribui valor
  clima = "Frio"; // não podemos reescrever uma variavel constante.

  console.log(clima); // por ser uma constante, irá retornar um erro.
</script>
```

<br>

# Declarando variável

- O JS é tipagem fraca e dinâmica.

<br>

```js
let clima = true; // boolean
clima = ""; // string
console.log(typeof clima); // retorna string
```

<br>

# Escopo (scope)

- Escopo determina a visibilidade de alguma variável no JS.

<br>

# Block statement

```js
// Esboço
{
  let x = 0;
  console.log(x);
}
```

<br>

# Var

- Var é global e poderá funcionar fora de um escopo de bloco.

```js
console.log("> existe x antes do bloco?", x);

{
  var x = 0;
}

console.log("> existe x depois do bloco?", x);
```

## O que aconteceu por debaixo dos panos?

<br>

- O Hoisting ocorre quando seu código Javascript é compilado : Basicamente, todas as declarações de variáveis são movidas para o topo de seu escopo local (se foram declaradas dentro de uma função, por exemplo) ou para o topo do escopo global (se foram declaradas fora de uma função).

```js
// por Var ser global
// Hoisting

var x;
console.log("> existe x antes do bloco?", x); // saída undefined

{
  x = 0;
}
console.log("> existe x depois do bloco?", x); // saída 0
```

<br>

# Const e Let

- Const e Let são locais e só funcionam no escopo onde foi criada.

```js
// Let e Const só funciona no escopo que foi criado.

{
  let y = 0;
  console.log("> existe y", y); // 0
}

console.log("> existe x depois do bloco?", y); // error
```

<br>

# Nomeando variáveis

- JS é case-sensitive (sensível ao caso)
- JS aceita a cadeia de caracteres Unicode

* Posso:

  - Iniciar com esses caracteres especias: $ \_
  - Inicar com letras
  - Colocar acentos
  - Letras maísculas e minúsculas fazem diferença

* Não posso:

  - Iniciar com números
  - Colocar espaços vazios no nome

* Ideal:
  - Criar nomes que fazem sentido
  - Que explique o que a varíavel é ou faz
  - camelCase
  - snake_case
  - Escrever em inglês


<br>

# Patricando e Avançando


* Variáveis e tipos de dados.
  * Revisão
    * Variáveis
    * Objetos  

 <br> 

## Variáveis:
<br>

```js

// Declaração or Declaration
var name 

// assignment or atribuição de valores
name = "Ramon"

// que tipo de dado foi colocado na variável
console.log(typeof name)

// Tipo de dados
let age = 20 
let isHuman = true

// Agrupamento de declarações
let age, isHuman 
age = 20
isHuman = true

// Múltiplos argumentos na função. 
console.log(name, age, isHuman)

// Escrita de texto + variáveis

// Concatenando valores
console.log('O '+ name +' tem '+ age +' anos')

// Interpolando valores com template literals or template strings
console.log(`O ${name} tem ${age} anos.`)


```

<br>

## Object:
<br>


```js

// Object
const person = {
  name = 'Ramon',
  age = 20,
  weight: 85,
  isAdmin: true
}

// Interpolando valores e pegando dados de um Object
console.log(`${person.name} tem ${person.age} anos.`)


```


## Array:
<br>


```js

// Array
const animals = {
  'Lion',
  'Monkey',
  'Cat'
} 

// Posição começa em 0.

// Debaixo dos panos: Lion [0], Monkey [1], Cat[2]. 

// Length é o tamanho do array, [0,1,2] = 3.

// Acessar valores dentro do Array
console.log(animals[0]) // Lion
console.log(animals.length) // 3

```

<br>

## Exercícios:
* Para fixar o conteúdo. 
<br>

```js

// 1. Declare uma váriavel de nome weight.
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
  * name: String
  * age: Number (integer)
  * stars: Number (float)
  * isSubscribed: Boolean
*/
let name = "Ramon"
let age = 20
let stars = 5
let isSubscribed = true

/*
  4. A variável student abaixo é de que tipo de dado?

  4.1 Atribua a ela as mesmas propriedas e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:

  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.  
*/

let student = {
  name: "Ramon",
  age: 20,
  weight: 85,
  isSubscribed: true
}

console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kgs.`)

/*
  5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente um array vazio.
*/

let students = []

/*
  6. Reatribua vlaor para a varável acima, colocando dentro dela o objeto student da questão 4.
*/

students = [
  student
]

console.log(students)


/*
  7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
  name: "Ramon",
  age: 20,
  weight: 85,
  isSubscribed: true
}

students[1] = ramon // método não seguro.
console.log(students)


/*
  9. Sem rodar o código responsa qual é a saída do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

  console.log(a)
  var a = 1
*/

// Ela sofre hoisting, então undefined

var a
console.log(a)
a = 1

// E com let?

console.log(a)
let a = 1

// Ocorre um referrence error.
``` 

<br>

### Fim da seção.