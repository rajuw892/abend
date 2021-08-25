import React from 'react'
import Styles from './Review.module.css';
import {Avatar} from '@material-ui/core';
function Review({message, name, imgsrc}) {
    return (
        <div className={Styles.review}>
            <div className={Styles.top}>
            <Avatar src={imgsrc} />
            <h3>{name}</h3>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default Review
