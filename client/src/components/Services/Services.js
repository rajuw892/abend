   
import React from 'react'
import Styles from './Services.module.css';
import DesignServices from './DesignServices/DesignServices';
import NotesSharpIcon from '@material-ui/icons/NotesSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
function Services() {
    return (
        <div className={Styles.main}>
            <div>
            <a name="services"></a>
            <p className={Styles.para}>OUR SERVICES</p>
            <div className={Styles.innerdiv}>
                 <h1 className={Styles.heading}>Services We Offer</h1>
                 <div className={Styles.filtersection}>
                     <NotesSharpIcon className={Styles.icon} />
                     <p>FILTER</p>
                 </div>
            </div>
            </div>

            <div className={Styles.design}>
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
                <DesignServices Imagetag="/form1.jpg" title={`GYM`} />
            </div>
            <div className={Styles.arrow}>
                      <KeyboardArrowLeftIcon />
                      <KeyboardArrowRightIcon />
            </div>
        </div>
    )
}

export default Services