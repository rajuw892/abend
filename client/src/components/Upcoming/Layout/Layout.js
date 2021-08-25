import React from 'react'
import Styles from './Layout.module.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Layout({imagetag, title, description}) {

    return (
        <div className={Styles.layout}>
            <img src={imagetag} alt="" />
            <div className={Styles.right}>
                <div className={Styles.titleIcon}>
                    <h1 className={Styles.title}>{title}</h1>
                    <CalendarTodayIcon />
                </div>
                <div className={Styles.description}>
                    <p className={Styles.para}>{description} &nbsp;&nbsp;<span className={Styles.more}>Show More</span></p>
                </div>
            </div>
        </div>
    )
}

export default Layout
