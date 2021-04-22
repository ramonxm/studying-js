# Funções

<br>

- Caso de uso:
  - Criar um aplicativo de frases motivacionais.

<br>

```js

// Declaration - declaração da função
// Function statement
function createPhrases() {
  console.log("Estudar é muito bom");
  console.log("Paciência e persistencia");
  console.log("Revisão é a mãe do aprendizado");
}

// Executar a função 
// Execute, run, call, invoke
createPhrases()

// Posso invocar ela inúmeras vezes.
createPhrases()
createPhrases()

// Informar o fim da função
console.log('Fim do Programa')

```


<br>

# Argumentos e Parâmetros
* Passar argumentos para parâmetros de uma função.

<br>

```js

// function expression or function anonymous
// Parâmetros (parameters)
const sum = function(number1, number2) {
    console.log(number1 + number2) 
}

// Passar argumentos na função
sum(2,3) // arguments - argumentos

```
<br>

## Retornando valores dentro de uma função.
<br>

```js
// Retornando valores com return.
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(number1, number2)


console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)
```

<br>

## Maneiras de entender funções.
<br>


* Função é um liquidificador

```js

// Imagina que uma função é uma caixa mágica onde eu mando pra elas coisas e ela vai me retornar um novo valor.
function fazerSuco(fruta1, fruta2) {

    return 'Suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')
console.log(copo)

```


<br>

## Function Scope
<br>

```js
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}


console.log(subject) // create video
console.log(createThink(subject)) // study

```


<br>

## Function Hoisting
<br>

* Uma função criada dessa forma sofre hoisting.
```js

sayMyName()

function sayMyName(){
    console.log('Ramon')
}

```
* Uma função criada dessa forma não sofre hoisting
```js

sayMyName()

const sayMyName = function(){
    console.log('Ramon')
}

```

<br>

## Arrow function
<br>

```js

const sayMyName(name) => {
    console.log(name)
}

sayMyName('Ramon')

```

<br>

## Callback function
<br>

```js

function sayMyName(name){
    console.log('Antes de executar a função callback')
    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

```



<br>

## Funções construtoras
* Expressão new
* criar um novo objeto
* this keyword
<br>


```js
function Person(){
    thisname = name
}
const ramon = new Person()
console.log(ramon)
```


