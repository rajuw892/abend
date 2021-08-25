import Image from 'next/image';import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from './card.module.css'

function Card(props){
  return(
    <>
    <div className={styles.main}>
    <div className={styles.mid}>
      <Image src={props.imagesrc} width={170} height={170} className={styles.midImg}/>
    </div>
    <div className={styles.mid}>
      <h2 >{props.name}</h2>
      <p> <span className={styles.para}>{props.profession}</span> | <strong>{props.time}</strong>.</p>
      <p className={styles.location}><LocationOnIcon className={styles.icon} viewBox="0 -5 24 24" area-hidden="false"/>{props.loca}</p>
      <br />
    </div>
    </div>

    </>
  )
}
export default Card;
