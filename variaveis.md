# Variáveis no JavaScript

* Nomes simbólicos para receber algum valor
* Atalhos de códigos
* Identificadores
* 3 palavras reservadas para criar uma variável
  * var
  * let
  * const 
  

  ```html
  <script>
    // var (caiu-se em mau uso)
    var clima = "Quente" // atribui um valor
    clima = "Frio" // reatribui um valor
    console.log(clima) // imprime Quente
 
    // let (veio com o ES6)
    let estacao = "Inverno" // atribui valor
    estacao = "Verão" // reatribui valor 
    console.log(estacao) // imprime Verão

    // const
    const clima = "Quente" // atribui valor
    clima = "Frio" // não podemos reescrever uma variavel constante.
    console.log(clima) // por ser uma constante, irá retornar um erro.
  </script>
  ```