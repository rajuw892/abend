import React from 'react'
import Styles from './Consult.module.css';
import Card from './Card/Card';

function Consult() {
    return (
        <div className={Styles.consults}>
            <a name="consult"></a>
            <p className={Styles.para}>Meet Doctors</p> 
            <h1 className={Styles.heading}>Choose any</h1>  
            <div className={Styles.cardSection}>
                <Card Imagelink={`/doctor.jpg`} title={`Meet the Doctors`} tagline={`Around you`} LinkLine={`Book your meeting`} link={`./Apointment`} />
                <Card Imagelink={`/doctor.jpg`} title={`Meet the Doctors`} tagline={`Around you`} LinkLine={`Book your meeting`} link={`./Apointment`} />
            </div>      
        </div>
    )
}

export default Consult
