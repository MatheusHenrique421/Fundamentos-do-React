import Card from "./components/Card";

function App() {
  return (
    //Para usarmos o Fragment não precisamos nem mesmo importá-lo, basta usar uma tag vazia <>
    <>
      <h1>Exercicio-02</h1>
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App;