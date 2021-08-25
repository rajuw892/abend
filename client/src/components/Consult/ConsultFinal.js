import React from 'react'
import Styles from './Consult.module.css';
import Consult from './Consult';
function ConsultFinal() {
    return (
        <div className={Styles.ConsultFinal}>
            <Consult />
            <div className={Styles.up}>
                <div className={Styles.innerup}>
                </div>

                <div className={Styles.innerup}>
                </div>
            </div> 
        </div>
    )
}

export default ConsultFinal
