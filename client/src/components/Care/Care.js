import React from 'react'
import Styles from './Care.module.css';
import Layout from './LayoutCare';
function Care() {
    return (
        <div className={Styles.CareSection}>
            <p className={Styles.para}>your health</p>
            <h1 className={Styles.heading}>We care for you</h1>
            <Layout className={Styles.layout} />
            <div className={Styles.up}>

            </div>
        </div>
    )
}

export default Care
