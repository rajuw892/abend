import React from 'react'
import Styles from './Event.module.css';
import Card from './Card/Card';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1400, min: 950 },
    items: 2
  },
   mobile: {
    breakpoint: { max: 950, min: 0 },
    items: 1 
   }
};

function OnGoing() {
    return (
        <div className={Styles.ongoing}>
          <Carousel responsive={responsive}>
               <div className={Styles.cardContainer}>
                 <Card
                 imagetag={`/OnGoing.jpg`} 
                 name={`Apurva Yoga Classes`} 
                 rating={5} 
                 specialization={`Specialization (if any)`} 
                 providedby={`Provided By`} 
                 startdate={`22 dec 2020`} 
                 enddate={`22 Jan 2021`} 
                 user={`Atul Kumar`}
                 OnGoing={true} />
               </div>
               <div className={Styles.cardContainer}>
                 <Card
                 imagetag={`/OnGoing.jpg`} 
                 name={`Apurva Yoga Classes`} 
                 rating={5} 
                 specialization={`Specialization (if any)`} 
                 providedby={`Provided By`} 
                 startdate={`22 dec 2020`} 
                 enddate={`22 Jan 2021`} 
                 user={`Atul Kumar`}
                 OnGoing={true} />
               </div>
               <div className={Styles.cardContainer}>
                 <Card
                 imagetag={`/OnGoing.jpg`} 
                 name={`Apurva Yoga Classes`} 
                 rating={5} 
                 specialization={`Specialization (if any)`} 
                 providedby={`Provided By`} 
                 startdate={`22 dec 2020`} 
                 enddate={`22 Jan 2021`} 
                 user={`Atul Kumar`}
                 OnGoing={true} />
               </div>
               <div className={Styles.cardContainer}>
                 <Card
                 imagetag={`/OnGoing.jpg`} 
                 name={`Apurva Yoga Classes`} 
                 rating={5} 
                 specialization={`Specialization (if any)`} 
                 providedby={`Provided By`} 
                 startdate={`22 dec 2020`} 
                 enddate={`22 Jan 2021`} 
                 user={`Atul Kumar`}
                 OnGoing={true} />
               </div>
           </Carousel>
        </div>
    )
}

export default OnGoing
