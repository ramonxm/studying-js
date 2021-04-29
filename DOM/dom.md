# getElementById

- Basicamente o document. getElementById , como o nome já diz, é uma função do JavaScript que serve para retornar um elemento do DOM que é identificado por um ID específico.

```html
<h1 id="blog-title">Meu blog</h1>
```

```js
const element = document.getElementById("blog-title");
console.log(element); // retorna o elemento pegado no html.
```

<br>

# getElementsByClassName

- Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada. Quando invocado no objeto document, o documento é examinado por completo, incluindo o nó raiz. Você também pode invocar getElementsByClassName() em qualquer elemento; isso retornaria somente elementos que são descendentes do nó raiz especificado com o nome da classe.

```html
<h1 class="one">Meu blog</h1>
<p class="one"></p>
```

```js
const element = document.getElementByClassName("one");
console.log(element); // retorna o elemento pegado no html.
```

<br>

# getElementsByTagName

- O método getElementsByTagName da interface Document retorna um HTMLCollection de elementos com o nome da tag fornecido. O documento completo é pesquisado, incluindo o nó raiz. A HTMLCollection retornada é ao vivo, o que significa que ela se atualiza automaticamente para permanecer em sincronia com a árvore DOM sem ter que chamar document.getElementsByTagName () novamente.

```html
<h1>Meu blog</h1>
```

```js
const element = document.getElementByTagName("h1");
console.log(element); // retorna o elemento pegado no html.
```

<br>

# Query Selector

- Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

```html
<h1 class="one">Meu blog</h1>
```

```js
const element = document.querySelector(".one");
console.log(element); // retorna o elemento pegado no html.
```

<br>

# querySelector All

- Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma NodeList.

```html
<h1 class="one">Meu blog</h1>
```

```js
const elements = document.querySelectorAll(".one");
elements.forEach(el =
> console.log(el))
```

<br>

# Qual usar?

- getElementById (element)
- getElementsByClassName (HTMLCollection)
- getElementsByTagName (HTMLCollection)
- querySelector (element)
- querySelectorAll (NodeList)

<br>

# Manipular conteúdo

## textContent

- A propriedade textContent da interface Node representa o conteúdo de texto de um nó e dos seus descendentes.

```html
<h1>Meu blog</h1>
```

```js
const element = document.querySelector("h1");

element.textContent += " Olá Devs!";

console.log(elements.textContent); // Meu blog Olá Devs!
```

<br>

## InnerText

- Node.innerText é uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes. Usada como getter, retorna de maneira aproximada o texto que o usuário obteria caso tivesse selecionado o conteúdo e copiado para a área de transferência. Este recurso fora introduzido originalmente pelo Internet Explorer, mas foi oficialmente especificado no padrão HTML apenas em 2016, sendo adotado por todos os principais navegadores a partir de então.

```html
<h1>Meu Blog</h1>
```

```js
const element = document.querySelector("h1");

element.innerText = "Olá Devs!";
// de Meu Blog foi para Olá Devs!
```

<br>

## innerHTML

- A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes.

```html
<h1>Meu Blog</h1>
```

```js
const element = document.querySelector("h1");

element.innerHTML = "Olá Devs! <small>!!!</small>";
// de Meu Blog foi para Olá Devs! e adicinou a tag small
```

<br>

## Value

```html
<h1>Meu Blog</h1>
<input type="text" />
```

```js
const element = document.querySelector("input");

element.value = "Valor que eu quiser";
```

<br>

## Manipulando aributos

```html
<header class="bg">
  <h1>Meu Blog</h1>
</header>
```

```js
const header = document.querySelector("header");

header.setAttribute("id", "header");

const headerID = document.querySelector("#header");

console.log(headerID.getAttribute("class"));

header.removeAttribute("id");

header.setAttribute("class", "bg header");
```

<br>

# Alterando estilos com style

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const element = document.querySelector("body");

element.style.backgroundColor = "#f9f3d2";
console.log(element.style.backgroundColor);
```

<br>

# classList

- Alterando estilos

```html
<style>
  .active {
    color: red;
  }
  .green {
    background-color: green;
  }
</style>

<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const element = document.querySelector("body");

element.classList.add("active", "green");
console.log(element.classList);
element.classList.remove("active");
element.classList.toggle("active");
```

<br>

# parentElement e parentNode

- Navegando pelos elementos

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const body = document.querySelector("body");

console.log(body.parentElement); // pai
```

<br>

# Pegando elementos filhos

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const el = document.querySelector("body");

console.log(el.childNodes); // todos os filhos em formato NodeList

console.log(el.children); // todos os filhos em formato HTMLCollection

// firstChild firstElementChild

// lastChild lastElementChild
```

<br>

# Buscando irmãos

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const el = document.querySelector("header");

console.log(el.nextSibling);
console.log(el.nextElementSibling);

console.log(el.previousSibling);
```

<br>

# Criando e adicionando elementos na página

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const div = document.createElement("div");
div.innerText = "Olá, Devs!";

const body = document.querySelector("body");

body.append(div); // no final
body.prepend(div); // no começo
```

<br>

# insertBefore

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const div = document.createElement("div");
div.innerText = "Olá, Devs!";

const body = document.querySelector("body");

const script = body.querySelector("script");

body.insertBefore(div, script);
```

<br>

# Eventos

```html
<body>
  <header>
    <h1 onClick="print()">Meu Blog</h1>
  </header>
</body>
```

```js
function print() {
  console.log("print");
}
```

<br>

# Eventos de teclado

```html
<body>
  <header>
    <h1>Meu Blog</h1>
    <input type="text" />
  </header>
</body>
```

```js
const input = document.querySelector("input");

input.onkeypress = function () {
  console.log("rodei");
};
```

<br>

# Adicionando eventos via JS

```html
<body>
  <header>
    <h1>Meu Blog</h1>
  </header>
</body>
```

```js
const h1 = document.querySelector("h1");
h1.addEventListener("click", print);

function print() {
  console.log("print");
}

// outra maneira

h1.onclick = print;

h1.onclick = function () {
  console.log("outro momento");
}; // desconsidera o primeiro.
// não recomendado
```

<br>

# Argumento event

```html
<body>
  <header>
    <h1>Meu Blog</h1>
    <input type="text" />
  </header>
</body>
```

```js
const input = document.querySelector("input");

input.onkeypress = function (event) {
  console.log(event.currentTarget);
};
```

<br>

# Praticando

```html
<button id="openModal">Abrir Janela</button>

<div class="modal-wrapper invisible">tecle ESC para fechar</div>
```

```js
const openModal = document.getElementById("openModal");

const modalWrapper = document.querySelector(".modal-wrapper");

openModal.onclick = function () {
  modalWrapper.classList.remove("invisble");
};

document.addEventListenr('keydown', function(event)){
    const isEscKey = event.key == 'Escape'

    if(isEscKey){
        modalWrapper.clasList.add('invisible')
    }
}
```
