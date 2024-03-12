import style from "./style.module.css";

export default function Button({descricao}) {
  return (
    <div className={style.container}>
      <button className={style.button}>{descricao}</button>
    </div>
  );
}
