# Props com Rest Param

- Existe uma forma de definirmos qualquer prop em um componente pai que criamos e passá-la diretamente para o componente que é retornado dentre dele, ou seja, passar uma prop no ProfileSection e ela ser passada diretamente para a div que ele retorna. Comece adicionando algumas propriedades extras diretamente no componente ProfileSection:
    
- Obs.: repare que **no React os atributos data- e aria- devem ser utilizados com hífen**, este é um caso especial e eles são os únicos onde podemos fazer isso.

- Ao inspecionar o código no navegador você vai ver que nada aconteceu com a div que envolve os links, ela tem apenas a classe wrapper. Para corrigirmos isso e passar automaticamente qualquer prop de ProfileSection para a div nós usamos o rest param:
    
- Obs.: repare que especificamente no caso do className usamos um formato diferente, pois se aplicarmos apenas o props.className o elemento ficará sem os estilos da classe wrapper.

[Link Explicação ](https://onebitcode.notion.site/Composi-o-de-componentes-com-children-21945fab7a9f471282d91f05c76f03e6)
