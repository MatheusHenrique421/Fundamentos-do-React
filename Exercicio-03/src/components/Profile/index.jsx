import Titulo from "../Titulo"
import styles from "./style.module.css"
import ProfileSection from './ProfileSection/index';
import LinkButton from './../LinkButton/index';

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      
      <Titulo>
        <span>{props.name}</span>
        <button>Follow</button>      
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