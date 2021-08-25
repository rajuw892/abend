import React from 'react'
import Styles from './Card.module.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';

function Card({ Imagelink, title, description, Link }) {
    return (
        <div className={Styles.card}>
            <div className={Styles.innerdiv}>

                <img src={Imagelink} alt="" className={Styles.image} />
                <h2 className={Styles.heading}>{title}</h2>
                <p className={Styles.description}>{description}</p>
                <h3><a className={Styles.link}><PersonIcon className=
                    {Styles.icon} />{Link}<ChevronRightIcon /></a></h3>
            </div>
        </div>
    )
}

export default Card
