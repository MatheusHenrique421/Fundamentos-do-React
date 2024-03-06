function soma(a, b) {
  return a + b;
}
export default function App() {
  const texto = "Tamém é top da balada!";
  const status = true;

  return (
    <div>
      <h1>React is awsome! {texto}</h1>

      <h2>É muito fácil, como 1 + 1 = {1 + 1}, Exemplo resolvido com operador matemático.</h2>

      <h2>É muito fácil, como 2 + 3 = {soma(2, 3)}, Exemplo chamando uma função externa.</h2>

      <h2>Qual é o status: {status ? "ON" : "OFF"}, Exemplo utilizando operador ternaário.</h2>
    </div>
  );
}
