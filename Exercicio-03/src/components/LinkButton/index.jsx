import style from "./style.module.css";

export default function LinkButton(props) {
  return (
    <a className={style.wrapper} href={props.href} target="_blank">
      {props.children}
    </a>
  );
}
