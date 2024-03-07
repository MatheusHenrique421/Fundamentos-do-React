# Conhecendo o Fragment

* <h4>Os componentes do React possuem uma regra muito importante: o JSX retornado deve sempre possuir um único componente pai, ou seja, temos que sempre retornar um componente ou tag “em volta” de todos os outros, não podemos retornar dois elementos separados.</h4>

* Por isso sempre colocamos um elemento qualquer como pai de todos os outros.

* Mas isso pode acabar gerando um problema, o acumulo de tags ``<div>`` (ou qualquer outra) desnecessárias em nosso HTML. 

* Para resolver isso o React possui o Fragment. Ele é um componente que, ao ser renderizado, desaparece do HTM. 

* Basta utilizar a tag vazia  ``<> </>``