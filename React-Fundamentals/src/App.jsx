import StatusText from "./Components/StatusText/Index";
import Subtitle from "./Components/Subtitle";
import Title from "./Components/Title/Index";
import "./styles/global.css";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      {/* //Foi criado uma pasta para os componentes de forma separada e depois importado aqui. */}
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}