# Controle de fluxo da aplicação

- Control flow

```js
if, else, else if, for.
```

<br>

# IF...else

```js
let temperature = 36.5;

if (temperature >= 37.5) {
  console.log("febre alta");
} else if (temperature < 37.5 && temparture >= 37) {
  console.log("febre moderada");
} else {
  console.log("Saudável");
}
```

<br>

# Switch

```js
function calculate(number1, operator, number2) {
  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;

    case "/":
      result = number1 / number2;
      break;
    default:
      console.log("não implementado");
      break;
  }

  return result;
}

console.log(calculate(4, "+", 8));
```

<br>

# Throw e Try/Catch

```js
function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é obrigatório";
  }
  console.log(name);
}
try {
  sayMyName("Ramon");
} catch (e) {
  console.log(e);
}

console.log("após ao try/catch");
```


<br>


# Estruturas de repetição

