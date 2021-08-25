import React from 'react'
import Styles from './Card.module.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Card({Imagelink, title, tagline, LinkLine, link}) {
    return (
        <div className={Styles.card}>
            <div className={Styles.innerdiv}>
            <img src={Imagelink} alt="" className={Styles.image}/>
            <h2 className={Styles.heading}>{title}</h2>
            <p className={Styles.tagline}>{tagline}</p>
            <h3><a href={link} className={Styles.link}>{LinkLine}<ChevronRightIcon /></a></h3>
            </div>
        </div>
    )
}

export default Card
