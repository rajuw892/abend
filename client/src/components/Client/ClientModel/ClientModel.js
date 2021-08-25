import React from 'react'
import Styles from './ClientModel.module.css';
function ClientModel({ImageTag, title}) {
    return (
        <div className={Styles.model}>
            <div className={Styles.inner}>
            <img src={ImageTag} alt="" />
            <h3 className={Styles.heading}>{title}</h3>
            </div>
        </div>
    )
}

export default ClientModel
