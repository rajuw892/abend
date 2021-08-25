import React from 'react'
import Styles from './Trending.module.css';
import Layout from './Layout/Layout';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 930 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 930, min: 620 },
    items: 2
  },
   mobile: {
    breakpoint: { max: 620, min: 0 },
    items: 1 
   }
};

function Trending() {
    return (
        <div className={Styles.trending}>
            <p className={Styles.para}>Visit Our</p>
            <h1 className={Styles.heading}>Trending Topics</h1>

            <Carousel responsive={responsive}>
                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Karate`}
                  description={`Zumba dance is a full body- workout. It will help you burn calories and build endurance..`}/>
                </div>

                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Karate`}
                  description={`Zumba dance is a full body- workout. It will help you burn calories and build endurance..`}/>
                </div>

                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Karate`}
                  description={`Zumba dance is a full body- workout. It will help you burn calories and build endurance..`}/>
                </div>

                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Karate`}
                  description={`Zumba dance is a full body- workout. It will help you burn calories and build endurance..`}/>
                </div>

                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Karate`}
                  description={`Zumba dance is a full body- workout. It will help you burn calories and build endurance..`}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Trending
