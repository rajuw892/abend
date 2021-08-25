import React from 'react'
import Styles from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.logosection}>
                <img src="/ambhos.png" alt="" />
                <div className={Styles.icons}>
                    <FacebookIcon />
                    <InstagramIcon/>
                    <LinkedInIcon/>
                </div>
                <p className={Styles.copyright}>Copyright © 2021. AMBHOS. All rights reserved.</p>
            </div>
            <div className={Styles.left}>
            <div className={Styles.navigation}>
                <h4 className={Styles.heading}>Navigation</h4>
                <p> <a href="#services" className={Styles.content}>Services</a></p>
                <p> <a href="#event" className={Styles.content}>Event</a></p>
                <p> <a href="#care" className={Styles.content}>Care</a></p>
                <p> <a href="#consult" className={Styles.content}>Consult</a></p>
                <p> <a href="#blogs" className={Styles.content}>Blogs</a></p>
            </div>

            <div className={Styles.contact}>
                <h4 className={Styles.heading}>Contact Us</h4>
                <p className={Styles.content}><CallIcon/> +91 6206407602</p>
                <p className={Styles.content}><CallIcon/> +91 7970499911</p>
                <p className={Styles.content}><EmailIcon/> connectwithus@ambhos.com</p>
            </div>

            <div className={Styles.address}>
                <h4 className={Styles.heading}>Address</h4>
                <p className={Styles.content}>595, LOHIA NAGAR, BHARAMPURI,<br/> DEHRADUN, UTTARAKHAND-248171</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
