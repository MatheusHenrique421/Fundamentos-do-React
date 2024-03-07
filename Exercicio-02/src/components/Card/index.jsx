import posterImg from '../../assets/starWars.jpg'
import style from './style.module.css'
import Button from '../Button'


export default function Card (){
    return (
        <div className={style.container}>
            <img className={style.poster} src={posterImg} alt='Poster Star Wars' />
            <div>
                <h2 className={style.title}>Pôster do Filme do Star Wars</h2>
                <p className={style.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <Button/>
                <Button/>                             
            </div>
        </div>
    )
}