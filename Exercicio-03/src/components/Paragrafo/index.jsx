import style from "./style.module.css";

export default function Paragrafo({ descricao }) {
  return (
    <div className={style.container}>

      <hr className={style.underline} />

      <p className={style.paragrafo}>{descricao}</p>

    </div>
  );
}
