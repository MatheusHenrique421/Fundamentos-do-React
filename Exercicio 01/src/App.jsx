import reactLogo from "/public/react.png";
import screenshotExemplo from '/public/screenshot-exercicio-1.png'

function App() {  
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>        
      <h1>React</h1>
      <p> A biblioteca para interfaces de usuários web e nativas.</p>
      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr />
      <h1>Crie interfaces de usuário de componentes</h1>
      <p>
        React permit que você construa interfaces de usuários a partir de
        pedaços individuais chamados componentes
      </p>
      <hr />
      <h1>Escreva componentes com código e marcação</h1>
      <p>
        Componentes React são funções JavaScript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo
        React.
      </p>
      <hr />
      <h1>Póximos passos</h1>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>uso de eventos do JavaScript</li>
      </ul>
      <hr />
      <h2>Página HTML a ser reproduzida:</h2>
      <a href="https://onebitcode.notion.site/Exerc-cio-1-ec68a5fee0774a96b1a14921ef72dfb4" target="_blank">
          <img src={screenshotExemplo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  );
}

export default App;
