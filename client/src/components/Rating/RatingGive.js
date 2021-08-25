import React, {useState, useEffect} from 'react'
import StarIcon from '@material-ui/icons/Star';
import Styles from './Rating.module.css';

function RatingGive() {
    
    const stars = [1,2,3,4,5];
    const filledstar = [true, true, false, false, false];
    const [filled, setFilled] = useState([false, false, false, false, false]);
    const [value, setValue] = useState(0);

    const setFilledStar = (index) =>{
            for(let i=0;i<index;i++){
                filledstar[i] = true;
            }
            for(let i=index; i<5;i++)
            {
                filledstar[i] = false;
            }

            setFilled(filledstar);

            setValue(index);

    }

     useEffect(()=>{
        for(let i=0;i<value;i++){
            filledstar[i] = true;
         }
         for(let i=value; i<5;i++)
         {
            filledstar[i] = false;
         }

         setFilled(filledstar)
     }, []);

    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
            <h2>Give Feedback Rating</h2>
            <div className={Styles.star}>
                {
                    <div className={Styles.outside}>
                        {stars.map(star => (
                           filled[star-1] ? (<div className={Styles.con}>
                               <StarIcon className={Styles.active} onClick={()=> setFilledStar(star)}/>
                           </div>): 
                           (<div className={Styles.con}>
                               <StarIcon className={Styles.unactive} onClick={(e)=> setFilledStar(star)}/>
                               </div>)
                       
                        ))}
                    </div>
                }
            </div>
            </div>
            <div className={Styles.right}>
                <form>
                <input className={Styles.input} type="text" placeholder="type your feedback for review">
                    </input>

                    <button className={Styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RatingGive
