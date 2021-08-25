import React from 'react'
import Styles from './RD.module.css';
function RD() {
    return (
        <div className={Styles.remaining}>
                <h1 className={Styles.heading}>Remaining Days</h1>
                <h1 className={Styles.headingdays}>15</h1>            
        </div>
    )
}

export default RD
