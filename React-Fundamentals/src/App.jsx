import StatusText from "./Components/StatusText/Index";
import Subtitle from "./Components/Subtitle";
import Title from "./Components/Title/Index";

export default function App() {
  return (
    <div>
      <hr />
      {/* //Foi criado uma pasta para os componentes de forma separada e depois importado aqui. */}
      <Title />
      <hr />
      <Subtitle />      
      <hr />
      <StatusText />
      <hr />
    </div>
  );
}
