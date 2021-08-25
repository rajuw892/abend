import React from 'react'
import Styles from './AddImage.module.css';
function AddImage({srcImage}) {
    return (
        <div className={Styles.AddImage}>
            <img src={srcImage} alt="" className={Styles.Image}/>
        </div>
    )
}

export default AddImage
