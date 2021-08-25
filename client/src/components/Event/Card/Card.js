import React from 'react'
import Styles from './Card.module.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
function Card({imagetag, name, rating, specialization, providedby, startdate, enddate, user, OnGoing}) {

    

    return (
        <div className={Styles.card}>
            <img src={imagetag} alt="" className={Styles.image}/>
            <div className={Styles.nameline}>
            <h2 className={Styles.name}>{name}</h2>
            <div className={Styles.rating}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                <StarOutlineIcon />
            </div>
            </div>
            <div className={Styles.detail}>
                <h3 className={Styles.detailsSection}>{specialization}</h3>
                <h3 className={Styles.detailsSection}>{providedby}</h3>
            </div>
            <div className={Styles.datesName}>
                <div className={Styles.dates}>
                    <ScheduleIcon />
                    <p className={Styles.sd}>{startdate} - </p>
                    {OnGoing ? <p className={Styles.ongoing}>{enddate}</p>: <p className={Styles.history}>{enddate}</p>}
                </div>
                <h2 className={Styles.user}>{user}</h2>
            </div>
            {OnGoing ? <p></p>: <button className={Styles.button}> Book Again </button>  }
        </div>
    )
}

export default Card
