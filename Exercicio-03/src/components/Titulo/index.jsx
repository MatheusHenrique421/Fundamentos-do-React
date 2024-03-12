import style from "./style.module.css";

export default function Titulo({ descricao }) {
  return (
    <div className={style.container}>
      <h1 className={style.descricao}>{descricao}</h1>
    </div>
  );
}
