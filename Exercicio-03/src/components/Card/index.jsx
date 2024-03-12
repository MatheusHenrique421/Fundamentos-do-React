import style from "./style.module.css";
import Button from "../Button";
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import Imagem from "../ImgPerfil";

export default function Card() {
  return (
    <div className={style.container}>
      
      <Imagem />

      <Titulo descricao="Matheus Henrique Schumliak" />

      <Paragrafo descricao="Full Stack Javascript developer at Home Inc." />

      <Paragrafo descricao="+ 55 46 9 9999-9999" />

      <Paragrafo descricao="matheus@email.com" />

      <hr />
      
      <Button descricao={"GitHub"} />

      <Button descricao={"Linkedin"} />

      <Button descricao={"Twitter"} />

    </div>
  );
}
