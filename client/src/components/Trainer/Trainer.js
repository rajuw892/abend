import ReactDOM from 'react-dom'
import React , {useEffect ,useState}from 'react'
import styles from './trainer.module.css'
import Card from './Card'
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Trainer (){
const [bg,setBg]=useState('View all')
const handleClick=()=>{
  if(bg=="View all")
  {
    setBg('Show less')
    document.getElementById('a').style.display="block";
  }


  else if(bg=='Show less'){
setBg('View all')
    document.getElementById('a').style.display="none";
  }
}


return(

  <>
  <div className={styles.heading}>
   <h1 >Personal Trainer Near You</h1>
   <p><LocationOnIcon className={styles.icon} viewBox="0 -5 24 24"/>Clock tower,Dehradun...</p>
  </div>
   <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
   <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
   <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
   <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
    <div id="a" className={styles.hidden}>
    <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
    <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
    <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
    <Card imagesrc="/trainer.png" name="Arun Sharma" profession="Youth Fitness Specialist" time="5 years of exp" loca="Clock tower ,Ramnathu Nagar,Dehradun.."/>
    </div>
   <button onClick={handleClick}  className={styles.button} type="submit" >{bg}</button>
  </>
)
}
export default Trainer;
