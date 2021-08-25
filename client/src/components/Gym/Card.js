import Image from 'next/image';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from './card.module.css'
 

function Card(props){
  return(
    <>
    <a href="/gymdescription" className={styles.anchortag}>
    <div className={styles.main}>
    <div className={styles.mid}>
      <Image src={props.imagesrc} width={170} height={170} className={styles.midImg}/>
    </div>
    <div className={styles.mid}>
      <h2 >{props.name}</h2>
      <p className={styles.location}><LocationOnIcon viewBox="0 -5 24 24" area-hidden="false" className={styles.icon}/>{props.loca}</p>
      <p> <span className={styles.para}>{props.rating}</span> | <strong>{props.trainer}</strong>.</p>
      <br />
    </div>
    </div>
    </a>

    </>
  )
}
export default Card;
