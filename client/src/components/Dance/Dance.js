import React, {useState} from 'react'
import Styles from './Dance.module.css';
import {Button} from '@material-ui/core';
import Card from './Card/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1400, min: 1100 },
    items: 2
  },
   mobile: {
    breakpoint: { max: 1100, min: 0 },
    items: 1 
   }
};

function Dance() {

    const [title, setTitle] = useState("Dance");
    const [para, setPara] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ultricies elit non congue. Fusce sit amet dapibus orci, et blan dolor. Nunc posuere diam dolor, a blandit od dictum sit amet. Etiam vitae euismod ante. Integer dict.");
    return (
        <div className={Styles.main}>

            {/*for left section with content*/}
            <div className={Styles.left}>
                  <h2 className={Styles.title}>{title}</h2>
                  <p className={Styles.para}>{para}</p>
                  <Button className={Styles.explore}>Explore</Button>
            </div>

            {/*for right section with carousel effect */}
            <div className={Styles.right}>
            <Carousel responsive={responsive}>
              <div className={Styles.container}>
              <Card heading={`Dance`} imagetag={`/Dance.jpg`} />
              </div>

              <div className={Styles.container}>
              <Card heading={`Dance`} imagetag={`/Dance.jpg`} />
              </div>

              <div className={Styles.container}>
              <Card heading={`Dance`} imagetag={`/Dance.jpg`} />
              </div>

              <div className={Styles.container}>
              <Card heading={`Dance`} imagetag={`/Dance.jpg`} />
              </div>

              <div className={Styles.container}>
              <Card heading={`Dance`} imagetag={`/Dance.jpg`} />
              </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Dance