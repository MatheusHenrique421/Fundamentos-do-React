import style from "./style.module.css";

export default function Titulo(props) {
  return <h2 className={style.wrapper}>{props.children}</h2>;
}
