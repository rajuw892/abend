import React from 'react'
import Styles from './Banner.module.css';
function Banner() {
    return (
        <div className={Styles.bannerContainer}>
            <img src="/Banner1.png" alt="" className={Styles.banner}/>
        </div>
    )
}

export default Banner
