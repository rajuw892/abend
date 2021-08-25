import React from 'react'
import Styles from './Design.module.css';
function Design({imagetag, paragraph, name, designation}) {
    return (
        <div className={Styles.design}>
            <div className={Styles.left}>
                <img src={imagetag} alt="" />
                <img src="/rectangle.png" alt="" className={Styles.rectangle} />
            </div>
            <div className={Styles.right}>
                 <img src="/topcoma.png" alt="" />
                 <p className={Styles.para}>{paragraph}</p>
                 <div className={Styles.inrow}>
                     <h2 className={Styles.heading}>{name}</h2>
                     <h4 className={Styles.designation}>{designation}</h4>
                 </div>
            </div>
        </div>
    )
}

export default Design
