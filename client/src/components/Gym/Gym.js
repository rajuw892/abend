import React , {useEffect ,useState}from 'react'
import styles from './gym.module.css'
import Card from './Card'


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
  <div className={styles.topContainer}>
  <div className={styles.heading}>
  <p>Book your gym</p>
   <h1 >Top gyms near you</h1>
  </div>

  <div className={styles.searchBox}>
       <form>
         <input type="search" placeholder={`search for your location`} className={styles.search}/>
         <button className={styles.buttonsearch}>Search</button>
       </form>
  </div>
  </div>
   <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." trainer="18 trainers    | 4KM away" />
   <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." trainer="18 trainers    | 4KM away" />
   <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." trainer="18 trainers    | 4KM away" />
   <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." trainer="18 trainers    | 4KM away" />
    <div id="a" className={styles.hidden}>
    <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." />
    <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." />
    <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." />
    <Card imagesrc="/Gym.png" name="Grip5 Gym" rating="⭐️4.3(1334)"  loca="Clock tower ,Ramnathu Nagar,Dehradun.." />
    </div>
   <button onClick={handleClick}  className={styles.button} type="submit" >{bg}</button>
   
  </>
)
}
export default Trainer;
