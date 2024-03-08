import Card from "./components/Card";
import Button from "./components/Button";
import StarWars1 from "./assets/starWars.jpg"
import StarWars2 from "./assets/esb-poster.jpg"
import StarWars3 from "./assets/rotj-poster.jpg"

function App() {
  return (
    //Para usarmos o Fragment não precisamos nem mesmo importá-lo, basta usar uma tag vazia <>
    <>
      <h1>Exercicio-02</h1>
      <Button descricao="Acessar Blog"/>
      <Card title="Pôster: Star Wars (1997)" posterImg={StarWars1} />
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={StarWars2}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={StarWars3}/>
      
    </>
  )
}

export default App;