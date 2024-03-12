import style from "./style.module.css";
import imagemPerfil from "../../assets/perfil.jpg";

export default function Imagem() {
    return (
        <div className={style.container}>
            <img className={style.imagem} src={imagemPerfil} alt="imagem do perfil" />
        </div>
    );
}