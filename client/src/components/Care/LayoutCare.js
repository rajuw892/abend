import React from 'react'
import Styles from './Care.module.css';
import ItemCare from './item-care/ItemCare';
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

function LayoutCare() {


    return (
        <div className="main">
            <a name="care"></a>
            <Carousel responsive={responsive}>
                <ItemCare imglink="/care.jpg" title={`Book for Vaccination`} linkTag={`click here to book you slot`}/>
                <ItemCare imglink="/care.jpg" title={`Book for Vaccination`} linkTag={`click here to book you slot`}/>
                <ItemCare imglink="/care.jpg" title={`Book for Vaccination`} linkTag={`click here to book you slot`}/>
                <ItemCare imglink="/care.jpg" title={`Book for Vaccination`} linkTag={`click here to book you slot`}/>  
            </Carousel>
                
                
        </div>
    )
}

export default LayoutCare