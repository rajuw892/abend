import React from 'react'
import Styles from './ItemCare.module.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function ItemCare({imglink, title, linkTag, link}) {
    return (
        <div className={Styles.main}>
             <div className={Styles.innerdiv}>
                    <img src={imglink} className={Styles.image}/>
                    <div className={Styles.addspace}>
                    <h2 className={Styles.title}>{title}</h2>
                    <h3 className={Styles.link}><a href="" className={Styles.anchortag}>{linkTag}<ChevronRightIcon className={Styles.icon} /></a></h3>
                    </div>
             </div>            
        </div>
    )
}

export default ItemCare
