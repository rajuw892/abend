import React from 'react'
import Styles from './Testimonials.module.css';
import Design from './Design/Design';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1000, min: 824 },
      items: 1
    },
    tablet: {
        breakpoint: { max: 824, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
};

function Testimonials() {
    return (
        <div className={Styles.main}>
            <p className={Styles.para}>Members</p>
            <h1 className={Styles.heading}>Our Testimonials</h1>

            <div className={Styles.container}>

            <Carousel responsive={responsive}>
            <div className={Styles.actualdiv}>
                <Design imagetag={`/person.jpg`} paragraph={`We at Sprinteriors wanted our website to be futuristic, easy to understand, user 
                friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the 
                way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. 
                amalgamated our proficiency in a simple, elegant and totally integrated.`}
                   name={`Ayush Gour`} designation={`Co-founder of Ambhos.pvt.ltd`} />
                </div>

                <div className={Styles.actualdiv}>
                <Design imagetag={`/person.jpg`} paragraph={`We at Sprinteriors wanted our website to be futuristic, easy to understand, user 
                friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the 
                way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. 
                amalgamated our proficiency in a simple, elegant and totally integrated.`}
                   name={`Ayush Gour`} designation={`Co-founder of Ambhos.pvt.ltd`} />
                </div>

                <div className={Styles.actualdiv}>
                <Design imagetag={`/person.jpg`} paragraph={`We at Sprinteriors wanted our website to be futuristic, easy to understand, user 
                friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the 
                way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. 
                amalgamated our proficiency in a simple, elegant and totally integrated.`}
                   name={`Ayush Gour`} designation={`Co-founder of Ambhos.pvt.ltd`} />
                </div>

                <div className={Styles.actualdiv}>
                <Design imagetag={`/person.jpg`} paragraph={`We at Sprinteriors wanted our website to be futuristic, easy to understand, user 
                friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the 
                way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. 
                amalgamated our proficiency in a simple, elegant and totally integrated.`}
                   name={`Ayush Gour`} designation={`Co-founder of Ambhos.pvt.ltd`} />
                </div>
            </Carousel>
            </div>
            
        </div>
    )
}

export default Testimonials
