import React from 'react'
import Styles from './ServicesLayout.module.css';
function ServicesLayout({ServiceName, count, time}) {
    return (
        <div className={Styles.services}>
            {time ? (<div>
            <h4 className={Styles.heading}>{ServiceName}</h4>
            {count ? <p className={Styles.para}>{count}</p> : <p className={Styles.paraRed}>0</p>}
            </div>): (<div>
            <h4 className={Styles.heading}>{ServiceName}</h4>
            {count ? <p className={Styles.para}>{count}</p> : <></>}
            </div>)}
        </div>
    )
}

export default ServicesLayout
