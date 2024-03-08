import style from './style.module.css';

export default function Button({ descricao }) {
  return <button className={style.button}>{descricao}</button>;
}
