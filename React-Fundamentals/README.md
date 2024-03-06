# Dados Dinâmicos no JSX

* A partir dessa aula vamos começar a usar o React pra valer.
* Vamos criar um projeto com o Vite onde aplicaremos vários conceitos diferentes.
    * Para evitar recriar um novo projeto a cada aula, vamos aproveitar esse projeto nas aulas subsequentes. 

* Mas não se preocupe, o conteúdo de cada aula ficará devidamente separado para manter tudo organizado.

<h4>Nessa aula você vai aprender como usar dados dinâmicos dentro do JSX, inserindo expressões JavaScript diretamente dentro da marcação da página</h4>

* O JSX permite inserir qualquer expressão JavaScript dentro da marcação, em qualquer lugar. Para fazer isso basta usar um par de chaves “{ }”. Por exemplo, podemos exibir de forma dinâmica o valor de uma variável:
    
**Obs.: repare que se trocarmos o valor da variável e salvar o componente a página passa a mostrar o novo valor.**

* No entanto, existe uma regra muito importante aqui. Só podemos usar expressões dentro do JSX, ou seja, código que pode ser avaliado para resultar em um valor como os valores que atribuímos a uma variável por exemplo.

* Sendo assim, coisas como blocos if else, while, for, etc, não podem ser usados dentro do JSX. Podemos, por exemplo, substituir o if else por um operador ternário

