
import Styles from './Offers.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1450 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1450, min: 950 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 950, min: 0 },
        items: 1
    }
};

function Offers() {
    return (
        <div className={Styles.offers}>
            <div> <h1 className={Styles.heading}>Offers for you</h1></div>


            <div>
                <Carousel responsive={responsive}>
                    <div className={Styles.container}>
                        <img src="./offers.png" alt="care" className={Styles.image} />
                    </div>

                    <div className={Styles.container}>
                        <img src="./offers.png" alt="offer" className={Styles.image} />
                    </div>

                    <div className={Styles.container}>
                        <img src="./offers.png" alt="offer" className={Styles.image} />
                    </div>

                    <div className={Styles.container}>
                        <img src="./offers.png" alt="offer" className={Styles.image} />
                    </div>

                    <div className={Styles.container}>
                        <img src="./offers.png" alt="offer" className={Styles.image} />
                    </div>
                </Carousel>
            </div>


        </div >

    )
}

export default Offers
