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


* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
  - Iniciar com esses caracteres especias: $ _
  - Inicar com letras
  - Colocar acentos
  - Letras maísculas e minúsculas fazem diferença

- Não posso:
  - Iniciar com números
  - Colocar espaços vazios no nome

- Ideal:
  - Criar nomes que fazem sentido
  - Que explique o que a varíavel é ou faz
  - camelCase
  - snake_case
  - Escrever em inglês


