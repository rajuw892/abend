
import Styles from './Trainer.module.css';
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
        items: 3
    },
    tabletSmall: {
        breakpoint: { max: 1100, min: 750 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 750, min: 0 },
        items: 1
    }
};

function Trainer() {
    return (
        <div>
            <h1 className={Styles.heading}>Find Trainers according to their Specialization</h1>
            <div className={Styles.trainer}>

                <Carousel responsive={responsive}>
                    <div className={Styles.container}>
                        <Card Imagelink={`/FT.png`} title={`Cardio Specialist`} description={`Non nisi qui magna consectetur ea qui et ad ut esse.`} Link={`485 Trainer Available`} link={`./Apointment`} />


                    </div>

                    <div className={Styles.container}>
                        <Card Imagelink={`/FT.png`} title={`Cardio Specialist`} description={`Non nisi qui magna consectetur ea qui et ad ut esse.`} Link={`485 Trainer Available`} />
                    </div>

                    <div className={Styles.container}>
                        <Card Imagelink={`/FT.png`} title={`Cardio Specialist`} description={`Non nisi qui magna consectetur ea qui et ad ut esse.`} Link={`485 Trainer Available`} link={`./Apointment`} />
                    </div>

                    <div className={Styles.container}>
                        <Card Imagelink={`/FT.png`} title={`Cardio Specialist`} description={`Non nisi qui magna consectetur ea qui et ad ut esse.`} Link={`485 Trainer Available`} link={`./Apointment`} />
                    </div>

                    <div className={Styles.container}>
                        <Card Imagelink={`/FT.png`} title={`Cardio Specialist`} description={`Non nisi qui magna consectetur ea qui et ad ut esse.`} Link={`485 Trainer Available`} link={`./Apointment`} />
                    </div>
                </Carousel>


            </div>
        </div>



    )
}

export default Trainer
