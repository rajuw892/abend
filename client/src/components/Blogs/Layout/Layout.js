import React from 'react'
import Styles from './Layout.module.css';
import ScheduleIcon from '@material-ui/icons/Schedule';
function Layout({imagetag, title, dateAndTime, para}) {
    return (
        <div className={Styles.Layout}>
            <img src={imagetag} alt="" className={Styles.image}/>
            <h2 className={Styles.heading}>{title}</h2>
            <h5 className={Styles.dateandtime}><ScheduleIcon/>&nbsp;&nbsp;&nbsp;{dateAndTime}</h5>
            <p className={Styles.para}>{para} <a href="" className={Styles.anchortag}>See More</a> </p>
        </div>
    )
}

export default Layout
