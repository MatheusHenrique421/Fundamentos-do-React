# Criando Novos Componentes 
 
* No arquivo “App.jsx” nós vamos criar uma outra função chamada **Title. Um componente React nada mais é do que uma função do JavaScript que retorna JSX, então podemos recriar nosso título h1 como um componente individual:**

* **Obs**: os componentes do React, apesar de serem funções, são nomeados usando CamelCase, ou seja, letras maiúsculas no começo e em cada palavra. **É muito importante seguir esse padrão de nomenclatura**.

* Para usar esse componente que criamos no nosso App.jsx só precisamos incluir uma nova tag com o seu nome, como uma tag html comum, mas com a diferença de que os nossos componentes começarão sempre com letras maiúsculas:
    
* Obs.: repare que precisamos incluir a / de fechamento mesmo sendo uma tag única, isso é uma regra do JSX por ele ser baseado em XML (linguagem de marcação parecida com o HTML)

* Para evitar recriar um novo projeto a cada aula, vamos aproveitar esse projeto nas aulas subsequentes. 

* uma outra prática comum do React é separar cada componente em seu próprio arquivo com o mesmo nome do componente, deixando nosso código mais organizado. Vamos fazer isso.
* Crie um arquivo chamado “Title.jsx” e mova para ele o código do componente Title:
    
* Obs.: lembre que precisamos exportá-lo para poder usá-lo no componente App.jsx.

Explicação da Aula [Clique aqui](https://onebitcode.notion.site/Criando-Novos-Componentes-06503664e06b4b3487c4c358342627a0 "Title").
