import Titulo from "../Titulo"
import styles from "./style.module.css"
import ProfileSection from './ProfileSection/index';
import LinkButton from './../LinkButton/index';

//A função pode ser declarada fora do componente e também em uma pasta fora do componente, mas isso se ela não precisar utilizar as props.
//Se ela for uma função dependente das props, ela deve ser declarada dentro do componente.
function handleClick(ev){
  console.log(ev)  
  alert("Você está Seguindo");
}

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      
      <Titulo>
        <span>{props.name}</span>
        <button
        className={styles.followButton}
        onClick={handleClick}
        >
        Follow
        </button>      
      </Titulo>
      
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
            
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="Algum valor Aleatorio"
        aria-label="social links"
      >      
        <LinkButton href={props.githubUrl} target="_blank">GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl} target="_blank">LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl} target="_blank">Twitter</LinkButton>      
      </ProfileSection>
      
    </div>
  )
}